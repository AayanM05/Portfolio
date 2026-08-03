/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light (default)
        paper: "#FFFFFF",
        "paper-hero": "#F7F7F2",
        ink: "#000000",
        "ink-soft": "#222222",
        line: "#CCCCCC",
        // Dark
        void: "#07070A",
        "void-ink": "#F3F3EE",
        "void-soft": "#918F86",
        "void-line": "#212127",
        // Single signature accent — used everywhere (buttons, tags, brackets, links)
        accent: "#003D99",
        "accent-dark": "#003D99",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(4.2rem, 11vw, 9.7rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3.2rem, 7vw, 6.2rem)", { lineHeight: "0.95", letterSpacing: "0.035em" }],
        "display-md": ["clamp(2.5rem, 4.5vw, 3.7rem)", { lineHeight: "1.02", letterSpacing: "0.035em" }],
      },
      maxWidth: {
        container: "1280px",
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
        "hero-top": "6.5rem",
        "hero-top-lg": "8rem",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scanline: "scanline 2.4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
        blink: "blink 1.1s step-start infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
      },
    },
  },
  plugins: [],
}
