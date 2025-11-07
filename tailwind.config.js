/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
    'node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#75ADD0",
        secondary: "#BCD2E9",
        background: "#E5E1EF",
        highlight: "#e0a8cd",
        smothText: "#5B5B5B",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

