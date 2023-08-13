export type RemoteTheme = {
  bankName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
};

export type Theme = {
  [key: string]: string;
} & RemoteTheme;

export type Themes = {
  [key: string]: Theme;
};

export type MappedTheme = {
  [key: string]: string | null;
};

export const mapTheme = (theme: Theme): MappedTheme => {
  return {
    "--color-primary": theme.primaryColor || "",
    "--color-secondary": theme.secondaryColor || "",
    "--how-it-works-background": theme.howItWorksBackground || "",
    "--color-black": theme.black || "",
    "--logo-uri": theme.logo || "",
    "--bank-name": theme.bankNanme || "",
  };
};

export const applyTheme = (theme: Theme, themeName: string): void => {
  const themeObj: MappedTheme = mapTheme(theme);
  if (!themeObj) {
    return;
  }
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    Object.keys(themeObj).forEach((prop) => {
      if (prop === "name") {
        return;
      }
      root.style.setProperty(prop, themeObj[prop]);
    });
    localStorage.setItem("recentTheme", themeName);
  }
};

export const extend = ({
  extending,
  newTheme,
}: {
  extending: Theme;
  newTheme: Theme;
}): Theme => {
  return {
    ...extending,
    ...newTheme,
  };
};
