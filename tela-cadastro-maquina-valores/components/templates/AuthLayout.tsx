'use client';
import React from 'react';
import { Typography } from '../atoms/typography';

interface AuthLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <>
      {/* Header futuramente */}

      <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <section className="w-full max-w-md">
          
          {title && (
            <Typography variant="h1" className="text-3xl font-bold text-center mb-6 text-gray-800">
              {title}
            </Typography>
          )}

          {children}

        </section>
      </main>

      {/* Footer futuramente */}
    </>
  );
};
