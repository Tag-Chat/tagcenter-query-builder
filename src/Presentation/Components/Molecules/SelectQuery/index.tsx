import React from "react";
import Select from "../../Atoms/Select";

import { SelectQueryProps } from "../../../../Validation/Protocols/TypeSelectQueryProps";

import * as S from "./style";

const SelectQuery = ({ register, options }: SelectQueryProps) => {
  return (
    <S.SelectContent>
      <Select name="operator" register={register} options={options} />
    </S.SelectContent>
  );
};

export default SelectQuery;
