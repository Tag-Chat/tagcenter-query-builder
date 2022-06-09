import React, { useState, useEffect } from "react";
import { queryBuilderData } from "../../../Data";
import * as Themes from "../../Styles/Themes";
import { ThemeProvider as StyledProvider } from "styled-components";
import { setCookie, parseCookies } from "nookies";
import {
  GroupProps,
  ResponsesProps,
  SelectProps,
  ValueProps,
  RuleGroupsProps,
  GroupProp,
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
  const [conditions, setConditions] = useState<GroupProps[]>([]);
  const [countRules, setCountRules] = useState<number>(0);
  const [countGroups, setCountGroups] = useState<number>(0);

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

  useEffect(() => {
    const { "@TagChat.Theme": cookieTheme } = parseCookies();

    if (!!cookieTheme) {
      setTheme(cookieTheme === "dark" ? Themes.Dark : Themes.Light);
    }
  }, []);

  //QueryBuilder
  const [data, setData] = useState(queryBuilderData.items);
  const [allCondition, setAllCondition] = useState<string>("");
  const [inputFields, setInputFields] = useState<RuleGroupsProps[]>([]);
  const [query, setQuery] = useState("");

  const [groupRules, setGroupRules] = useState<[][]>([]);

  const [itemOption, setItemOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [conditionsOptions, setConditionsOptions] = useState<SelectProps[]>([
    {
      value: "e",
      label: "E",
    },
    {
      value: "ou",
      label: "OU",
    },
  ]);

  const [rules, setRules] = useState<RuleGroupsProps[]>([
    {
      rule: countRules,
      condition: "",
      operator: "",
      operatorValues: [],
      operatorItem: "",
      operatorItemValues: [],
      operatorDate: "",
      operatorMultidate: "",
      combiner: "",
      response: [],
      responseUser: "",
      groupId: groupRules.length,
    },
  ]);

  useEffect(() => {
    const listSelect: ValueProps[] = [];
    data.map(
      (item: any) =>
        item.name &&
        listSelect.push({
          value: item.name,
          label: item.name,
        })
    );
    setItemOption(listSelect);
  }, []);

  return (
    <CoreContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        itemOption,
        setItemOption,
        conditions,
        setConditions,
        conditionsOptions,
        allCondition,
        setAllCondition,
        query,
        setQuery,
        inputFields,
        setInputFields,
        groupRules,
        setGroupRules,
        countRules,
        setCountRules,
        countGroups,
        setCountGroups,
        data,
        rules,
        setRules,
      }}
      {...props}
    >
      <StyledProvider theme={theme}>{props.children}</StyledProvider>
    </CoreContext.Provider>
  );
};

const useCore = () => React.useContext(CoreContext);

export { CoreProvider, useCore };
