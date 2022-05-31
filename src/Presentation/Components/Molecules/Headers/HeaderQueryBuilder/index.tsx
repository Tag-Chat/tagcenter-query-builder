import React, { useState } from "react";

import { useCore } from "../../../../Hooks/Context";

import {
  SelectProps,
  HeaderQueryBuilderProps,
} from "../../../../../Validation/Protocols/TypeQueryBuilderDataProps";
import Select from "../../../Atoms/Select";

import * as S from "./style";

const HeaderQueryBuilder = ({ title }: HeaderQueryBuilderProps) => {
  const { conditionsOptions, setAllCondition } = useCore();

  return (
    <S.HeaderGroupBlock>
      <S.TitleHeader>{title}</S.TitleHeader>
      <S.SelectCondition>
        <Select
          id={"allcondition"}
          name="allcondition"
          options={conditionsOptions}
          onChange={(e) => setAllCondition(e.target.value)}
        />
      </S.SelectCondition>
    </S.HeaderGroupBlock>
  );
};

export default HeaderQueryBuilder;
