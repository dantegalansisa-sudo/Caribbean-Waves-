# Caribbean Waves Tours & Travel

Sitio web de **Caribbean Waves Tours & Travel** — agencia de viajes en Santo Domingo,
República Dominicana. Vuelos, hoteles, paquetes todo incluido, tours, cruceros y
asistencia con visa americana.

Construido con React + TypeScript + Vite + Framer Motion.

## Requisitos

- Node.js 18 o superior

## Comandos

```bash
npm install      # Instala las dependencias
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Compila la versión de producción en /dist
npm run preview  # Previsualiza la versión compilada
```

## Datos del negocio

- **Nombre:** Caribbean Waves Tours & Travel
- **WhatsApp:** 829-914-6230
- **Email:** info@caribbeanwaves.com
- **Dirección:** C/ 31 #10, Los Peralejos, KM 13 Autopista Duarte, Santo Domingo, D.N.
- **Instagram:** [@caribbeanwaves_](https://instagram.com/caribbeanwaves_)
- **RNC:** 1-32-99306-3

## Notas técnicas

Esta web funciona de forma **estática**: todo el contenido está integrado en el
código (no se conecta a ninguna base de datos). El hook `src/hooks/useCollection.ts`
y `src/firebase/config.ts` están desactivados a propósito.

Para activar un panel de administración propio, crea un proyecto en
[Firebase](https://console.firebase.google.com), coloca sus credenciales en
`src/firebase/config.ts` y restaura la versión original de `useCollection.ts`.

## Despliegue

El proyecto incluye `vercel.json` para desplegar en [Vercel](https://vercel.com)
como aplicación de página única (SPA).
