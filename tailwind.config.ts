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
    },
    extend: {
      boxShadow: {
        bottomnav: '0px -1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        background: 'var(--background)',
        main: {
          mint: 'var(--main-mint)',
          gray: 'var(--main-gray)',
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
    },
  },
  plugins: [],
};
export default config;
