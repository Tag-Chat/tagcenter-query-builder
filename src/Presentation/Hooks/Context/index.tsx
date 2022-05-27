import React, { useState, useEffect } from "react";
import * as Themes from "../../Styles/Themes";
import { ThemeProvider as StyledProvider } from "styled-components";
import { setCookie, parseCookies } from "nookies";
import {
  ResponsesProps,
  ValueProps,
} from "../../../Validation/Protocols/TypeQueryBuilderDataProps";
import { CoreContextProps } from "./type";

const CoreContext = React.createContext({} as CoreContextProps);

export type ReactProps = {
  children?: React.ReactElement[];
};

const CoreProvider: React.FC<ReactProps> = (props) => {
  //theme
  const [theme, setTheme] = useState<any>(Themes.Dark);
  const [isDark, setIsDark] = useState<any>(theme === Themes.Dark);

  //Theme
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

  //QueryBuilder
  const [itemOption, setItemOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [subItemOption, setSubItemOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [operatorOption, setOperatorOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [responseOption, setResponseOption] = useState<ResponsesProps>({
    type: "",
    label: "",
  });

  const [moreActionOption, setMoreActionOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [operatorActive, setOperatorActive] = useState<boolean>(false);
  const [multiDateActive, setMulitDateActive] = useState<boolean>(false);
  const [dateActive, setDateActive] = useState<boolean>(false);

  useEffect(() => {
    const { "@TagChat.Theme": cookieTheme } = parseCookies();

    if (!!cookieTheme) {
      setTheme(cookieTheme === "dark" ? Themes.Dark : Themes.Light);
    }
  }, []);

  //QueryBuilder

  return (
    <CoreContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        itemOption,
        setItemOption,
        subItemOption,
        setSubItemOption,
        operatorOption,
        setOperatorOption,
        responseOption,
        setResponseOption,
        moreActionOption,
        setMoreActionOption,
        operatorActive,
        setOperatorActive,
        multiDateActive,
        setMulitDateActive,
        dateActive,
        setDateActive,
      }}
      {...props}
    >
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </CoreContext.Provider>
  );
};

const useCore = () => React.useContext(CoreContext);

export { CoreProvider, useCore };
