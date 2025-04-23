// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../css/custom.css';

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
          </ul>
        </section>

      </main>
    </Layout>
  );
}
