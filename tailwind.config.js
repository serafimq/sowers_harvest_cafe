/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: { // Breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
    },
    colors: {
      body: '#e5e5e5',
      white: '#fff',
      green: {DEFAULT: '#539592', hover: '#40807d'},
      black: {DEFAULT: '#273029', heavy: '#1b211c'},
      grey: '#888888',
      orange: {DEFAULT: '#f2994a', hover: '#da863c'},
      outline: '#f1f1f1',
      pink: '#ffa5a5'
    },
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/hero/bg.png')",
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)',
      },
    },
  },
  plugins: [],
}

