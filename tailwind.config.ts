module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1536px",
        desktop: "1720px",
        ultra: "2560px",
      },
      colors: {
        primary: "#191919",
        light: "#999999",
      },
      fontFamily: {
        primary: ["Inter Tight", "sans-serif"],
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
