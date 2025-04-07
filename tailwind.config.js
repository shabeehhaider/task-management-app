export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F5F5F7',
        'custom-red': '#EF3B24',
        'custom-red-hover': '#D73720', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        screens: {
          sm: '100%', // Full width for small screens
          md: '100%', // Full width for medium screens
          lg: '1240px', // Custom width for large screens
          xl: '1240px', // Custom width for extra-large screens
          '2xl': '1240px', // Custom width for 2xl screens
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
