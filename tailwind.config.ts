import type { Config } from 'tailwindcss'

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
      backgroundColor: {
        'light': "linear-gradient(180deg, #FCD7FF 0%, #FFF 100%)",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['responsive'] // This ensures your custom class is responsive
    },
  },
  plugins: [],
}
export default config
