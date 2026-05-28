/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#eaeef6',
          200: '#d0dce8',
          300: '#a5bbd6',
          400: '#7a9bc5',
          500: '#5a7fb8',
          600: '#4563a0',
          700: '#354e85',
          800: '#2a3f6b',
          900: '#1e2d4a'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'segoe-ui', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Menlo', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e2d4a',
            a: {
              color: '#4563a0',
              '&:hover': {
                color: '#354e85'
              }
            }
          }
        }
      }
    }
  },
  plugins: []
}
