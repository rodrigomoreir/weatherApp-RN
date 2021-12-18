import 'styled-components';
import { darkTheme, defaultTheme } from './theme';

declare module 'styled-components' {
  type DarkThemeType = typeof darkTheme;
  type DefaultThemeType = typeof defaultTheme;

  export interface DefaultTheme extends DarkThemeType { }
}
