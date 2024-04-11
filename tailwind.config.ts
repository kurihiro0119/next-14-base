// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/_components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // プライマリーカラー
        'primary-dark': '#2779bd', // プライマリーカラーの暗いバージョン
        secondary: '#ffed4a', // セカンダリーカラー
        'secondary-dark': '#facc15', // セカンダリーカラーの暗いバージョン
        alert: '#e3342f', // アラートカラー
        'alert-dark': '#cc1f1a', // アラートカラーの暗いバージョン
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
