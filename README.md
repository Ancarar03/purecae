# Purecae Jewelry Landing Page

Una elegante landing page para una tienda de joyas artesanales, inspirada en las páginas de producto de Apple. Diseñada con un enfoque moderno, minimalista y visual.

## Características

- Diseño limpio y elegante con enfoque en la experiencia visual
- Navegación fluida con efecto scroll-snap
- Animaciones sutiles con Framer Motion
- Totalmente responsive
- Optimizada para SEO
- Diseño minimalista inspirado en Apple

## Tecnologías utilizadas

- **Next.js 14** (App Router)
- **TypeScript**  
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Next/Image** para optimización de imágenes

## Estructura del proyecto

- `/app` - Código principal de la aplicación Next.js
  - `/components` - Componentes reutilizables
    - `/sections` - Secciones principales de la página
    - `/ui` - Componentes de UI reutilizables
  - `/lib` - Utilidades y helpers
  - `/styles` - Estilos globales
- `/public` - Archivos estáticos
  - `/images` - Imágenes de productos

## Cómo ejecutar el proyecto

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Construcción para producción

```bash
npm run build
```

Después de la construcción, puedes iniciar el servidor con:

```bash
npm run start
```

## Personalización

Para personalizar esta landing page:

1. Modifica las imágenes en `/public/images`
2. Actualiza textos y contenido en los componentes dentro de `/app/components/sections`
3. Ajusta colores y estilos en el archivo `tailwind.config.js` 