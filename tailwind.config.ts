import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '280px',
      smd: '425px',
      mdl: '600px',
      md: '768px',
      mdg: '900px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      '2xl': '1550px',
      '3xl': '2560px',
    },
    colors: {
      mzBlack: '#0D0D0D',
      mzGold: '#BE8C04',
      mzLight: '#FFFFFF',
      mzTextLight: '#EEEEEE',
      mzProdLight: '#D9D9E0',
      mzTextBlack: '#232324',
      mzTextFooter: '#232324',
    },
  },
  plugins: [],
};
export default config;
