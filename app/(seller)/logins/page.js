'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './login.css'
export default function SellerLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'arjun@gmail.com' && password === 'arjun123') {
      localStorage.setItem('role', 'seller');
      router.push('/homes'); 
    } else {
      alert('Invalid admin login');
    }
  };

  return (
   <div className="login-container">
  <form onSubmit={handleLogin} className="login-form">
    <h2> Admin Login</h2>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Login</button>
  </form>
</div>

  );
}