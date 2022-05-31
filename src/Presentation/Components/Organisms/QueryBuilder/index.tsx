import React, { useState, useEffect } from "react";

import { Button } from "../../Atoms/Button";

import * as S from "./style";
import { HeaderQueryBuilder } from "../../Molecules/Headers";

import RulesGroup from "./RulesGroup";
const QueryBuilder = () => {
  return (
    <S.Container>
      <S.GroupBlock>
        <HeaderQueryBuilder title={`Grupo Quero Leads que atendam`} />
        <S.ContentCondition>
          <RulesGroup />
        </S.ContentCondition>
        <S.GroupAction>
          <Button maxWidth={"290px"}>Criar outro grupo</Button>
        </S.GroupAction>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
