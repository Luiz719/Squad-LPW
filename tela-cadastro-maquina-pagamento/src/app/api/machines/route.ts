import { NextResponse } from 'next/server';

export interface Machine {
  id: string;
  serialNumber: string;
  model: string; 
  status: 'active' | 'inactive';
}

let machines: Machine[] = [
  { id: '1', serialNumber: 'SN998877', model: 'Smart POS', status: 'active' },
  { id: '2', serialNumber: 'SN112233', model: 'Mini', status: 'inactive' },
];

export async function GET() {
  return NextResponse.json(machines);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newMachine = { ...body, id: Date.now().toString() }; 
  machines.push(newMachine);
  return NextResponse.json(newMachine, { status: 201 });
}