import React, { useState, useEffect, useCallback } from "react";

import { useCore } from "../../../Hooks/Context";

import { Button } from "../../Atoms/Button";

import * as S from "./style";
import { HeaderQueryBuilder } from "../../Molecules/Headers";

import RulesGroup from "./RulesGroup";
const QueryBuilder = () => {
  const { groupRules, setGroupRules, inputFields, allCondition } = useCore();

  const handleAddGroup = useCallback(() => {
    const listGroup = groupRules.grupos;
    if (listGroup.length >= 1) {
      listGroup.push({ combiner: allCondition });
      listGroup.push([...inputFields]);
    } else {
      listGroup.push([...inputFields]);
    }
    setGroupRules({ grupos: [...listGroup] });
  }, [groupRules, allCondition]);

  return (
    <S.Container>
      <S.GroupBlock>
        <HeaderQueryBuilder title={`Grupo Quero Leads que atendam`} />
        {groupRules?.grupos?.map(
          (group, index) =>
            group instanceof Array && (
              <S.ContentCondition>
                <RulesGroup />
              </S.ContentCondition>
            )
        )}
        <S.GroupAction>
          <Button maxWidth={"290px"} onClick={() => handleAddGroup()}>
            Criar outro grupo
          </Button>
        </S.GroupAction>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
