import { themes, saveTheme } from "@/themes/index";
import { Theme, extend } from "@/themes/util";
import { setupSvgUrl } from "./_svgutils/setupSvgUrl";

export const getTheme = async () => {
  const res = await fetch(
    "https://muoh13m7lj.execute-api.us-east-1.amazonaws.com/default/fimvp-whitelabel"
  );

  if (res.ok) {
    const data: Record<string, Theme> = await res.json();
    Object.entries(data).forEach(([key, theme]) => {
      data[key] = extend({
        extending: themes.base,
        newTheme: {
          ...theme,
          primaryColor: `#${theme.primaryColor}`,
          secondaryColor: `#${theme.secondaryColor}`,
          logo: setupSvgUrl(theme.logo),
        },
      });
      saveTheme({
        themeName: key,
        theme: data[key],
      });
    });
    return themes;
  }
};
