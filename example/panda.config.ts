import { defineConfig } from "@pandacss/dev";

import { RACPreset } from "../plugin/dist";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ["@pandacss/preset-panda", RACPreset()],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    extend: {
      searchCancelButtons: "&::-webkit-search-cancel-button",
    },
  },

  theme: {
    extend: {
      keyframes: {
        enter: {
          "0%": {
            opacity: "0",
            transform: "scale(105%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(100%)",
          },
        },
        exit: {
          "0%": {
            opacity: "1",
            transform: "scale(100%)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(95%)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
        },
        fadeOut: {
          to: {
            opacity: "0",
          },
        },
        zoomIn105: {
          from: {
            transform: "scale(1.05)",
          },
        },
        zoomOut95: {
          to: {
            transform: "scale(0.95)",
          },
        },
        slideInFromTop: {
          from: {
            transform: "translateY(-1%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideInFromBottom: {
          from: {
            transform: "translateY(1%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        slideInFromLeft: {
          from: {
            transform: "translateX(-1%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideInFromRight: {
          from: {
            transform: "translateX(1%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        slideOutToTop: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-1%)",
          },
        },
        slideOutToBottom: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(1%)",
          },
        },
        slideOutToLeft: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-1%)",
          },
        },
        slideOutToRight: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(1%)",
          },
        },
        slideOutToTopFull: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-100%)",
          },
        },
        slideOutToBottomFull: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(100%)",
          },
        },
        slideOutToLeftFull: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        slideOutToRightFull: {
          from: {
            transform: "translateX(-16rem - 100%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
      },
      tokens: {
        shadows: {
          buttonInset: {
            value: "inset 0 1px 0 0 rgba(255,255,255,0.1)",
            description: "Button top inset shadow",
          },
          none: {
            value: "none",
            description: "No shadow",
          },
        },
        animations: {
          animateIn: {
            value: "enter 200ms ease-out",
            description: "Animate in",
          },
          animateOut: {
            value: "exit 150ms ease-in",
            description: "Animate out",
          },
          fadeIn: {
            value: "fadeIn 200ms ease-out",
            description: "Fade in",
          },
          fadeOut: {
            value: "fadeOut 150ms ease-in",
            description: "Fade out",
          },
          zoomIn105: {
            value: "zoomIn105 200ms ease-out",
            description: "Zoom in 105%",
          },
          zoomOut95: {
            value: "zoomOut95 150ms ease-in",
            description: "Zoom out 95%",
          },
          slideInFromTop: {
            value: "slideInFromTop 200ms ease-out",
            description: "Slide in from top",
          },
          slideInFromBottom: {
            value: "slideInFromBottom 200ms ease-out",
            description: "Slide in from bottom",
          },
          slideInFromLeft: {
            value: "slideInFromLeft 200ms ease-out",
            description: "Slide in from left",
          },
          slideInFromRight: {
            value: "slideInFromRight 200ms ease-out",
            description: "Slide in from right",
          },
          slideOutToTop: {
            value: "slideOutToTop 150ms ease-in",
            description: "Slide out to top",
          },
          slideOutToBottom: {
            value: "slideOutToBottom 150ms ease-in",
            description: "Slide out to bottom",
          },
          slideOutToLeft: {
            value: "slideOutToLeft 150ms ease-in",
            description: "Slide out to left",
          },
          slideOutToRight: {
            value: "slideOutToRight 150ms ease-in",
            description: "Slide out to right",
          },
          slideOutToTopFull: {
            value: "slideOutToTopFull 150ms ease-in",
            description: "Slide out to top full",
          },
          slideOutToBottomFull: {
            value: "slideOutToBottomFull 150ms ease-in",
            description: "Slide out to bottom full",
          },
          slideOutToLeftFull: {
            value: "slideOutToLeftFull 150ms ease-in",
            description: "Slide out to left full",
          },
          slideOutToRightFull: {
            value: "slideOutToRightFull 150ms ease-in",
            description: "Slide out to right full",
          },
        },
        colors: {
          currentColor: {
            value: "currentColor",
            description: "Current color",
          },
        },
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
  strictTokens: true,
  strictPropertyValues: true,

  globalCss: {
    extend: {
      "*": {
        borderColor: "#e5e7eb",
      },
      html: {
        scrollBehavior: "smooth",
        overflowX: "hidden",
      },
      "html.dark": {
        colorScheme: "dark",
      },
      body: {
        bg: {
          base: "zinc.50",
          _dark: "zinc.900",
        },
        color: {
          base: "zinc.800",
          _dark: "zinc.100",
        },
      },
    },
  },

  staticCss: {
    recipes: "*",
  },

  validation: "error",
});
