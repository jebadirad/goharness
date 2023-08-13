import { HomeClient } from "./_home/HomeClient";
import { getTheme } from "./_getTheme";
import { themes } from "@/themes";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const allThemes = await getTheme();
  if (allThemes) {
    return {
      title: allThemes["ecu"].bankName,
    };
  } else {
    return {};
  }
}

export default async function Home() {
  await getTheme();

  return (
    <>
      <HomeClient theme={themes["ecu"] || themes.base} currentThemeName="ecu" />
    </>
  );
}
