interface HelloWorldData {
  message: string;
}

async function getMessage(): Promise<HelloWorldData> {
  const res = await fetch('http://localhost:3000/api/hello', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getMessage();

  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '3rem' }}>
        {data.message}
      </h1>
    </main>
  );
}