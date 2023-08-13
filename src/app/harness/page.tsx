import { HomeClient } from "../_home/HomeClient";
import { setupSvgUrl } from "../_svgutils/setupSvgUrl";
import { Theme, extend } from "@/themes/util";
import { themes, saveTheme } from "@/themes/index";

async function getTheme() {
  const res = await fetch(
    "https://muoh13m7lj.execute-api.us-east-1.amazonaws.com/default/fimvp-whitelabel"
  );

  if (res.ok) {
    const data: Record<string, Theme> = await res.json();
    return data;
  }
}

export default async function Home() {
  const theme = await getTheme();
  const whiteLabelTheme = theme?.["harnessBank"];
  const whiteLabelSvg = setupSvgUrl(whiteLabelTheme?.logo || "");
  if (whiteLabelTheme) {
    whiteLabelTheme.logo = whiteLabelSvg;
    saveTheme({
      themeName: "harnessBank",
      theme: extend({
        extending: themes.base,
        newTheme: {
          primaryColor: `#${whiteLabelTheme.primaryColor}`,
          secondaryColor: `#${whiteLabelTheme.secondaryColor}`,
          logo: `${whiteLabelTheme.logo}`,
          bankName: whiteLabelTheme.bankName,
        },
      }),
    });
  }
  return (
    <HomeClient
      theme={whiteLabelTheme || themes.base}
      currentThemeName="harnessBank"
    />
  );
}
