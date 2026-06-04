/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Premium Dark Theme Palette
        brand: {
          bg: '#000000',       // Changed from #030014 to pure black
          surface: '#0a0a0a',  // Changed from #0a0520 to dark gray/black // Card/Section surface background
          accent: '#00d2ff',   // Electric Blue
          purple: '#7928ca',   // Deep Royal Purple
          glow: '#9b51e0',     // Accent glow color
        },

        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
          muted: '#666666',
        }
      },

      fontFamily: {
        // Modern SaaS typography stack
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
      },

      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-blue': '0 0 15px rgba(0, 210, 255, 0.3)',
        'neon-purple': '0 0 15px rgba(121, 40, 202, 0.3)',
      },

      backdropBlur: {
        premium: '20px',
      }
    },
  },

  plugins: [],
}