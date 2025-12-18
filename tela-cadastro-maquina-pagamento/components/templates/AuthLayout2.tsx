import React from 'react';
import { Logo } from '../atoms/logo'; 
import { Typography } from '../atoms/typography';

export const AuthLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto h-12 w-auto w-48 mb-6">
            <Logo />
        </div>
        <Typography variant="h2" className="mt-6 text-center text-gray-900">
          {title}
        </Typography>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
        </div>
      </div>
    </div>
  );
};