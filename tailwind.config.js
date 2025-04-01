/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        accent: '#3b82f6',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-right-out': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(20px)' }
        },
        'slide-left-out': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-20px)' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-up-delayed': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '50%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out-up': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' }
        },
        'bg-fade-in': {
          '0%': { backgroundColor: 'rgb(255 255 255)' },
          '100%': { backgroundColor: 'rgb(37 99 235)' }
        },
        'bg-fade-out': {
          '0%': { backgroundColor: 'rgb(37 99 235)' },
          '100%': { backgroundColor: 'rgb(255 255 255)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'slide-up': 'slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'zoom-in': 'zoom-in 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.8s ease-out forwards',
        'slide-left': 'slide-left 0.8s ease-out forwards',
        'slide-right-out': 'slide-right-out 0.8s ease-out forwards',
        'slide-left-out': 'slide-left-out 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-up-delayed': 'fade-in-up-delayed 1s ease-out forwards',
        'fade-out-up': 'fade-out-up 0.8s ease-out forwards',
        'bg-fade-in': 'bg-fade-in 1.5s ease-out forwards',
        'bg-fade-out': 'bg-fade-out 1s ease-out forwards'
      }
    },
  },
  plugins: [],
} 