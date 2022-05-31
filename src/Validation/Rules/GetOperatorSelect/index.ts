import { GetOptionsConditionProps } from "../../Protocols/TypeGetOptionsConditionProps";
import { ValueProps } from "../../Protocols/TypeQueryBuilderDataProps";

export function GetOperatorSelect({
  data,
  conditionActive,
}: GetOptionsConditionProps) {
  let operator: ValueProps[] = [];

  data?.items.map((item) => {
    if (item.name === conditionActive?.name) {
      if (item?.operator && item.operator.length === 1) {
        for (let i = 0; i < item.operator[0].value.length; i++) {
          operator.push({
            value: item.operator[0].value[i],
            label: item.operator[0].value[i],
          });
        }
      } else if (item?.operator && item?.operator.length > 1) {
        for (let i = 0; i < item.operator.length; i++) {
          for (
            let index = 0;
            index < item?.operator[i]?.value.length;
            index++
          ) {
            operator.push({
              value: item.operator[0].value[i],
              label: item.operator[0].value[i],
            });
          }
        }
      }
    }
  });
  return operator;
}
