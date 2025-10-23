'use client';
import React from 'react';
import { UserForm } from '../organisms/userForm';

export const RegistrationTemplate: React.FC = () => {
  return (
      /*header futuramente*/

      <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <section className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Cadastro
          </h1>
          <UserForm />
        </section>
      </main>

      /*footer futuramente*/

    );
};
