/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primario': '#134f66', // azul oscuro
        'secundario': '#19a7c4', // azul claro
        'acento': '#1796a6', // turquesa
        'fondo': '#f8f9fa', // gris claro
        'dark': "#002F69", // fondo oscuro
        'terciario': "#177397", // fondo oscuro
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
