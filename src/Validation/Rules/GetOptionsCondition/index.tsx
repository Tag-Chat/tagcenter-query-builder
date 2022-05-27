import { GetOptionsConditionProps } from "../../Protocols/TypeGetOptionsConditionProps";
import { ValueProps } from "../../Protocols/TypeQueryBuilderDataProps";

export function GetOptionsCondition({ data }: GetOptionsConditionProps) {
  let response: ValueProps[] = [];

  for (let i = 0; i < data?.items?.length; i++) {
    response.push({
      value: data?.items[i]?.name,
      label: data?.items[i]?.name,
    });
  }

  return response;
}
