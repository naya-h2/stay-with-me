import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      36: '2.25rem',
    },
    colors: {
      background: {
        DEFAULT: 'var(--background)',
        secondary: 'var(--background-secondary)',
      },
      main: {
        mint: 'var(--main-mint)',
        gray: 'var(--main-gray)',
        red: 'var(--main-red)',
        white: '#FFFFFF',
      },
      logo: {
        green: 'var(--logo-green)',
      },
      Labels: {
        Secondary: 'var(--Labels-Secondary)',
      },
      Line: {
        Normal: {
          Normal: 'var(--Line-Normal-Normal)',
        },
      },
    },
    extend: {
      boxShadow: {
        bottomnav: '0px -1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
