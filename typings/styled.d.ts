import 'styled-components';

export type ColorType = {
  BACKGROUND: string;
  PRIMARY: string;
  TEXT: string;
  BLACK: string;
  WHITE: string;
};

interface ThemeType extends DefaultTheme {
  colors: ColorType;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
