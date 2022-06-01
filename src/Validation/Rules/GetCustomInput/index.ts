import { GetOptionsConditionProps } from "../../Protocols/TypeGetOptionsConditionProps";
import { useCore } from "../../../Presentation/Hooks/Context";
import { ValueProps } from "../../Protocols/TypeQueryBuilderDataProps";

export function GetCustomInput({
  data,
  conditionActive,
}: GetOptionsConditionProps) {
  let moreAction: ValueProps[] = [];

  data?.items.map((item) => {
    if (item?.name === conditionActive?.name) {
      for (let i = 0; i < item?.customInput?.length; i++) {
        moreAction.push({
          value: item?.customInput[i],
          label: item?.customInput[i],
        });
      }
    }
  });

  return moreAction;
}
