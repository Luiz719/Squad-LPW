import React from 'react';
import { Typography } from '../atoms/typography';

export const DashboardLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
            <Typography variant="h2">{title}</Typography>
            {/* Link simples de voltar */}
            <a href="/dashboard" className="text-sm text-gray-500 hover:text-gray-800">Voltar ao Início</a>
        </header>
        <main className="bg-white shadow rounded-lg p-6">
          {children}
        </main>
      </div>
    </div>
  );
};