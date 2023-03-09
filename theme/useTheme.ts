import { themeStore } from './themeStore';
export const useTheme = () => {
  return themeStore.use.theme();
};
