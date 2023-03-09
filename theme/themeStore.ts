import { createStore } from '@udecode/zustood';
import { defaultTheme } from './themes';

export const themeStore = createStore('theme')({ theme: defaultTheme });
