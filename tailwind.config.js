module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    whitelist: ["markdown"],
  },
  theme: {
    extend: {
      margin: {
        "-72": "-18rem",
        "-80": "-20rem",
        "-84": "-21rem",
        "-88": "-22rem",
        "-96": "-24rem",
        "-120": "-30rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      backgroundColor: {
        accent: "var(--color-bg-accent)",
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        tertiary: "var(--color-bg-tertiary)",
        hover: {
          accent: "var(--color-bg-accent-hover)",
        },
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        tertiary: "var(--color-text-tertiary)",
        footerPrimary: "var(--color-text-footer-primary)",
        footerSecondary: "var(--color-text-footer-secondary)",
        on: {
          accent: "var(--color-text-on-accent)",
        },
        fill: {
          primary: "var(--color-fill-primary)",
          secondary: "var(--color-fill-secondary)",
          tertiary: "var(--color-fill-tertiary)",
        },
      },
      divideColor: {
        subtle: "var(--color-bg-tertiary)",
      },
      letterSpacing: {
        widestest: "0.2em",
      },
      opacity: {
        90: ".9",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
