import {
  ValueProps,
  ResponsesProps,
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
  setOperatorOption: React.Dispatch<React.SetStateAction<any>>;
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
}
