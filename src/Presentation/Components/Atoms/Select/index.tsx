import React from "react";
import { SelectComponentProps } from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import * as S from "./styles";

const Select = ({
  id,
  name,
  onChange,
  options,
  value,
  onClick,
}: SelectComponentProps) => {
  return (
    <S.Container>
      <select id={id} name={name} onChange={onChange} onClick={onClick}>
        <option value="Selecione">Selecione</option>
        {options.map((item: any) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </S.Container>
  );
};

export default Select;
