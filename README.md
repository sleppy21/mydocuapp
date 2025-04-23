**MagicLock**


Proyecto de gestión y generación de enlaces mágicos de acceso con almacenamiento cifrado de contraseñas.


🚀 **Inicio rápido**

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/magiclock.git
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

---

## 📖 Descripción

MagicLock es una aplicación web construida sobre [Docusaurus](https://docusaurus.io/) que te permite:

- 🔒 Almacenar contraseñas de forma segura con cifrado de extremo a extremo.
- 🔑 Generar contraseñas aleatorias robustas.
- ✨ Crear enlaces mágicos de acceso instantáneo sin usuario ni contraseña.
- ☁️ Sincronizar datos en la nube y acceder desde cualquier dispositivo.
- 📊 Registrar accesos para mayor control.

---

## 🗂️ Estructura del Proyecto

```text
mydocuapp/
├── docusaurus.config.js      # Configuración principal de Docusaurus
├── src/
│   ├── pages/
│   │   ├── index.js         # Página de inicio (hero + características)
│   │   ├── login.js         # Formulario de login y generación de Magic Link
│   │   └── dashboard.js     # Área segura post-login
│   └── css/
│       └── custom.css       # Estilos globales personalizados
├── static/
│   └── img/
│       └── favicon.ico      # Favicon del sitio
└── package.json             # Dependencias y scripts
```

---

## 💻 Tecnologías

- [Docusaurus](https://docusaurus.io/)  
- React  
- JavaScript (ES6+)  
- CSS customizado  

---

## ⚙️ Instalación y Configuración

1. Asegúrate de tener Node.js >= 14.
2. Clona el repositorio y entra al directorio del proyecto.
3. Ejecuta:
   ```bash
   npm install
   npm start
   ```
4. Abre `http://localhost:3000` en tu navegador.

---

## 🚪 Uso

1. Accede a la página de inicio y explora las características.
2. Ve a `Iniciar Sesión` e ingresa uno de los usuarios en `src/pages/login.js` (por ejemplo, `admin:contraseña123`).
3. Para generar tu Magic Link, haz clic en **Generar Magic Link** (solo admin). El enlace será copiado al portapapeles.
4. Pega el link en tu navegador para acceder al `Dashboard`.

---

## 📦 Scripts Útiles

- `npm start`: Inicia el servidor de desarrollo.
- `npm run build`: Genera los archivos estáticos para producción.
- `npm run serve`: Sirve la versión estática localmente.

---

## 🤝 Contribuciones

¡Se agradecen las contribuciones! Para contribuir:

1. Haz un _fork_.
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y _commitea_ (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz _push_ a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto utiliza la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

> ✨ ¡Gracias por usar MagicLock! Mantén tus contraseñas seguras 🔐 y el acceso sencillo 🪄.

