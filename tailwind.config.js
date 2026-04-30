export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(269.96deg, rgba(0, 0, 0, 0.79) 4.05%, rgba(0, 0, 0, 0) 92.43%)',
      },
      colors: {
        primary: '#292929',
        secondary: '#DB323E',
      },
    },
  },
  plugins: [],
}
