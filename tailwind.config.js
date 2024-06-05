/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0 20px rgba(0, 0, 255, 0.6)",
          "0 0px 65px rgba(0, 0,255, 0.2)"
        ]
      },
      colors: {
        'background': '#080808',
        'text': '#f7f7f7',
        'highlight': '#60a5fa',
        'primary': '#3b82f6',
        'hover': '#2563eb'
      }
    },
    screens: {
      'xsm' : '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
  },
  plugins: [],
}
