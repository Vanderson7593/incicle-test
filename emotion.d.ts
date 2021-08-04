import '@emotion/react'

interface IObjectProps {
  light: string
  main: string
  dark: string
  primary: string
  secondary: string
  foreground: string
  background: string
  white: string
  back: string
}

interface IColor extends Pick<IObjectProps, 'light' | 'main' | 'dark'> {}

interface IText extends Pick<IObjectProps, 'primary' | 'secondary'> {}

interface IGround extends Pick<IObjectProps, 'foreground' | 'background'> {}

interface ICommon extends Pick<IObjectProps, 'black' | 'white'> {}

declare module '@emotion/react' {
  export interface Theme {
    radius: {
      small: string
      normal: string
      strong: string
    }
    color: {
      orange: IColor
      blue: IColor
      green: IColor
      grey: IColor
      text: IText
      ground: IGround
      common: ICommon
    }
    screen: {
      xs: string
      sm: string
      md: string
      lg: string
    }
  }
}
