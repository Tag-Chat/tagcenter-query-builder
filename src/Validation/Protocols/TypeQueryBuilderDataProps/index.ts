import { Control, FieldValues, UseFormRegister } from "react-hook-form";

export interface SelectProps {
  label: string;
  value: string;
}

export interface ConditionActive {
  name: string;
  label: string;
}

export interface SelectComponentProps {
  id: string;
  name: string;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  options: SelectProps[];
  value?: string;
}

export interface WrapperConditionProps {
  id: string;
  idComponent: number;
  register: UseFormRegister<FieldValues>;
  itemOption: SelectProps[];
  watchCondition: string;
  subItemOption: SelectProps[];
  watchOperator: string;
  operatorActive: boolean;
  responseActive: boolean;
  dateActive: boolean;
  actionActive: boolean;
  actionMoreOptions: boolean;
  multiDateActive: boolean;
  moreActionOption: SelectProps[];
  operatorOption: SelectProps[];
  responseOption: ResponsesProps;
  control: Control<FieldValues, any>;
  addGroup: () => void;
  addAction: () => void;
  deleteGroup: () => void;
}

export interface GroupProps {
  component: string;
  id: number;
}

export interface HeaderQueryBuilderProps {
  title: string;
}

export interface ResponsesProps {
  label: string;
  type: string;
}

export interface CustomItemsProps {
  label: string;
  value: string[];
}

export interface CustomProps {
  label: string;
  input: string[];
}

export interface ValueProps {
  value: string;
  label: string;
}

export interface OperatorProps {
  label: string;
  value: string[] | string;
}

export interface MoreActionProps {
  values: string[];
  type: string;
  subValues: string[];
}

export enum TypeItemOperatorProps {
  Select = "select",
  Data = "data",
}

export interface QueryBuilderDataProps {
  name: string;
  action: boolean;
  type: string;
  valueDefault: string[];
  operator: OperatorProps[];
  typeItemOperator: string;
  customInput: string[];
  customInputType: string;
  subValues?: string[];
  customItems: CustomItemsProps[];
  response: null | ResponsesProps;
  typeCustomItems: string;
}

export interface TypeQueryBuilderDataProps {
  items: QueryBuilderDataProps[];
}
