import React, { useState, useEffect } from "react";
import * as Themes from "../../Styles/Themes";
import { ThemeProvider as StyledProvider } from "styled-components";
import { setCookie, parseCookies } from "nookies";

const CoreContext = React.createContext({
  theme: Themes.Dark,
  isDark: true,
  toggleTheme: () => {},
});

export type ReactProps = {
  children?: React.ReactElement[];
};

const CoreProvider: React.FC<ReactProps> = (props) => {
  const [theme, setTheme] = useState<any>(Themes.Dark);

  const toggleTheme = () => {
    setTheme(theme === Themes.Dark ? Themes.Light : Themes.Dark);

    let myDomain = process.env.NEXT_PUBLIC_DOMAIN;
    setCookie(
      null,
      "@TagChat.Theme",
      theme === Themes.Dark ? "light" : "dark",
      {
        path: "/",
        domain: myDomain,
        maxAge: 60 * 60 * 24 * 365,
      }
    );
  };

  useEffect(() => {
    const { "@TagChat.Theme": cookieTheme } = parseCookies();

    if (!!cookieTheme) {
      setTheme(cookieTheme === "dark" ? Themes.Dark : Themes.Light);
    }
  }, []);

  return (
    <CoreContext.Provider
      value={{
        theme: theme,
        isDark: theme === Themes.Dark,
        toggleTheme,
      }}
      {...props}
    >
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </CoreContext.Provider>
  );
};

const useCore = () => React.useContext(CoreContext);

export { CoreProvider, useCore };
