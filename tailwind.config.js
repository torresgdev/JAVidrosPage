export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
 theme: {
    extend: {
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(-5%)', 
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none', 
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)', 
          },
        },
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
      },
    },
  },
  plugins: [],
};