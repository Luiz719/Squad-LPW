'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DashboardLayout } from '../../../../components/templates/DashboardLayout';
import { Button } from '../../../../components/atoms/button';
import { StatusBadge } from '../../../../components/atoms/StatusBadge';
import { Machine } from '@/app/api/machines/route'; 

export default function MachineListPage() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
    fetch('/api/machines').then(res => res.json()).then(setMachines);
  }, []);

  return (
    <DashboardLayout title="Máquinas Cadastradas">
      <div className="flex justify-end mb-4">
        <Link href="/dashboard/maquinas/nova">
          <Button>Nova Máquina</Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Serial</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Modelo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {machines.map((machine) => (
              <tr key={machine.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{machine.serialNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{machine.model}</td>
                <td className="px-6 py-4 text-sm">
                  <StatusBadge status={machine.status} />
                </td>
                
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-4">
                    <Link 
                      href={`/dashboard/maquinas/${machine.id}`} 
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Editar
                    </Link>

                    <Link 
                      href={`/dashboard/maquinas/${machine.id}/valores`} 
                      className="text-green-600 hover:text-green-900 font-bold border border-green-200 px-2 py-1 rounded hover:bg-green-50 transition-colors"
                    >
                      Taxas $
                    </Link>
                  </div>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}