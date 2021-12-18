import 'styled-components';
import { darkTheme } from './theme';

declare module 'styled-components' {
  type DarkThemeType = typeof darkTheme;

  export interface DefaultTheme extends DarkThemeType { }
}
