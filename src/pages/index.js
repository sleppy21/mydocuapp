// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/custom.css';

// Inline SVGs para botones
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
    <path d="M4.5 3.5v13l12-6.5-12-6.5z" />
  </svg>
);
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="icon">
    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 9h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 112 0v3z" clipRule="evenodd"/>
  </svg>
);

export default function Home() {
  return (
    <Layout
      title="Protege tus Contraseñas"
      description="Servicio profesional para gestión y generación de enlaces mágicos de acceso">
      <main className="container">

        {/* HERO A PANTALLA ENTERA */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-title">
              ¡Protege tus<br />Contraseñas<br />con MagicLock!
            </div>
            <div className="hero-text">
              <p>
                MagicLock es la solución profesional para almacenar, generar
                y acceder a tus contraseñas de forma totalmente segura.
                Genera contraseñas robustas con un solo clic y olvida la
                molestia de recordar mil claves. Además, crea un enlace mágico
                que te logea al instante sin pedir usuario ni contraseña.
              </p>
              <Link className="button" to={useBaseUrl('/login')}>
                <PlayIcon />
                Probar ahora
              </Link>
            </div>
          </div>
        </section>

        {/* SECCIÓN POR QUÉ ELEGIR */}
        <section className="features-section">
          <h2>¿Por qué elegir MagicLock?</h2>
          <ul className="features-list">
            <li>Almacenamiento cifrado de extremo a extremo</li>
            <li>Generador de contraseñas aleatorias y seguras</li>
            <li>Enlace mágico de acceso instantáneo</li>
            <li>Interfaz profesional y fácil de usar</li>
            <li>Diseño adaptado a todos los dispositivos</li>
            <li>Sincronización en la nube para acceso desde cualquier lugar</li>
            <li>Registro de accesos para mayor control</li>
            <li>Soporte técnico dedicado 24/7</li>
          </ul>
        </section>

        {/* SECCIÓN EXTRA: BENEFICIOS */}
        <section className="features-section">
          <h2>Lo que obtienes con MagicLock</h2>
          <ul className="features-list">
            <li>Tu información segura y accesible solo por ti</li>
            <li>Interfaz moderna y enfocada en la experiencia de usuario</li>
            <li>Compatible con navegadores modernos y móviles</li>
            <li>Implementación rápida sin configuraciones complejas</li>
          </ul>
        </section>

        {/* SECCIÓN CTA FINAL */}
        <section className="features-section">
          <h2>Empieza ahora mismo</h2>
          <p>
            Con unos pocos clics puedes tener tu cuenta y empezar a disfrutar de la seguridad y comodidad
            de MagicLock.
          </p>
          <Link className="button" to={useBaseUrl('/login')}>
            <PlusIcon />
            Realizar Una Prueba
          </Link>
        </section>

      </main>
    </Layout>
  );
}