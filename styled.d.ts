import { Theme } from './theme/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
