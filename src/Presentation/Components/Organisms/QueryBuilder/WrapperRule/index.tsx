import React, { useCallback, useState, useEffect } from "react";
import {
  RuleGroupsProps,
  ResponsesProps,
} from "../../../../../Validation/Protocols/TypeQueryBuilderDataProps";
import { useCore } from "../../../../Hooks/Context";

import { Select } from "../../../Atoms";
import { InputResponse } from "../../../Atoms";
import { DataTime } from "../../../Atoms";

import * as S from "./style";

const WrapperRule = () => {
  const {
    itemOption,
    rules,
    setRules,
    data,
    groupRules,
    setGroupRules,
    countGroups,
  } = useCore();
  const [activeCondition, setActiveCondition] = useState<string[]>([]);
  const [activeOperator, setActiveOperator] = useState<string[]>([]);
  const [activeOperatorItem, setActiveOperatorItem] = useState<string[]>([]);
  const [activeResponse, setActiveResponse] = useState<string[]>([]);
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
        listGroup.push(rules);
        setGroupRules(listGroup);
      } else {
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
  }, []);

  //multi data
  const handleActiveMultiData = useCallback((e: any, index: number) => {
    const data = e?._d;
    const newDate =
      data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();

    const listRules: RuleGroupsProps[] = [...rules];
    listRules[index].operatorMultidate = newDate;
    setRules(listRules);
  }, []);

  console.log(
    "logs::",
    activeCondition,
    activeOperator,
    activeOperatorItem,
    rules
  );

  useEffect(() => {}, []);

  return (
    <S.Container>
      {rules?.map(
        (item, index) =>
          item && (
            <S.WrapperRule key={`rule-${index}-tagcenter`}>
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
          )
      )}
    </S.Container>
  );
};

export default WrapperRule;
