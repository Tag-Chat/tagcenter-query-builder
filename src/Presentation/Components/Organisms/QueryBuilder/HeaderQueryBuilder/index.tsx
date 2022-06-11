import React from "react";
import { Select } from "../../../Atoms";

import * as S from "./style";

const HeaderQueryBuilder = ({ title, options, onChange, groupRules }: any) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ContainerSelect>
        <Select
          id={"allCondition"}
          name={"allCondition"}
          options={options}
          onChange={onChange}
        />
      </S.ContainerSelect>
    </S.Container>
  );
};

export default HeaderQueryBuilder;
