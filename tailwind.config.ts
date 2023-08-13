//@ts-check
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        howItWorksBackground: "var(--how-it-works-background)",
        black: "var(--color-black)",
        acc: "var(--color-acc)",
      },
      backgroundColor: ({ colors }) => ({
        ...colors,
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    /*  require("tailwindcss-themer")({
      defaultTheme: {
        extend: {
          colors: {
            primary: "#F3A2C1",
            secondary: "green",
            howItWorksBackground: "#F4F4F4",
            black: "#000",
            acc: "#8DA035",
          },
        },
      },
      themes: [
        {
          name: "theme-1",
          extend: {
            colors: {
              primary: "blue",
              secondary: "green",
              howItWorksBackground: "#F4F4F4",
              black: "#000",
              acc: "#8DA035",
            },
          },
        },
        {
          name: "theme-2",
          extend: {
            primary: "blue",
            secondary: "green",
            howItWorksBackground: "#F4F4F4",
            black: "#000",
            acc: "#8DA035",
          },
        },
      ],
    }), */
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
