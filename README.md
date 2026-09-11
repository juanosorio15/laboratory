# laboratory — React Hooks (useState)

Calculadora de áreas del **triángulo**, **rectángulo** y **cuadrado**, construida con React y Hooks (`useState`), maquetada con **Bootstrap 5**.

## Descripción del proyecto

Página web de una sola vista (`single page`) que permite al usuario digitar las medidas de tres figuras geométricas y obtener el área calculada al presionar un botón. Cada figura mantiene su propio estado (`useState`) para las variables de entrada y para el resultado mostrado en pantalla.

- **Triángulo:** área = (base × altura) / 2
- **Rectángulo:** área = base × altura
- **Cuadrado:** área = lado × lado

## Estructura del proyecto

```
proyecto-figuras/
├── index.html          # Página principal, incluye Bootstrap por CDN
├── package.json
├── vite.config.js
└── src/
    ├── index.jsx        # Punto de entrada de React
    ├── figuras.jsx       # Componente principal con los hooks useState
    └── styles.css        # Estilos propios adicionales a Bootstrap
```

## Instalación y ejecución

```bash
npm install
npm run dev
```

Esto levanta el servidor de desarrollo (Vite) en `http://localhost:5173`.

## A

