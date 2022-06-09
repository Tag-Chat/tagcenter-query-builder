import React from "react";

import * as S from "./style";

export const InputResponse = ({
  id,
  name,
  type,
  placeholder,
  onChange,
}: any) => {
  return (
    <S.Container>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </S.Container>
  );
};
