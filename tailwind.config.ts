import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5181B8', // Синий цвет в стиле ВКонтакте
        secondary: '#FFFFFF', // Белый цвет
      },
    },
  },
  plugins: [],
} satisfies Config;
