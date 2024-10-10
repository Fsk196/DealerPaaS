/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      maskImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        scrollLeft: {
          "0%": { left: "max(calc(200px * 8), 100%)" }, // Initial position
          "100%": { left: "-200px" }, // Ending position
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scrollLeft: "scrollLeft 3s linear infinite",
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".mask-image-custom": {
          "mask-image":
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0))",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".item": {
          width: "100px",
          height: "96px",
          "border-radius": "10px",
          position: "absolute",
        },
        ".delay-item-1": {
          animationDelay: "calc(30s / 8 * (8 - 1) * -1)",
          left: "calc(200px * 0)", // First image
        },
        ".delay-item-2": {
          animationDelay: "calc(30s / 8 * (8 - 2) * -1)",
          left: "calc(200px * 1)", // Second image
        },
        ".delay-item-3": {
          animationDelay: "calc(30s / 8 * (8 - 3) * -1)",
          left: "calc(200px * 2)", // Third image
        },
        ".delay-item-4": {
          animationDelay: "calc(30s / 8 * (8 - 4) * -1)",
          left: "calc(200px * 3)", // Fourth image
        },
        ".delay-item-5": {
          animationDelay: "calc(30s / 8 * (8 - 5) * -1)",
          left: "calc(200px * 4)", // Fifth image
        },
        ".delay-item-6": {
          animationDelay: "calc(30s / 8 * (8 - 6) * -1)",
          left: "calc(200px * 5)", // Sixth image
        },
        ".delay-item-7": {
          animationDelay: "calc(30s / 8 * (8 - 7) * -1)",
          left: "calc(200px * 6)", // Seventh image
        },
        ".delay-item-8": {
          animationDelay: "calc(30s / 8 * (8 - 8) * -1)",
          left: "calc(200px * 7)", // Eighth image
        },
      });
    },
  ],
};
