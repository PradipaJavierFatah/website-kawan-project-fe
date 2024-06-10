/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      colors: {
        "pink-custom": "#F9C5D5",
        "question-colour": "#FFEAF1",
        "progress-colour": "#F2789F",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
