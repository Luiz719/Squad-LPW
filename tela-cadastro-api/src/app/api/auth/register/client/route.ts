import { NextResponse } from 'next/server';

interface ClientRegisterDTO {
  name: string;
  cpf: string;
  phone: string;
  address: {
    street: string;
    zip: string;
  };
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: ClientRegisterDTO = await request.json();
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('Cliente criado:', body.email);

  return NextResponse.json({ message: 'Conta de cliente criada!' }, { status: 201 });
}