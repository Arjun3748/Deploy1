'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import './login.css'
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

   localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);

    console.log('Email:', email);
    console.log(' Password:', password);

    setEmail('');
    setPassword('');
 router.push('/viewblog');
  };

  return (
    <div className="login-container">
  <form onSubmit={handleLogin} className="login-form">
    <h2> user Login</h2>
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
// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import './login.css'
// export default function Login() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//    localStorage.setItem('Email', email);
//     localStorage.setItem('Password', password);

//     console.log('Email:', email);
//     console.log(' Password:', password);

//     setEmail('');
//     setPassword('');
//  router.push('/viewblog');
//   };

//   return (
//     <div className="login-container">
//   <form onSubmit={handleLogin} className="login-form">
//     <h2> user Login</h2>
//     <input
//       type="email"
//       placeholder="Email"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       required
//     />
//     <input
//       type="password"
//       placeholder="Password"
//       value={password}
//       onChange={(e) => setPassword(e.target.value)}
//       required
//     />
//     <button type="submit">Login</button>
//   </form>
// </div>
//   );
// }