/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
// const { keyframes, animation } = require('./src');
const { keyframes, animation } = require('./src/tailwindAnimation')

// 색상코드 팔레트 : https://uicolors.app/generate/d41212

module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes,
      animation,
      colors: {
        'myMainColor': {
          // 수능형리레(212.18.18) 메인컬러
          50: "#fff1f1",//배경
          100: "#ffe0e0",
          200: "#ffc6c6",
          300: "#ff9f9f",
          400: "#ff6767",
          500: "#fb3838",
          600: "#e91919",
          700: "#d41212",//수능형리레
          800: "#a21212",
          900: "#861616",
          950: "#490606",
        },
        'myPointColor':{
          // 바나나(255.224.98) 메인컬러
          50: "#fefbe8",//배경
          100: "#fff8c2",
          200: "#ffed89",
          300: "#ffe062",//바나나
          400: "#fdc512",
          500: "#ecab06",
          600: "#cc8302",
          700: "#a35c05",
          800: "#86480d",
          900: "#723b11",
          950: "#431e05",
        },
        'myFontColor':{
          50: "#f3f7fc",
          100: "#e5eff9",
          200: "#c5dcf2",
          300: "#92c0e7",
          400: "#58a0d8",
          500: "#3385c4",
          600: "#2369a6",
          700: "#1e5486",
          800: "#1c4970",
          900: "#1A3855",//스틸블루
          950: "#13283e",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

