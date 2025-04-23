// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Magic Link',                     // Un espacio para pasar validación
  tagline: ' ',                   // Lo mismo, para que no quede cadena vacía
  favicon: 'img/favicon.ico',
  url: 'https://986079838.senati.chat.pe',     // Placeholder válido
  baseUrl: '/',
  organizationName: ' ',
  projectName: ' ',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        
      }),
    ],
  ],
  
};

export default config;
