import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        white: '#F6FAFF',
        'blue/01': '#101D30',
        'blue/02': '#162F52',
        'blue/03': '#193B59',
        'blue/04': '#304A6F',
        'blue/05': '#016C8C',
        'blue/06': '#65A5C0',
        'blue/07': '#A1CFEA',
        'blue/08': '#B0CAD9',
        'blue/09': '#D7EBF7',
        'gray/01': '#76879F',
        'gray/02': '#AEC3CF',
        'gray/03': '#D6DDE4',
        'gray/04': '#F0F7FE',
        'red/01': '#CB312F',
        'red/02': '#6F2726',
        'red/03': '#FEF3F0',
        'green/01': '#0E930B',
        'green/02': '#184E16',
        yellow: '#E2CE19',
        orange: '#EB9617',
        otherBlue: '#29A7F5'
      }
    }
  },
  plugins: []
};
export default config;
