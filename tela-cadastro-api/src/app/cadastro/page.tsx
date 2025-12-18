'use client';

import { useRouter } from 'next/navigation';
import { AuthLayout } from '../../../components/templates/AuthLayout';
import { CardSelecaoPerfil } from '../../../components/molecules/CardSelecaoPerfil';
import { User, Briefcase } from 'lucide-react';

export default function PaginaSelecaoCadastro() {
  const router = useRouter();

  return (
    <AuthLayout title="Cadastro">
      <div className="flex flex-col gap-4">

        <CardSelecaoPerfil
          title="Sou Cliente"
          description="Quero me cadastrar como cliente do sistema."
          icon={<User />}
          onClick={() => router.push('/cadastro/cliente')}
        />

        <CardSelecaoPerfil
          title="Sou Colaborador"
          description="Acesso restrito para funcionários."
          icon={<Briefcase />}
          onClick={() => router.push('/cadastro/admin')}
        />

      </div>
    </AuthLayout>
  );
}
