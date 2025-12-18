'use client';
import React from 'react';
import { Typography } from '../atoms/typography';
import Button from '../atoms/button';

interface CardSelecaoPerfilProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

export const CardSelecaoPerfil: React.FC<CardSelecaoPerfilProps> = ({
  title,
  description,
  icon,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      variant="selection"
    >
      {icon && (
        <div className="text-4xl text-blue-600">
          {icon}
        </div>
      )}

      <Typography variant="h2" className="text-lg font-semibold text-gray-800">
        {title}
      </Typography>

      <Typography variant="body" className="text-sm text-gray-600">
        {description}
      </Typography>
    </Button>
  );
};
