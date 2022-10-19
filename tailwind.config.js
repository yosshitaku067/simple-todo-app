/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/frontend/pages/**/*.{js,ts,jsx,tsx}',
    './apps/frontend/components/**/*.{js,ts,jsx,tsx}',
    './apps/todo-app/src/app/pages/**/*.{js,ts,jsx,tsx}',
    './apps/todo-app/src/app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        315: '315deg',
      },
    },
  },
  plugins: [],
};
