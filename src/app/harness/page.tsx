import { HomeClient } from "../_home/HomeClient";
import { themes } from "@/themes/index";
import { getTheme } from "../_getTheme";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const allThemes = await getTheme();
  if (allThemes) {
    return {
      title: allThemes["harnessBank"].bankName,
    };
  } else {
    return {};
  }
}

export default async function Home() {
  await getTheme();

  return (
    <HomeClient
      theme={themes["harnessBank"] || themes.base}
      currentThemeName="harnessBank"
    />
  );
}
