import {
  createGlobalStyle,
  GlobalStyleComponent,
  ThemeProps
} from 'styled-components'
import reset from 'styled-reset'
import { Theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${({ theme }) => theme.font.family.base};
    font-size: ${({ theme }) => theme.font.size.normal}
  }
` as GlobalStyleComponent<ThemeProps<Theme>, Theme>
