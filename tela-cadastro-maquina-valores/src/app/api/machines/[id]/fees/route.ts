import { NextResponse } from 'next/server';

let feesDb: Record<string, any> = {};

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { id } = await params;

  const fees = feesDb[id] || { 
    debit_in: 0, debit_out: 0, 
    credit_in: 0, credit_out: 0 
  };
  return NextResponse.json(fees);
}

export async function POST(request: Request, { params }: RouteParams) {
  const { id } = await params;

  const body = await request.json();
  
  feesDb[id] = body;
  
  return NextResponse.json({ message: "Taxas atualizadas" }, { status: 200 });
}