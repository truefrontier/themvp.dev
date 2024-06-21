/** @type {import('tailwindcss').Config} */

function setAsCssVariable(colorName) {
  let augmentedPalette = {};
  const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
  values.forEach((value) => {
    augmentedPalette[value] = `rgb(var(--${colorName}-${value}) / <alpha-value>)`;
  });
  return augmentedPalette;
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: 'rgb(var(--black) / <alpha-value>)',
      white: 'rgb(var(--white) / <alpha-value>)',
      light: 'rgb(var(--color-light) / <alpha-value>)',
      dark: 'rgb(var(--color-dark) / <alpha-value>)',
      grayscale: setAsCssVariable('grayscale'),
      slate: setAsCssVariable('slate'),
      neutral: setAsCssVariable('color-neutral'),
      teal: setAsCssVariable('teal'),
      primary: setAsCssVariable('color-primary'),
      blue: setAsCssVariable('blue'),
      secondary: setAsCssVariable('color-secondary'),
      purple: setAsCssVariable('purple'),
      accent: setAsCssVariable('color-accent'),
      green: setAsCssVariable('green'),
      success: setAsCssVariable('color-success'),
      red: setAsCssVariable('red'),
      danger: setAsCssVariable('color-danger'),
    },


    fontSize: {
      'xs': ['0.75rem', 'var(--golden-ratio-half-7)'],
      'sm': ['0.875rem', 'var(--golden-ratio-half-7)'],
      'base': ['1rem', 'var(--golden-ratio-half-7)'],
      'lg': ['1.125rem', 'var(--golden-ratio-6)'],
      'xl': ['1.25rem', 'var(--golden-ratio-double-5)'],
      '2xl': ['1.5rem', 'var(--golden-ratio-half-8)'],
      '3xl': ['1.875rem', 'var(--golden-ratio-7)'],
      '4xl': ['2.25rem', 'var(--golden-ratio-7)'],
      '5xl': ['2.75rem', 'var(--golden-ratio-half-9)'],
      '6xl': ['3.75rem', 'var(--golden-ratio-8)'],
      '7xl': ['4.5rem', 'var(--golden-ratio-double-7)'],
      '8xl': ['6rem', 'var(--golden-ratio-9)'],
      '9xl': ['8rem', 'var(--golden-ratio-double-8)'],
    },

    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '48': 'repeat(48, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr))',
        '96': 'repeat(96, minmax(0, 1fr))',
      },

      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-golden-ratio'),
    require('tailwindcss-breakpoint-helper'),
  ],
}

