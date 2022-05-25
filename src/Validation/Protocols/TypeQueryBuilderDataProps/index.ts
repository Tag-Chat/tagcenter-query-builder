interface customItemsProps {
  label?: string;
  value?: string[];
}

interface CustomProps {
  label?: string;
  input?: string[];
}

interface OperatorProps {
  label?: string;
  value?: string[] | string;
}

interface QueryBuilderDataProps {
  name?: string;
  action?: boolean;
  type?: string;
  valueDefault?: string[];
  operator?: OperatorProps[];
  typeItemOperator?: string;
  customInput?: CustomProps[];
  customItems?: customItemsProps[];
  response?:
    | null
    | string
    | {
        item: "text";
        type: "text";
      };
  typeCustomItems?: string;
  typeItem: "select";
}

export interface TypeQueryBuilderDataProps {
  items?: QueryBuilderDataProps[];
}
