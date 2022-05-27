import { GetOptionsConditionProps } from "../../Protocols/TypeGetOptionsConditionProps";
import { ValueProps } from "../../Protocols/TypeQueryBuilderDataProps";

export function GetValueDefaultSelect({
  data,
  conditionActive,
}: GetOptionsConditionProps) {
  let subOptions: ValueProps[] = [];

  data?.items.map((item) => {
    if (item?.name === conditionActive) {
      for (let i = 0; i < item?.valueDefault?.length; i++) {
        subOptions = [
          ...subOptions,
          {
            value: item?.valueDefault[i],
            label: item?.valueDefault[i],
          },
        ];
      }
    }
  });
  return subOptions;
}
