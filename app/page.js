'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function HomePage() {
  const router = useRouter();

  const goToUserLogin = () => {
    router.push('/login');
  };

  const goToAdminLogin = () => {
    router.push('/logins');
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px' }}>
      <h1>Welcome</h1>
      <button onClick={goToUserLogin} style={buttonStyle}>User Login</button>
      <button onClick={goToAdminLogin} style={buttonStyle}>Admin Login</button>
    </main>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#0070f3',
  color: 'white',
};