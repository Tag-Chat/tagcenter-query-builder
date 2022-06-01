import { GetOptionsConditionProps } from "../../Protocols/TypeGetOptionsConditionProps";
import { ResponsesProps } from "../../Protocols/TypeQueryBuilderDataProps";

export const GetResponseInput = ({
  data,
  conditionActive,
}: GetOptionsConditionProps) => {
  let response = {
    label: "",
    type: "",
  };

  data?.items.map((item) => {
    if (item?.name === conditionActive?.name && item.response !== null) {
      response = {
        label: item.response.label,
        type: item.response.type,
      };
    }
  });

  return response;
};
