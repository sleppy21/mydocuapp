// src/pages/login.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/custom.css';

// Íconos inline SVG
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
    <path d="M10 4a4 4 0 100 8 4 4 0 000-8z" />
    <path fillRule="evenodd" d="M2 14a6 6 0 0112 0v1H2v-1z" clipRule="evenodd" />
  </svg>
);
const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V18h-2v-1.07a5.002 5.002 0 01-3.536-3.536H6v-2h1.464A5.002 5.002 0 0111 7.07V6h2v1.07a5.002 5.002 0 013.536 3.536H18v2h-1.464A5.002 5.002 0 0113 16.93z" />
  </svg>
);

export default function Login() {
  const usersFileUrl = useBaseUrl('data/users.txt');
  const dashboardPath  = useBaseUrl('dashboard');

  const [user, setUser]       = useState('');
  const [pass, setPass]       = useState('');
  const [error, setError]     = useState('');
  const [linkMessage, setLinkMessage] = useState('');

  const validateCredentials = async () => {
    try {
      const res  = await fetch(usersFileUrl);
      const text = await res.text();
      return text.split('\n').some(line => {
        const [u,p] = line.trim().split(':');
        return u === user && p === pass;
      });
    } catch {
      return false;
    }
  };

  const handleLogin = async () => {
    setError('');
    if (await validateCredentials()) {
      sessionStorage.setItem('magic-auth','true');
      window.location.href = dashboardPath;
    } else setError('Usuario o contraseña incorrectos.');
  };

  const generateToken = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2);

  const handleGenerateLink = async () => {
    setError('');
    setLinkMessage('');
    if (!(await validateCredentials())) {
      setError('Usuario o contraseña incorrectos.');
      return;
    }
    if (user !== 'admin') {
      setError('Solo "admin" puede generar Magic Link.');
      return;
    }
    const token = generateToken();
    const tokens = JSON.parse(localStorage.getItem('magic-tokens')||'[]');
    tokens.push(token);
    localStorage.setItem('magic-tokens',JSON.stringify(tokens));

    const link = `${window.location.origin}${dashboardPath}?token=${token}`;
    try {
      await navigator.clipboard.writeText(link);
      setLinkMessage('¡Enlace generado y copiado al portapapeles!');
    } catch {
      setLinkMessage(`Enlace generado: ${link}`);
    }
  };

  return (
    <Layout title="Iniciar Sesión" description="MagicLock Login">
      <main className="container2">
        <div className="auth-card grid-2cols">

          {/* FORMULARIO */}
          <div>
            <h1>Iniciar Sesión</h1>
            <div className="form-group">
              <label>Usuario</label>
              <input className="hola"
                type="text"
                value={user}
                onChange={e=>setUser(e.target.value)}
                placeholder="admin"
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input className="hola"
                type="password"
                value={pass}
                onChange={e=>setPass(e.target.value)}
                placeholder="admin123"
              />
            </div>
            <button
              type="button"
              className="button primary"
              onClick={handleLogin}
            >
              <UserIcon /> Entrar
            </button>
            <button
              type="button"
              className="button secondary"
              onClick={handleGenerateLink}
            >
              <AiIcon /> Generar Magic Link
            </button>

            {error       && <div className="alert error">{error}</div>}
            {linkMessage && <div className="alert success">{linkMessage}</div>}
          </div>

          {/* INSTRUCCIONES */}
          <aside className="login-help">
            <h2>¿Cómo generar tu enlace?</h2>
            <ol>
              <li>Ingresa tus credenciales de administrador.</li>
              <li>Pulsa <strong>“Generar Magic Link”</strong>.</li>
              <li>Se creará un enlace de un solo uso y se copiará al portapapeles.</li>
              <li>Pega el enlace en otra pestaña para acceder sin introducir credenciales.</li>
            </ol>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
