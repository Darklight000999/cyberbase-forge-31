import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          black: "hsl(var(--cyber-black))",
          gray: "hsl(var(--cyber-gray))",
          green: "hsl(var(--cyber-green))",
          red: "hsl(var(--cyber-red))",
          terminal: "hsl(var(--cyber-terminal))",
        },
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'cyber': ['Orbitron', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-matrix': 'var(--gradient-matrix)',
        'gradient-green': 'var(--gradient-green)',
        'gradient-danger': 'var(--gradient-danger)',
      },
      boxShadow: {
        'glow-green': 'var(--glow-green)',
        'glow-red': 'var(--glow-red)',
        'cyber': 'var(--shadow-cyber)',
      },
      animation: {
        'glitch': 'glitch var(--glitch-duration) infinite linear alternate-reverse',
        'terminal-cursor': 'cursor 1s infinite',
        'matrix-rain': 'matrix-fall 3s infinite linear',
        'cyber-pulse': 'cyber-pulse 2s infinite',
        'hologram-shimmer': 'hologram 2s infinite linear',
        'data-stream': 'data-stream 4s infinite linear',
        'neon-flicker': 'neon-flicker 0.1s infinite',
        'scan-line': 'scan-line 2s infinite linear',
        'float-3d': 'float-3d 6s ease-in-out infinite',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        cursor: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "matrix-fall": {
          "0%": { transform: "translateY(-100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        "cyber-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--cyber-green) / 0.3)",
            borderColor: "hsl(var(--cyber-green) / 0.5)"
          },
          "50%": { 
            boxShadow: "0 0 30px hsl(var(--cyber-green) / 0.8), 0 0 40px hsl(var(--cyber-green) / 0.4)",
            borderColor: "hsl(var(--cyber-green))"
          },
        },
        "hologram": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "data-stream": {
          "0%": { transform: "translateY(100vh)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh)", opacity: "0" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
          "51%": { opacity: "1" },
          "52%": { opacity: "0.9" },
          "53%": { opacity: "1" },
        },
        "scan-line": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100vw)" },
        },
        "float-3d": {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg)" },
          "50%": { transform: "translateY(-20px) rotateX(10deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
