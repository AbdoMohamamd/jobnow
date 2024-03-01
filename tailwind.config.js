const { Poppins } = require('next/font/google')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'primary-grey': '#FBFBFB',
        'secondary-grey': '#F2F2F2',
        'primary-color': '#00CC99',
        'primary-text-color': '#8A8A8A',
        'placeholder-grey': '#C4C4C4',
        'secondary-color': '#003A2C'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)']
      },
      flexGrow: {
        0.6: '0.6',
        0.4: '0.4'
      },
      width: {
        '6/10': '60%',
        '4/10': '40%',
        43: '2.6875rem',
        504: '31.5rem',
        300: '22rem'
      },
      height: {
        43: '2.6875rem',
        370: '23.125rem'
      },
      maxWidth: {
        504: '31.5rem'
      },
      gap: {
        83: '5.2rem'
      },

      fontSize: {
        header: '3.25rem',
        8: '0.5rem',
        7: '0.4375rem',
        38: '2.375rem',
        5: '0.3125rem',
        10: '0.625rem'
      },
      borderRadius: {
        '5xl': '4rem'
      },
      gradientColorStopPositions: {
        50: '50%'
      },
      padding: {
        150: '9.375rem'
      },
      screens: {
        xlg: '1500px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.75rem',
          md: '5rem'
        }
      }
    }
  },
  plugins: []
}
