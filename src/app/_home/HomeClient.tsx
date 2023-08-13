"use client";
import { PageHero } from "../_hero/Hero";
import { HowItWorks } from "../_howitworks/HowItWorks";
import { FloatingCta } from "../_floatingCta/FloatingCta";
import { useEffect } from "react";
import { Theme, applyTheme } from "@/themes/util";

type HomeClientProps = {
  theme: Theme;
  currentThemeName: string;
};
export const HomeClient = ({ theme, currentThemeName }: HomeClientProps) => {
  useEffect(() => {
    applyTheme(theme);
  });
  return (
    <>
      <main className="min-h-screen md:px-4 px-0 md:pb-3 pb-24 ">
        <div className="flex flex-col container mx-auto">
          <div className="w-full">
            <PageHero />
          </div>
          <div className="w-full">
            <HowItWorks />
          </div>
        </div>
        <FloatingCta label="Get Started" onClick={() => null} />
      </main>
    </>
  );
};
