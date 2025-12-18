'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '../../../../components/templates/AuthLayout';
import { FormField } from '../../../../components/molecules/FormField'; 
import { Button } from '../../../../components/atoms/button';
import { Typography } from '../../../../components/atoms/typography';

export default function ClientRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    phone: '',
    zip: '',
    street: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const payload = {
        name: formData.name,
        cpf: formData.cpf,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        address: {
            zip: formData.zip,
            street: formData.street
        }
    };

    const res = await fetch('/api/auth/register/client', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.ok) router.push('/login?success=true');
    setLoading(false);
  }

  return (
    <AuthLayout title="Abra sua conta">
      <form className="space-y-5" onSubmit={handleSubmit}>
        
        <div className="space-y-4">
            <Typography variant="h3" className="text-lg">Dados Pessoais</Typography>
            
            <FormField 
                label="Nome Completo" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
            />
            
            <div className="grid grid-cols-2 gap-4">
                <FormField 
                    label="CPF" 
                    id="cpf" 
                    name="cpf" 
                    placeholder="000.000.000-00" 
                    value={formData.cpf} 
                    onChange={handleChange} 
                />
                <FormField 
                    label="Celular" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                />
            </div>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-4">
            <Typography variant="h3" className="text-lg">Endereço</Typography>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <FormField 
                        label="CEP" 
                        id="zip" 
                        name="zip" 
                        value={formData.zip} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="col-span-2">
                    <FormField 
                        label="Rua" 
                        id="street" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange} 
                    />
                </div>
            </div>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-4">
             <FormField 
                label="Seu melhor e-mail" 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
            />
             <FormField 
                label="Crie uma senha" 
                id="password" 
                name="password" 
                type="password" 
                value={formData.password} 
                onChange={handleChange} 
            />
        </div>

        <Button type="submit" disabled={loading} className="w-full mt-6">
          {loading ? 'Enviando...' : 'Finalizar Cadastro'}
        </Button>
      </form>
    </AuthLayout>
  );
}