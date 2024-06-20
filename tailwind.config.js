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

    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '48': 'repeat(48, minmax(0, 1fr))',
        '64': 'repeat(64, minmax(0, 1fr))',
        '96': 'repeat(96, minmax(0, 1fr))',
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-golden-ratio'),
    require('tailwindcss-breakpoint-helper'),
  ],
}

