import React, { useEffect, useState } from "react";

import { useCore } from "../../../Hooks/Context";
import {
  ValueProps,
  RuleGroupsProps,
} from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import HeaderQueryBuilder from "./HeaderQueryBuilder";

import * as S from "./style";
import WrapperRule from "./WrapperRule";

const QueryBuilder = () => {
  const {
    data,
    conditionsOptions,
    allCondition,
    setAllCondition,
    groupRules,
    countRules,
    itemOption,
  } = useCore();

  return (
    <S.Container>
      <S.QueryBuilder>
        <HeaderQueryBuilder
          title={`Grupo 0 Quero Leads que atendam`}
          options={conditionsOptions}
          value={allCondition}
          groupRules={groupRules}
          onChange={(e: any) => setAllCondition(e.currentTarget.value)}
        />
        <WrapperRule />
      </S.QueryBuilder>
    </S.Container>
  );
};

export default QueryBuilder;
