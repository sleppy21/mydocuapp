// C:\Users\spiri\Music\mydocuapp\src\pages\index.js
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  FaInfoCircle,
  FaLock,
  FaKey,
  FaLink,
  FaCloud,
  FaChartLine,
  FaHeadset
} from 'react-icons/fa';
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

// Sidebar con secciones de documentación
function Sidebar() {
  return (
    <aside className="docs-sidebar">
      <nav>
        <div className="sidebar-section">
          <h3 className="sidebar-category">Seguridad</h3>
          <ul
            className="sidebar-links"
            style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}
          >
            <li>
              <FaLock className="icon" style={{ color: '#27ae60' }} />
              <Link className="sidebar-link" to="#secure-storage">
                Almacenamiento Seguro
              </Link>
            </li>
            <li>
              <FaKey className="icon" style={{ color: '#8e44ad' }} />
              <Link className="sidebar-link" to="#password-generator">
                Generador de Contraseñas
              </Link>
            </li>
            <li>
              <FaLink className="icon" style={{ color: '#e67e22' }} />
              <Link className="sidebar-link" to="#magic-link">
                Enlace Mágico
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-category">Acceso</h3>
          <ul
            className="sidebar-links"
            style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}
          >
            <li>
              <FaCloud className="icon" style={{ color: '#3498db' }} />
              <Link className="sidebar-link" to="#cloud-sync">
                Sincronización en la Nube
              </Link>
            </li>
            <li>
              <FaChartLine className="icon" style={{ color: '#d35400' }} />
              <Link className="sidebar-link" to="#access-logs">
                Registro de Accesos
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3 className="sidebar-category">Soporte</h3>
          <ul
            className="sidebar-links"
            style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}
          >
            <li>
              <FaHeadset className="icon" style={{ color: '#e74c3c' }} />
              <Link className="sidebar-link" to="#support">
                Soporte Técnico 24/7
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}

export default function Home() {
  return (
    <Layout
      title="Protege tus Contraseñas"
      description="Servicio profesional para gestión y generación de enlaces mágicos de acceso">
      <div className="docs-container">
        <Sidebar />
        <main className="container docs-content">

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
          <section className="features-section2">
            <h2>Lo que obtienes con MagicLock</h2>
            <ul className="features-list2">
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

          {/* Documentación detallada */}
          <section id="intro">
            <h2><FaInfoCircle className="section-icon intro-icon" style={{ color: '#2c3e50' }} /> Introducción</h2>
            <p>MagicLock es la plataforma definitiva para la gestión de contraseñas, diseñada para ofrecer seguridad de grado militar junto con una experiencia de usuario excepcional. Con MagicLock, no solo proteges tu información personal y profesional, sino que también optimizas tu flujo de trabajo diario evitando bloqueos de cuentas y recuperación manual de credenciales.</p>
            <ul>
              <li><strong>Visión general:</strong> Conoce la interfaz limpia y subdivisiones intuitivas para cada funcionalidad.</li>
              <li><strong>Beneficios clave:</strong> Seguridad avanzada, generación automática, acceso instantáneo.</li>
              <li><strong>Requisitos:</strong> Navegador moderno, conexión a internet y cuenta activa.</li>
            </ul>
            <p>Consulta la guía de inicio rápido en la sección siguiente para tu primer login.</p>
          </section>

          <section id="secure-storage">
            <h2><FaLock className="section-icon storage-icon" style={{ color: '#27ae60' }} /> Almacenamiento Seguro</h2>
            <p>Protege tus contraseñas con cifrado AES-256 y hashing SHA-384. Cada dato se cifra localmente y se transmite bajo TLS 1.3.</p>
            <ul>
              <li><em>Clave Maestra:</em> Generada en cliente, nunca almacenada en servidor.</li>
              <li><em>Redundancia:</em> Backup cifrado configurable en Google Drive o Dropbox.</li>
              <li><em>Recuperación:</em> Protocolo seguro de recuperación con OTP.</li>
            </ul>
            <p>Visualiza tu nivel de seguridad con el medidor de fuerza de contraseña integrado.</p>
          </section>

          <section id="password-generator">
            <h2><FaKey className="section-icon generator-icon" style={{ color: '#8e44ad' }} /> Generador de Contraseñas</h2>
            <p>Olvida contraseñas comunes: el generador de MagicLock crea claves únicas y robustas.</p>
            <ul>
              <li><strong>Longitud personalizada:</strong> Desde 8 hasta 64 caracteres.</li>
              <li><strong>Opciones de complejidad:</strong> Símbolos, números, mayúsculas y minúsculas.</li>
              <li><strong>Exclusión inteligente:</strong> Evita caracteres similares (O, 0, l, 1).</li>
            </ul>
            <p>Guarda tus patrones favoritos para generar contraseñas con un solo clic en futuras necesidades.</p>
          </section>

          <section id="magic-link">
            <h2><FaLink className="section-icon magiclink-icon" style={{ color: '#e67e22' }} /> Enlace Mágico</h2>
            <p>Acelera tu acceso: genera un enlace de un solo uso que autentica tu sesión automáticamente.</p>
            <ol>
              <li>Solicita el enlace en tu perfil.</li>
              <li>Recíbelo por correo o SMS.</li>
              <li>Haz clic y entra sin ingresar usuario y contraseña.</li>
            </ol>
            <p>El enlace expira en 15 minutos o tras su primer uso, garantizando máxima seguridad.</p>
          </section>

          <section id="cloud-sync">
            <h2><FaCloud className="section-icon sync-icon" style={{ color: '#3498db' }} /> Sincronización en la Nube</h2>
            <p>Mantén tus credenciales actualizadas y disponibles en todos tus dispositivos.</p>
            <ul>
              <li><strong>Automática:</strong> Sincroniza cambios al instante.</li>
              <li><strong>Multi-dispositivo:</strong> PC, móvil y tablet. Compatible iOS/Android.</li>
              <li><strong>Versionado:</strong> Revertir a estados anteriores con un clic.</li>
            </ul>
            <p>Monitoriza el estado de la sincronización con indicadores en tiempo real.</p>
          </section>

          <section id="access-logs">
            <h2><FaChartLine className="section-icon logs-icon" style={{ color: '#d35400' }} /> Registro de Accesos</h2>
            <p>Audita cada inicio de sesión para mayor control y detección de actividades sospechosas.</p>
            <ul>
              <li><strong>Mapa Interactivo:</strong> Ubicaciones por IP.</li>
              <li><strong>Filtrado Avanzado:</strong> Fecha, dispositivo y ubicación.</li>
              <li><strong>Alertas:</strong> Notificaciones instantáneas ante accesos inusuales.</li>
            </ul>
            <p>Exporta tus logs en CSV o PDF para auditorías externas.</p>
          </section>

          <section id="support">
            <h2><FaHeadset className="section-icon support-icon" style={{ color: '#e74c3c' }} /> Soporte Técnico</h2>
            <p>Estamos disponibles 24/7 para ayudarte con cualquier consulta o incidencia.</p>
            <ul>
              <li><strong>Chat en vivo:</strong> Directo desde la app.</li>
              <li><strong>Email:</strong> soporte@magiclock.com</li>
              <li><strong>Teléfono:</strong> +1 (800) 123-4567</li>
            </ul>
            <p>Visita nuestra base de conocimientos para guías y preguntas frecuentes.</p>
          </section>

        </main>
      </div>
    </Layout>
  );
}