import { HomeClient } from "../_home/HomeClient";
import { themes } from "@/themes/index";
import { getTheme } from "../_getTheme";

export default async function Home() {
  await getTheme();

  return (
    <HomeClient
      theme={themes["harnessBank"] || themes.base}
      currentThemeName="harnessBank"
    />
  );
}
