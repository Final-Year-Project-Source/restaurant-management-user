import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        screen: 'var(--100vh)',
      },
      maxHeight: {
        'screen-85': 'calc(var(--100vh) - 85px)',
      },
      boxShadow: {
        'medium-top': '0px -2px 4px 0px rgba(0, 0, 0, 0.05)',
        'medium-bottom': '0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'open-sans': 'var(--font-open-sans)',
      },
      colors: {
        yellow: {
          50: '#F1EEE8',
          500: '#EDE92A',
        },
        black: {
          100: 'rgba(19, 28, 22, 0.20)',
          200: 'rgba(19, 28, 22, 0.40)',
          300: 'rgba(19, 28, 22, 0.60)',
          400: '#08080A',
          500: '#131C16',
        },
        grey: {
          100: '#ededed',
        },
        red: {
          50: '#A82825',
          100: '#FA4A0C',
        },
      },
    },
  },
  plugins: [],
};
export default config;
