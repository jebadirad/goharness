import { HomeClient } from "./_home/HomeClient";
import { getTheme } from "./_getTheme";
import { themes } from "@/themes";

export default async function Home() {
  await getTheme();

  return (
    <HomeClient theme={themes["ecu"] || themes.base} currentThemeName="ecu" />
  );
}
