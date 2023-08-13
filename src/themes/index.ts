import { baseTheme } from "./base";

import { Themes, Theme } from "./util";

export const DEFAULT_THEME: string = "base";

export const themes: Themes = {
  base: baseTheme,
};

export const saveTheme = ({
  themeName,
  theme,
}: {
  themeName: string;
  theme: Theme;
}) => {
  themes[themeName] = theme;
};
