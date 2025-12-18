import { NextResponse } from 'next/server';

interface AdminRegisterDTO {
  name: string;
  email: string;
  matricula: string;
  accessKey: string; 
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: AdminRegisterDTO = await request.json();

    if (body.accessKey !== '123') {
      return NextResponse.json(
        { message: 'Chave de acesso corporativa inválida.' },
        { status: 403 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Admin criado:', body.email);

    return NextResponse.json({ message: 'Conta administrativa criada!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Erro interno' }, { status: 500 });
  }
}