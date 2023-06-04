/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#ff4c60',
        "content": '#FFFACD'
      },
      fontFamily: {
        'title': ['Outfit', 'sans-serif'],
        'body': ['Jost', 'sans-serif'],
      },
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: '1rem',
        // default breakpoints but with 40px removed
        screens: {
          xs: '480px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
          '5xl': '1600px',
        },
      }
    },
  },
  plugins: [],
}
