'use client';
import { useState, useEffect, use } from 'react'; 
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '../../../../../../components/templates/DashboardLayout';
import { FormField } from '../../../../../../components/molecules/FormField';
import { Button } from '../../../../../../components/atoms/button';
import { ProfitDisplay } from '../../../../../../components/molecules/ProfitDisplay';
import { calculateSpread, validateFees } from '../../../../utils/feeCalculations';
import { Typography } from '../../../../../../components/atoms/typography';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function MachineFeesPage({ params }: PageProps) {
  const { id } = use(params);
  
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [fees, setFees] = useState({
    debit_in: "0",
    debit_out: "0",
    credit_in: "0",
    credit_out: "0"
  });

  useEffect(() => {
    fetch(`/api/machines/${id}/fees`)
      .then(res => res.json())
      .then(data => {
        setFees({
            debit_in: String(data.debit_in),
            debit_out: String(data.debit_out),
            credit_in: String(data.credit_in),
            credit_out: String(data.credit_out),
        });
      });
  }, [id]); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFees({ ...fees, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const payload = {
        debit_in: Number(fees.debit_in),
        debit_out: Number(fees.debit_out),
        credit_in: Number(fees.credit_in),
        credit_out: Number(fees.credit_out),
    };

    await fetch(`/api/machines/${id}/fees`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });

    setLoading(false);
    alert('Valores atualizados!');
  };

  const profitDebit = calculateSpread(Number(fees.debit_in), Number(fees.debit_out));
  const profitCredit = calculateSpread(Number(fees.credit_in), Number(fees.credit_out));

  return (
    <DashboardLayout title="Configurar Taxas da Máquina">
      <form onSubmit={handleSave} className="space-y-8 max-w-2xl mx-auto">
        
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <Typography variant="h3" className="mb-4">Taxas de Débito</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                    label="Cobrado do Cliente (%)"
                    id="debit_in"
                    name="debit_in"
                    type="number"
                    step="0.01" 
                    value={fees.debit_in}
                    onChange={handleChange}
                />
                <FormField
                    label="Custo/Repasse (%)"
                    id="debit_out"
                    name="debit_out"
                    type="number"
                    step="0.01"
                    value={fees.debit_out}
                    onChange={handleChange}
                    error={validateFees(Number(fees.debit_in), Number(fees.debit_out))}
                />
            </div>
            <ProfitDisplay label="Débito" profit={profitDebit} />
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <Typography variant="h3" className="mb-4">Crédito à Vista</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormField
                    label="Cobrado do Cliente (%)"
                    id="credit_in"
                    name="credit_in"
                    type="number"
                    step="0.01"
                    value={fees.credit_in}
                    onChange={handleChange}
                />
                <FormField
                    label="Custo/Repasse (%)"
                    id="credit_out"
                    name="credit_out"
                    type="number"
                    step="0.01"
                    value={fees.credit_out}
                    onChange={handleChange}
                    error={validateFees(Number(fees.credit_in), Number(fees.credit_out))}
                />
            </div>
            <ProfitDisplay label="Crédito" profit={profitCredit} />
        </div>

        <div className="flex justify-end space-x-3">
             <Button type="button" variant="secondary" onClick={() => router.back()}>
                Voltar
            </Button>
            <Button type="submit" disabled={loading}>
                {loading ? 'Salvando...' : 'Salvar Taxas'}
            </Button>
        </div>

      </form>
    </DashboardLayout>
  );
}