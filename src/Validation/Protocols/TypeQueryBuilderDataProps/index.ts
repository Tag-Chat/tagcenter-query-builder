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
  label: string;
  input: string | string[];
  value: { input: string; values: string[] | string } | null;
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
  customInput: MoreActionProps[] | null;
  customItems: CustomItemsProps[];
  response: null | ResponsesProps;
  typeCustomItems: string;
}

export interface TypeQueryBuilderDataProps {
  items?: QueryBuilderDataProps[];
}
