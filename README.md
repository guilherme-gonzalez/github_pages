
# Nombre del Proyecto

Bienvenido a la documentación de nuestro sitio web basado en Docusaurus, desplegado en GitHub Pages. Este README te guiará a través de la estructura del proyecto, las tecnologías utilizadas y cómo todo funciona en conjunto.

## Tabla de Contenidos

- [Nombre del Proyecto](#nombre-del-proyecto)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Introducción](#introducción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Estructura de Carpetas](#estructura-de-carpetas)
    - [Explicación Detallada](#explicación-detallada)
  - [Primeros Pasos](#primeros-pasos)
    - [Requisitos Previos](#requisitos-previos)
    - [Instalación](#instalación)
    - [Ejecutando el Servidor de Desarrollo](#ejecutando-el-servidor-de-desarrollo)
    - [Construyendo el Sitio](#construyendo-el-sitio)
    - [Despliegue](#despliegue)
  - [Licencia](#licencia)

## Introducción

Nuestro sitio web está construido usando [Docusaurus](https://docusaurus.io/), un proyecto de código abierto para construir, desplegar y mantener sitios web de documentación de manera fácil. Docusaurus simplifica el proceso de crear y mantener sitios de documentación proporcionando características y temas listos para usar.

## Tecnologías Utilizadas

- **Docusaurus:** El marco principal para construir el sitio de documentación.
- **React:** Docusaurus utiliza React para construir la interfaz de usuario.
- **MDX:** Combina Markdown y JSX para escribir contenido.
- **Node.js y npm:** Utilizados para la gestión de paquetes y la ejecución de scripts de compilación.
- **GitHub Pages:** Para el despliegue y alojamiento del sitio web.

## Estructura de Carpetas

Aquí tienes una visión general de la estructura del proyecto:

```
project-root/
├── README.md
├── babel.config.js
├── build/
├── docs/
├── docusaurus.config.js
├── node_modules/
├── package-lock.json
├── package.json
├── sidebars.js
├── src/
└── static/
```

### Explicación Detallada

- **README.md:** Este archivo, proporcionando una visión general e instrucciones para el proyecto.
- **babel.config.js:** Archivo de configuración para Babel, que se utiliza para compilar JavaScript.
- **build/:** El directorio de salida donde se generan los archivos estáticos después de ejecutar el comando de compilación.
- **docs/:** Contiene los archivos Markdown para el contenido de la documentación.
- **docusaurus.config.js:** Archivo de configuración principal para el sitio Docusaurus.
- **node_modules/:** Directorio que contiene todas las dependencias del proyecto.
- **package-lock.json:** Describe el árbol de dependencias exacto que fue generado, asegurando instalaciones consistentes.
- **package.json:** Lista las dependencias del proyecto y contiene scripts para ejecutar y construir el proyecto.
- **sidebars.js:** Define la estructura de la barra lateral para el sitio de documentación.
- **src/:** Contiene el código fuente, incluyendo componentes React personalizados, páginas y estilos.
- **static/:** Contiene activos estáticos como imágenes, favicons y otros archivos que se sirven directamente desde la URL raíz.

## Primeros Pasos

### Requisitos Previos

- Node.js (v12.x o superior)
- npm (v6.x o superior)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/guilherme-gonzalez/github_pages
   cd github_pages/website
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

### Ejecutando el Servidor de Desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run start
```

Esto iniciará el servidor de desarrollo de Docusaurus y abrirá tu sitio en el navegador web predeterminado. Cualquier cambio que hagas se recargará automáticamente.

### Construyendo el Sitio

Para construir los archivos estáticos para el despliegue, ejecuta:

```bash
npm run build
```

Los archivos estáticos se generarán en el directorio `build`.

### Despliegue

Para desplegar el sitio en GitHub Pages, ejecuta:

```bash
npm run deploy
```

Esto construirá el sitio y empujará el contenido del directorio `build` a la rama `gh-pages` de tu repositorio.


## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.