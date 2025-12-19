import React from 'react';
import { Typography } from '../atoms/typography';

interface ProfitDisplayProps {
  label: string;
  profit: number;
}

export const ProfitDisplay: React.FC<ProfitDisplayProps> = ({ label, profit }) => {
  const isLoss = profit < 0;
  
  return (
    <div className={`p-4 rounded-lg border ${isLoss ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
      <Typography variant="body" className="text-gray-600 font-medium">
        Spread ({label})
      </Typography>
      <Typography variant="h2" className={isLoss ? 'text-red-600' : 'text-green-600'}>
        {profit}%
      </Typography>
      {isLoss && <span className="text-xs text-red-500">Prejuízo operacional</span>}
    </div>
  );
};