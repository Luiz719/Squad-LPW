import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles = status === 'active' 
    ? 'bg-green-100 text-green-800' 
    : 'bg-red-100 text-red-800';

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles}`}>
      {status === 'active' ? 'Ativa' : 'Inativa'}
    </span>
  );
};