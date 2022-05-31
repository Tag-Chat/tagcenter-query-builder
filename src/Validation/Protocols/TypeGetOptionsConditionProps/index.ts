import {
  TypeQueryBuilderDataProps,
  ConditionActive,
} from "../TypeQueryBuilderDataProps";

export interface GetOptionsConditionProps {
  data: TypeQueryBuilderDataProps;
  conditionActive?: ConditionActive;
  watchOperator?: string;
}
