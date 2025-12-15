'use client';
import React from 'react';

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
    <button
      onClick={onClick}
      className="
        w-full
        border border-gray-300
        rounded-lg
        p-6
        flex flex-col
        items-center
        gap-3
        text-center
        hover:border-blue-500
        hover:shadow-md
        transition
      "
    >
      {icon && (
        <div className="text-4xl text-blue-600">
          {icon}
        </div>
      )}

      <h2 className="text-lg font-semibold text-gray-800">
        {title}
      </h2>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </button>
  );
};
