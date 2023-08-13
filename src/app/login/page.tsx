import { LoginClient } from "./_login/LoginClient";
import { themes } from "@/themes/index";
import { getTheme } from "../_getTheme";

export const preload = () => {
  void getTheme();
};

export default async function Login() {
  const allThemes = await getTheme();
  return <LoginClient themes={allThemes || themes} />;
}
