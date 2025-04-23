// src/pages/login.js
import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/custom.css';

export default function Login() {
  // Llamamos hooks al inicio
  const usersFileUrl = useBaseUrl('data/users.txt');  // '/data/users.txt'
  const dashboardPath = useBaseUrl('dashboard');      // '/dashboard'

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [linkMessage, setLinkMessage] = useState('');

  // Valida usuario:contraseña leyendo users.txt
  const validateCredentials = async () => {
    try {
      const res = await fetch(usersFileUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      return text.split('\n').some(line => {
        const [u, p] = line.trim().split(':');
        return u === user && p === pass;
      });
    } catch (err) {
      console.error('Error reading users.txt:', err);
      return false;
    }
  };

  // Login clásico
  const handleLogin = async () => {
    setError('');
    if (await validateCredentials()) {
      sessionStorage.setItem('magic-auth', 'true');
      // Redirige relativo a baseUrl
      window.location.href = dashboardPath;
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  // Genera un token aleatorio
  const generateToken = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2);

  // Generar Magic Link de un solo uso
  const handleGenerateLink = async () => {
    setError('');
    setLinkMessage('');
    // Validar credenciales primero
    if (!(await validateCredentials())) {
      setError('Usuario o contraseña incorrectos.');
      return;
    }
    if (user !== 'admin') {
      setError('Solo "admin" puede generar Magic Link.');
      return;
    }
    // Crear token y almacenarlo
    const token = generateToken();
    const tokens = JSON.parse(localStorage.getItem('magic-tokens') || '[]');
    tokens.push(token);
    localStorage.setItem('magic-tokens', JSON.stringify(tokens));

    // Construir link sin exponer credenciales
    const link = `${window.location.origin}${dashboardPath}?token=${token}`;

    // Copiar al portapapeles
    try {
      await navigator.clipboard.writeText(link);
      setLinkMessage('¡Enlace generado y copiado al portapapeles!');
    } catch {
      setLinkMessage(`Enlace generado: ${link}`);
    }
  };

  return (
    <Layout title="Iniciar Sesión" description="MagicLock Login">
      <main className="container">
        <div className="auth-card">
          <h1>Iniciar Sesión</h1>

          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              placeholder="admin"
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              placeholder="admin123"
            />
          </div>

          <button
            type="button"
            className="button primary"
            onClick={handleLogin}
          >
            Entrar
          </button>

          <button
            type="button"
            className="button secondary"
            onClick={handleGenerateLink}
          >
            Generar Magic Link
          </button>

          {error && <div className="alert error">{error}</div>}
          {linkMessage && <div className="alert success">{linkMessage}</div>}
        </div>
      </main>
    </Layout>
  );
}
