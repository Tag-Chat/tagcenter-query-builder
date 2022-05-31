import { SelectProps } from "./../../../Validation/Protocols/TypeQueryBuilderDataProps/index";
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
  subItemOption: ValueProps[];
  setSubItemOption: React.Dispatch<React.SetStateAction<ValueProps[]>>;
  operatorOption: ValueProps[];
  setOperatorOption: React.Dispatch<React.SetStateAction<ValueProps[]>>;
  responseOption: ResponsesProps;
  setResponseOption: React.Dispatch<React.SetStateAction<ResponsesProps>>;
  moreActionOption: ValueProps[];
  setMoreActionOption: React.Dispatch<React.SetStateAction<ValueProps[]>>;
  operatorActive: boolean;
  setOperatorActive: React.Dispatch<React.SetStateAction<boolean>>;
  multiDateActive: boolean;
  setMulitDateActive: React.Dispatch<React.SetStateAction<boolean>>;
  dateActive: boolean;
  setDateActive: React.Dispatch<React.SetStateAction<boolean>>;
  setConditions: React.Dispatch<React.SetStateAction<GroupProps[]>>;
  conditions: GroupProps[];
  conditionsOptions: SelectProps[];
  allCondition: string;
  setAllCondition: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
