import React, { useCallback, useState, useEffect } from "react";
import {
  RuleGroupsProps,
  ResponsesProps,
} from "../../../../../Validation/Protocols/TypeQueryBuilderDataProps";
import { useCore } from "../../../../Hooks/Context";

import { Select } from "../../../Atoms";
import { InputResponse } from "../../../Atoms";
import { DataTime } from "../../../Atoms";
import { Button } from "../../../Atoms";

import * as S from "./style";

const WrapperRule = ({ indice }: any) => {
  const {
    itemOption,
    rules,
    setRules,
    data,
    groupRules,
    setGroupRules,
    countGroups,
    countRules,
    setCountRules,
    conditionsOptions,
    allConditionGroupValue,
  } = useCore();
  const [activeCondition, setActiveCondition] = useState<string[]>([]);
  const [activeOperator, setActiveOperator] = useState<string[]>([]);
  const [activeOperatorItem, setActiveOperatorItem] = useState<string[]>([]);
  const [activeResponse, setActiveResponse] = useState<string[]>([]);
  const [activeConditionGroups, setActiveConditionGroups] = useState<string[]>(
    []
  );
  const [activeData, setActivedata] = useState<string[]>([]);
  const [activeInputData, setActiveInputData] = useState<boolean[]>([]);
  const [activeInputMultiData, setActiveInputMultiData] = useState<boolean[]>(
    []
  );
  const [activeInputOperator, setActiveInputOperator] = useState<boolean[]>([]);
  const [activeInputResponse, setActiveInputResponse] = useState<boolean[]>([]);
  const [activeInputOperatorItem, setActiveInputOperatorItem] = useState<
    boolean[]
  >([]);

  //condition
  const handleActiveCondition = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const listCondition = [...activeCondition];

      if (!listCondition[index]) {
        listCondition[index] = e.currentTarget.value;
        setActiveCondition(listCondition);
      } else if (
        listCondition[index] &&
        listCondition[index] !== e.currentTarget.value
      ) {
        listCondition[index] = e.currentTarget.value;
        setActiveCondition(listCondition);

        const listOperator = [...activeOperator];
        listOperator[index] = "";
        setActiveOperator(listOperator);

        const listOperatorItem = [...activeOperatorItem];
        listOperatorItem[index] = "";
        setActiveOperatorItem(listOperatorItem);
      }

      const listRules: RuleGroupsProps[] = [...rules];
      listRules[index].condition = e.currentTarget.value;

      const listResponse = [...activeInputResponse];
      const listOperator = [...activeInputOperator];
      const listOperatorInputItem = [...activeInputOperatorItem];
      const listDataInput = [...activeInputData];
      const listMultiDataInput = [...activeInputMultiData];

      data?.map((item: any) => {
        if (item.name === e.currentTarget.value) {
          listRules[index].operatorValues.length = 0;
          listOperator[index] = true;
          setActiveInputOperator(listOperator);

          listRules[index].operatorItemValues.length = 0;
          listOperatorInputItem[index] = false;
          setActiveInputOperatorItem(listOperatorInputItem);

          listRules[index].response.length = 0;
          listRules[index].responseUser = null;
          listResponse[index] = false;
          setActiveInputResponse(listResponse);

          listDataInput[index] = false;
          setActiveInputData(listDataInput);

          listMultiDataInput[index] = false;
          setActiveInputMultiData(listMultiDataInput);

          //get values operation condition
          item.valueDefault.map((value: string) => {
            if (value) {
              listRules[index].operatorValues?.push({
                value: value,
                label: value,
              });
            }
          });

          if (item.operator !== null) {
            //get values operation item
            item.operator.map((item: any) => {
              item?.value.map((valueItem: string) => {
                if (valueItem) {
                  listRules[index].operatorItemValues?.push({
                    value: valueItem,
                    label: valueItem,
                  });
                }
              });
            });
          } else if (
            item.operator === null &&
            item.typeItemOperator === "data"
          ) {
            console.log("entrou aqui");
            listDataInput[index] = true;
            setActiveInputData(listDataInput);
          } else {
            listDataInput[index] = false;
            setActiveInputData(listDataInput);
          }

          if (item.response !== null) {
            listRules[index].response?.push({
              type: item.response.type,
              label: item.response.label,
            });
          }
        }
      });

      listOperator[index] = true;
      setActiveInputOperator(listOperator);

      listOperatorInputItem[index] = false;
      setActiveInputOperatorItem(listOperatorInputItem);

      listResponse[index] = false;
      setActiveInputResponse(listResponse);

      setRules(listRules);
      const listGroup: any[] = [...groupRules];

      if (listGroup.length === 0) {
        listGroup[index].push(rules);
        setGroupRules(listGroup);
      } else if (listGroup.length > 0) {
        listGroup[countGroups][index].condition = e.currentTarget.value;
        setGroupRules(listGroup);
      }
    },
    [activeCondition, rules]
  );

  //operator
  const handleActiveOperator = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const listOperator = [...activeOperator];

      const listMultiDataInput = [...activeInputMultiData];
      if (activeInputData && e.currentTarget.value === "Entre as datas") {
        listMultiDataInput[index] = true;
        setActiveInputMultiData(listMultiDataInput);
      } else {
        listMultiDataInput[index] = false;
        setActiveInputMultiData(listMultiDataInput);
      }

      listOperator[index] = e.currentTarget.value;
      setActiveOperator(listOperator);

      const listRules: RuleGroupsProps[] = [...rules];
      listRules[index].operator = e.currentTarget.value;
      setRules(listRules);

      const listOperatorInputItem = [...activeInputOperatorItem];
      listOperatorInputItem[index] = true;
      setActiveInputOperatorItem(listOperatorInputItem);

      if (listRules[index].response.length > 0) {
        const listResponse = [...activeInputResponse];
        listResponse[index] = true;
        setActiveInputResponse(listResponse);
      }

      const listGroup: any[] = [...groupRules];
      listGroup[countGroups][index].operator = e.currentTarget.value;
      setGroupRules(listGroup);

      const listOperatorItem = [...activeOperatorItem];
      listOperatorItem[index] = e.currentTarget.value;
      setActiveOperatorItem(listOperatorItem);
    },
    [activeOperator, rules]
  );

  //operator item
  const handleActiveOperatorItem = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const listOperatorItem = [...activeOperatorItem];
      listOperatorItem[index] = e.currentTarget.value;
      setActiveOperatorItem(listOperatorItem);

      const listRules: RuleGroupsProps[] = [...rules];
      listRules[index].operatorItem = e.currentTarget.value;
      setRules(listRules);

      const listGroup: any[] = [...groupRules];
      listGroup[countGroups][index].operatorItem = e.currentTarget.value;
      setGroupRules(listGroup);
    },
    [rules]
  );

  //response
  const handleActiveResponse = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const listResponse = [...activeResponse];
      listResponse[index] = e.currentTarget.value;
      setActiveResponse(listResponse);

      const listRules: RuleGroupsProps[] = [...rules];
      listRules[index].responseUser = e.currentTarget.value;
      setRules(listRules);

      const listGroup: any[] = [...groupRules];
      listGroup[countGroups][index].responseUser = e.currentTarget.value;
      setGroupRules(listGroup);
    },
    [rules]
  );

  //data
  const handleActiveData = useCallback((e: any, index: number) => {
    const data = e?._d;
    const newDate =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    const listRules: RuleGroupsProps[] = [...rules];
    listRules[index].operatorDate = newDate;
    setRules(listRules);

    const listGroup: any[] = [...groupRules];
    listGroup[countGroups][index].operatorDate = e.currentTarget.value;
    setGroupRules(listGroup);
  }, []);

  //multi data
  const handleActiveMultiData = useCallback((e: any, index: number) => {
    const data = e?._d;
    const newDate =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    const listRules: RuleGroupsProps[] = [...rules];
    listRules[index].operatorMultidate = newDate;
    setRules(listRules);

    const listGroup: any[] = [...groupRules];
    listGroup[countGroups][index].operatorMultidate = e.currentTarget.value;
    setGroupRules(listGroup);
  }, []);

  //condition options
  const handleActiveConditionOption = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (allConditionGroupValue === "all") {
        const value = e.currentTarget.value;
        const listConditionGroups = [...activeConditionGroups];
        listConditionGroups[0] = value;
        setActiveConditionGroups(listConditionGroups);

        const listRules: RuleGroupsProps[] = [...rules];
        listRules[index].combiner = listConditionGroups[0];
        setRules(listRules);
      } else if (allConditionGroupValue === "each") {
        const value = e.currentTarget.value;
        const listConditionGroups = [...activeConditionGroups];
        listConditionGroups[index] = value;
        setActiveConditionGroups(listConditionGroups);

        const listRules: RuleGroupsProps[] = [...rules];
        listRules[index].combiner = listConditionGroups[index];
        setRules(listRules);
      }
    },
    [allConditionGroupValue, rules]
  );

  //add rule
  const handleAddRule = useCallback(
    (index: number) => {
      const listRules: any[] = [...rules];
      const listGroup: any[] = [...groupRules];

      listRules.push({
        rule: countRules + 1,
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
      });

      setRules(listRules);

      listGroup[countGroups].push({
        rule: countRules + 1,
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
      });

      setGroupRules(listGroup);
    },
    [rules, countGroups, countRules, groupRules]
  );

  console.log("logs::", allConditionGroupValue, groupRules, groupRules.length);

  return (
    <S.Container>
      {groupRules[indice]?.map(
        (item, index) =>
          item && (
            <>
              {index > 0 && (
                <S.WrapperCondition
                  key={`condition-${index + index + 1}-tagcenter`}
                >
                  <S.ContentConditionSelect>
                    <Select
                      id={"teste"}
                      name={"teste"}
                      value={
                        allConditionGroupValue === "all"
                          ? activeConditionGroups[0]
                          : activeConditionGroups[index]
                      }
                      options={conditionsOptions}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleActiveConditionOption(e, index)
                      }
                    />
                  </S.ContentConditionSelect>
                </S.WrapperCondition>
              )}
              <S.WrapperRule key={`rule-${index + index + 1}-tagcenter`}>
                <S.ContentSelect>
                  <Select
                    id={"teste"}
                    name={"teste"}
                    value={activeCondition[index]}
                    options={itemOption}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleActiveCondition(e, index)
                    }
                  />
                </S.ContentSelect>
                {activeInputOperator[index] && (
                  <S.ContentSelect>
                    <Select
                      id={"teste"}
                      name={"teste"}
                      value={activeOperator[index]}
                      options={rules[index]?.operatorValues}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleActiveOperator(e, index)
                      }
                    />
                  </S.ContentSelect>
                )}
                {activeInputOperatorItem[index] &&
                  rules[index]?.operatorItemValues.length > 0 && (
                    <S.ContentSelect>
                      <Select
                        id={"teste"}
                        name={"teste"}
                        value={activeOperatorItem[index]}
                        options={rules[index]?.operatorItemValues}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleActiveOperatorItem(e, index)
                        }
                      />
                    </S.ContentSelect>
                  )}
                {activeInputData[index] && (
                  <S.ContentSelect>
                    <DataTime
                      title={activeInputMultiData[index] ? "De" : "Data"}
                      name={"Data"}
                      onChange={(e: any) => handleActiveData(e, index)}
                    />
                  </S.ContentSelect>
                )}
                {activeInputMultiData[index] && (
                  <S.ContentSelect>
                    <DataTime
                      title={"Para"}
                      name={"Datafor"}
                      onChange={(e) => handleActiveMultiData(e, index)}
                    />
                  </S.ContentSelect>
                )}
                {activeInputResponse[index] && (
                  <S.ContentResponse>
                    <InputResponse
                      name={"teste"}
                      type={`${rules[index]?.response[index].type}`}
                      value={activeResponse[index]}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleActiveResponse(e, index)
                      }
                      placeholder={`${rules[index]?.response[index].label}`}
                    />
                  </S.ContentResponse>
                )}
              </S.WrapperRule>
            </>
          )
      )}
      <S.ContentButton>
        <Button
          maxWidth={"250px"}
          onClick={() => (
            setCountRules(countRules + 1), handleAddRule(countGroups)
          )}
        >
          Criar outra condição
        </Button>
      </S.ContentButton>
    </S.Container>
  );
};

export default WrapperRule;
