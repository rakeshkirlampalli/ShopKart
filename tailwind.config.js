/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Syne: ["Syne", "sans-serif"],
      },
      textColor: {
        'custom-gray': '#161615',
      },
      fontSize:{
        'l':'40px'
      },
      maxWidth: {
        '800': '800px'
      },
      backgroundImage: {
        "hero-pattern": "url('../assets/images/footer.svg')",
      },
      height: {
        '25p': '25%',  // 25% height
        '50p': '50%',  // 50% height
        '75p': '80%',  // 75% height
        '100p': '100%', // 100% height
      },  width: {
        '25p': '25%',  // 25% width
        '50p': '50%', 
        '80p':"80%" ,// 50% width
        '88p': '88%',  // 75% width
        '100p': '100%', // 100% width
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
