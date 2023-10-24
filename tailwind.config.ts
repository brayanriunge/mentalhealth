import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },

      colors: {
        "gray-20": "#333333", //text color
        "primary-gray": "#A9A9A9",// page background
        "primary-gray-200": "#00A2FT",//navbar bg
        "primary-gray-500": "#FFC0CB",//button color
        "secondary-gray-200": "#4CAF50",//highlighting elements
        "secondary-gray-300": "#379834",
        "secondary-gray-700": "#A38A00",
      },
    },
  },
  plugins: [],
}
export default config
