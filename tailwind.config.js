/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#06151d', steel: '#102a36', signal: '#f21f2b', mist: '#eef2f3', metal: '#aab8be' },
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
    boxShadow: { glow: '0 20px 80px rgba(242,31,43,.18)' }
  }},
  plugins: []
}