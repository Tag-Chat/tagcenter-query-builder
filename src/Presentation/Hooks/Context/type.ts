import {
  GroupProp,
  RuleGroupsProps,
  SelectProps,
} from "./../../../Validation/Protocols/TypeQueryBuilderDataProps/index";
import {
  ValueProps,
  ResponsesProps,
  GroupProps,
} from "../../../Validation/Protocols/TypeQueryBuilderDataProps";

export interface CoreContextProps {
  theme: any;
  isDark: boolean;
  toggleTheme: Function;
  itemOption: ValueProps[];
  setItemOption: React.Dispatch<React.SetStateAction<ValueProps[]>>;
  setConditions: React.Dispatch<React.SetStateAction<GroupProps[]>>;
  conditions: GroupProps[];
  conditionsOptions: SelectProps[];
  allCondition: string;
  setAllCondition: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  inputFields: RuleGroupsProps[];
  setInputFields: React.Dispatch<React.SetStateAction<RuleGroupsProps[]>>;
  groupRules: [][];
  setGroupRules: React.Dispatch<React.SetStateAction<[][]>>;
  countRules: number;
  setCountRules: React.Dispatch<React.SetStateAction<number>>;
  countGroups: number;
  setCountGroups: React.Dispatch<React.SetStateAction<number>>;
  data: any;
  rules: RuleGroupsProps[];
  setRules: React.Dispatch<React.SetStateAction<RuleGroupsProps[]>>;
}
