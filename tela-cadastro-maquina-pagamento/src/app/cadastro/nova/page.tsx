'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from '../../../../components/templates/DashboardLayout';
import { FormField } from '../../../../components/molecules/FormField';
import { Button } from '../../../../components/atoms/button';

export default function NewMachinePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    serialNumber: '',
    model: '',
    status: 'active' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await fetch('/api/machines', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    setLoading(false);
    router.push('/cadastro'); 
  };

  return (
    <DashboardLayout title="Cadastrar Nova Máquina">
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        
        <FormField
          label="Número de Série"
          id="serialNumber"
          name="serialNumber"
          placeholder="Ex: SN123456"
          value={formData.serialNumber}
          onChange={handleChange}
        />

        <FormField
          label="Modelo"
          id="model"
          name="model"
          placeholder="Ex: Smart POS Pro"
          value={formData.model}
          onChange={handleChange}
        />
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
                name="status"
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2 border"
            >
                <option value="active">Ativa</option>
                <option value="inactive">Inativa</option>
            </select>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
            <Button type="button" variant="secondary" onClick={() => router.back()}>
                Cancelar
            </Button>
            <Button type="submit" disabled={loading}>
                {loading ? 'Salvando...' : 'Salvar Máquina'}
            </Button>
        </div>
      </form>
    </DashboardLayout>
  );
}