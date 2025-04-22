/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand colors
        black: "#000000",
        white: "#FFFFFF",
        gold: {
          50: "#FFFAEB",
          100: "#FFF1C2",
          200: "#FFE999",
          300: "#FFD166",
          400: "#FFB800",
          500: "#E6A700",
          600: "#CC9600",
          700: "#996F00",
          800: "#664A00",
          900: "#332500",
        },
        beige: {
          50: "#FDFBF7",
          100: "#FAF7EF",
          200: "#F5EFE0",
          300: "#F0E6D1",
          400: "#EADDB3",
          500: "#E4D495",
          600: "#D6BC67",
          700: "#C9A43A",
          800: "#A17F29",
          900: "#78601F",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 