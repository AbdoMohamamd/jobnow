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
        'primary-color': '#00CC99'
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
        '4/10': '40%'
      },
      fontSize: {
        header: '3.25rem',
        8: '0.5rem',
        7:'0.4375rem'
      },
      borderRadius: {
        '5xl': '4rem'
      },
   
    }
  },
  plugins: []
}
