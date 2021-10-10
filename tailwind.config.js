const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#141414',
        white: '#fff',
        orange: '#ffa500',
        purple: {
          light: '#ECECFF',
          default: '#B4B4E5'
        },
        gray: {
          lightest: '#F5F5F5',
          light: '#D7D7D7',
          medium: '#B6B6B6',
          default: '#B6B6B6',
          dark: '#7F7F7F',
          darkest: '#494949'
        }
      },
      fontFamily: {
        sans: [
          'HK Grotesk',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'Cormorant',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ]
      },
      maxWidth: {
        reg: '73rem',
        small: '65rem'
      },
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        md: '1.25rem',
        lg: '1.75rem',
        xl: '2rem',
        '2xl': '2.25rem', // Probably only for large icons etc
        '3xl': '3rem', // Probably only for large icons etc
        '4xl': '4rem', // Probably only for large icons etc
        '5xl': '5rem', // Probably only for large icons etc
        '6xl': '6rem', // Probably only for large icons etc
        '7xl': '7rem', // Probably only for large icons etc
        '8xl': '8rem', // Probably only for large icons etc
        '9xl': '9rem', // Probably only for large icons etc
        '10xl': '10rem' // Probably only for large icons etc
      },
    }
  }
}
