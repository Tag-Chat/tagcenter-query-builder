import React, { useEffect, useState, useCallback } from "react";

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
    groupRules,
    countGroups,
    setCountGroups,
    setGroupRules,
    allConditionGroup,
    allConditionGroupValue,
    setAllConditionGroupValue,
    setCountRules,
    countRules,
  } = useCore();

  console.log("logs::", groupRules, countGroups);

  const handleAddGroup = useCallback(() => {
    const listGroup: any[] = [...groupRules];
    setCountRules(0);

    listGroup.push([
      {
        rule: countRules,
        condition: "",
        operator: "",
        operatorValues: [],
        operatorItem: "",
        operatorItemValues: [],
        operatorDate: "",
        operatorMultidate: "",
        combiner: "",
        response: [],
        responseUser: "",
        groupId: groupRules.length,
      },
    ]);

    setGroupRules(listGroup);
  }, [countGroups, groupRules]);

  console.log("logs::", groupRules);

  return (
    <S.Container>
      {groupRules.map(
        (group, index) =>
          group && (
            <S.QueryBuilder>
              <HeaderQueryBuilder
                title={`Grupo 0 Quero Leads que atendam`}
                options={allConditionGroup}
                value={
                  allConditionGroupValue === "all"
                    ? allConditionGroup[0].label
                    : allConditionGroup[1].label
                }
                groupRules={groupRules}
                onChange={(e: any) =>
                  setAllConditionGroupValue(e.currentTarget.value)
                }
              />
              <WrapperRule indice={index} />
            </S.QueryBuilder>
          )
      )}
      <button
        onClick={() => (setCountGroups(countGroups + 1), handleAddGroup())}
      >
        teste
      </button>
    </S.Container>
  );
};

export default QueryBuilder;
