"use client";

import { Theme } from "@/themes/util";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { applyTheme } from "@/themes/util";

type LoginClientProps = {
  themes: Record<string, Theme>;
};

export const LoginClient = ({ themes }: LoginClientProps) => {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const themeName = localStorage.getItem("recentTheme");

    if (themeName) {
      const recentTheme = themes[themeName];
      if (recentTheme) {
        applyTheme(recentTheme, themeName);
      }

      return;
    }
    console.log(themes);
    applyTheme(themes["base"], "base");
    return;
  }, [themes]);

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("");
    }, 5000);
  });
  return (
    <main className="min-h-screen md:px-4 px-4 md:pb-3 pb-24 ">
      <div className="flex flex-col container mx-auto gap-4">
        <div className="w-full prose pb-5">
          <h2 className="w-full mb-0">Login</h2>
          <aside className="w-full block italic text-left">
            Super &ldquo;secure&rdquo; login page.
          </aside>
        </div>
        <div className="w-full prose">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered border-primary focus:outline-secondary w-full max-w-xs"
              value={username}
              onChange={(e) => setUserName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="w-full prose">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Emojis only"
              className={`input input-bordered w-full max-w-xs border-primary focus:outline-secondary ${
                passwordError !== "" ? "input-error" : ""
              }`}
              value={password}
              onChange={(e) => {
                const val = e.currentTarget.value;
                const isNotValid = /\P{Extended_Pictographic}+/u.test(val);
                if (isNotValid) {
                  setPasswordError(
                    `Your password must contain ONLY emojis, you entered ${val}`
                  );
                } else {
                  setPasswordError("");
                }
                setPassword(val);
              }}
            />
            {passwordError && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {passwordError}
                </span>
              </label>
            )}
          </div>
        </div>
        <div className="w-full">
          <button
            className={`btn 
            btn-primary 
            bg-primary 
            outline-secondary 
            border-secondary 
            hover:bg-secondary 
            hover:text-primary 
            hover:outline-primary 
            hover:border-primary 
            ${
              passwordError === "" && username && password ? "" : "btn-disabled"
            }
            ${isSubmitting ? "btn-disabled" : ""}
            `}
            onClick={() => {
              setIsSubmitting(true);
            }}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner"></span>
            ) : (
              ""
            )}
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};
