import { Theme } from '@emotion/react'

const theme = {
  radius: {
    small: '0.25rem',
    normal: '0.5rem',
    strong: '1rem',
  },
  color: {
    orange: {
      main: '#ff7f00',
      dark: '',
      light: '',
    },
    blue: {
      light: '#00c3f8',
      main: '#3c8693',
      dark: '#05415d',
    },
    green: {
      main: '#8bcd01',
      dark: '',
      light: '',
    },
    grey: {
      light: '#f2f3f5',
      main: '#96a2a1',
      dark: '#eaebed',
    },
    text: {
      primary: '#3c4140',
      secondary: '#2596be',
    },
    ground: {
      foreground: '#1a1a2e',
      background: '#f2f3f3',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
  },
  screen: {
    xs: '576px',
    sm: '766px',
    md: '992px',
    lg: '1200px',
  },
} as Theme

export type DefaultTheme = typeof theme

export default theme
