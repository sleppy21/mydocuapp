// src/pages/dashboard.js
import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import '../css/custom.css';

export default function Dashboard() {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      const stored = JSON.parse(localStorage.getItem('magic-tokens') || '[]');
      const idx = stored.indexOf(token);
      if (idx !== -1) {
        // Consumir token de un solo uso
        stored.splice(idx, 1);
        localStorage.setItem('magic-tokens', JSON.stringify(stored));
        sessionStorage.setItem('magic-auth', 'true');
        setAuthorized(true);
        // Limpiar URL
        window.history.replaceState(null, '', window.location.pathname);
        return;
      }
    }

    // Si ya había sesión activa (login tradicional)
    if (sessionStorage.getItem('magic-auth') === 'true') {
      setAuthorized(true);
      return;
    }

    // Si no, redirigir a login
    window.location.href = '/login';
  }, []);

  if (!authorized) return null;

  return (
    <Layout title="Dashboard">
      <main className="container" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <h1>¡Iniciaste Sesión!</h1>
        <p>Bienvenido al área segura de MagicLock.</p>
      </main>
    </Layout>
  );
}
