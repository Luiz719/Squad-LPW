'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthLayout } from '../../../../components/templates/AuthLayout';
import { FormField } from '../../../../components/molecules/FormField'; 
import { Button } from '../../../../components/atoms/button';

export default function AdminRegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    matricula: '',
    accessKey: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setGeneralError('');

    try {
      const res = await fetch('/api/auth/register/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Enviamos o estado direto
      });

      if (res.ok) {
        router.push('/login?success=true');
      } else {
        const json = await res.json();
        setGeneralError(json.message || 'Erro ao cadastrar');
      }
    } catch (err) {
      setGeneralError('Erro de conexão.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout title="Cadastro Administrativo">
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        <FormField 
            label="Nome Completo" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
        />

        <FormField 
            label="E-mail Corporativo" 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField 
                label="Matrícula" 
                id="matricula" 
                name="matricula" 
                value={formData.matricula} 
                onChange={handleChange} 
            />
            
            <FormField 
                label="Chave de Acesso" 
                id="accessKey" 
                name="accessKey" 
                type="password" 
                value={formData.accessKey} 
                onChange={handleChange} 
            />
        </div>

        <FormField 
            label="Senha" 
            id="password" 
            name="password" 
            type="password" 
            value={formData.password} 
            onChange={handleChange} 
        />

        {generalError && (
            <p className="text-red-500 text-sm text-center">{generalError}</p>
        )}

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Validando...' : 'Criar Conta Admin'}
        </Button>
      </form>
    </AuthLayout>
  );
}