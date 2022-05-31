import React, { useState, useEffect } from "react";
import { useCore } from "../../../../Hooks/Context";
import { queryBuilderData } from "../../../../../Data";

import {
  GroupProps,
  QueryBuilderDataProps,
  TypeItemOperatorProps,
  WrapperConditionProps,
  ConditionActive,
  SelectProps,
} from "../../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import {
  GetCustomInput,
  GetOperatorSelect,
  GetOptionsCondition,
  GetValueDefaultSelect,
} from "../../../../../Validation/Rules";

import Select from "../../../Atoms/Select";
import { Button } from "../../../Atoms/Button";

import * as S from "./style";

interface teste {
  rule: number;
  condition: string[] | string;
  operator: string[] | string;
  operatorItem: string[] | string;
  combiner: null | string[] | string;
}

const RulesGroup = () => {
  const [data, setData] = useState<any>(queryBuilderData);
  const [countRules, setCountRules] = useState<number>(0);
  const {
    itemOption,
    setItemOption,
    subItemOption,
    setSubItemOption,
    operatorOption,
    setOperatorOption,
    responseOption,
    setResponseOption,
    moreActionOption,
    setMoreActionOption,
    conditions,
    setConditions,
    conditionsOptions,
    setQuery,
    query,
  } = useCore();
  const [infoConditions, setInfoConditions] = useState<any>([
    { conditionName: "", values: [], operator: [], combiner: [] },
  ]);
  const [inputFields, setInputFields] = useState<teste[]>([
    {
      rule: countRules,
      condition: "",
      operator: "",
      operatorItem: "",
      combiner: null,
    },
  ]);
  const [groupRules, setGroupRules] = useState([{ groups: [...inputFields] }]);
  const [conditionActive, setConditionActive] = useState<ConditionActive>({
    name: "",
    label: "",
  });

  const loading: SelectProps[] = [
    {
      value: "carregando",
      label: "carregando",
    },
  ];

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      rule: countRules + 1,
      condition: "",
      operator: "",
      operatorItem: "",
      combiner: "",
    });
    setInputFields(values);
  };

  const handleRemoveFields = (index: number) => {
    const values = [...inputFields];
    const conditions = [...infoConditions];

    values.pop();
    conditions.pop();

    setInputFields(values);
    setInfoConditions(conditions);
    setQuery(JSON.stringify(inputFields, null, 2));
  };

  const handleInputChange = (index: number, event: any) => {
    const values = [...inputFields];
    const conditionInfo = [...infoConditions];

    switch (event.target.name) {
      case `condition-${index}`:
        values[index].condition = event.target.value;

        setConditionActive({
          name: event.target.value,
          label: event.target.label,
        });

        conditionInfo[index] = {
          conditionName: event.target.name,
          values: [...loading],
          operator: [...loading],
          combiner: [...conditionsOptions],
        };
        break;
      case `operator-${index}`:
        values[index].operator = event.target.value;
        conditionInfo[index].values = [...subItemOption];
        break;
      case `operatorItem-${index}`:
        values[index].operatorItem = event.target.value;
        conditionInfo[index].operator = [...operatorOption];
        break;
      case `combiner-${index}`:
        values[index].combiner = event.target.value;
        conditionInfo[index].combiner = [...conditionsOptions];
        break;
    }
    setInfoConditions(conditionInfo);
    setInputFields(values);

    console.log("conditionInfo", conditionInfo);
    setQuery(JSON.stringify(inputFields, null, 2));
  };

  const resetForm = (e: any) => {
    setCountRules(0);
    setInputFields([
      {
        rule: countRules,
        condition: "",
        operator: "",
        operatorItem: "",
        combiner: null,
      },
    ]);
  };

  useEffect(() => {
    //get options condition
    setItemOption(GetOptionsCondition({ data }));
    //get ValueDefault select
    setSubItemOption(GetValueDefaultSelect({ data, conditionActive }));
    // get operator
    setOperatorOption(GetOperatorSelect({ data, conditionActive }));
  }, [conditionActive]);

  return (
    <S.Container>
      {inputFields.map((inputField, index) => (
        <>
          <S.CombinerContent>
            {inputFields[index]?.combiner !== null && (
              <S.RuleItem>
                <Select
                  id={`combiner-${index}`}
                  name={`combiner-${index}`}
                  onChange={(event) => handleInputChange(index, event)}
                  options={
                    infoConditions[index]?.values.length > 1
                      ? infoConditions[index]?.combiner
                      : conditionsOptions
                  }
                />
              </S.RuleItem>
            )}
          </S.CombinerContent>
          <S.Rule>
            <S.RuleGroup key={`${inputField}~${index}`}>
              <S.RuleItem>
                <Select
                  id={`condition-${index}`}
                  name={`condition-${index}`}
                  onChange={(event) => handleInputChange(index, event)}
                  options={itemOption}
                />
              </S.RuleItem>
              <S.RuleItem>
                <Select
                  id={`operator-${index}`}
                  name={`operator-${index}`}
                  onChange={(event) => handleInputChange(index, event)}
                  options={
                    infoConditions[index]?.values.length > 1
                      ? infoConditions[index]?.values
                      : subItemOption
                  }
                />
              </S.RuleItem>
              <S.RuleItem>
                <Select
                  id={`operatorItem-${index}`}
                  name={`operatorItem-${index}`}
                  onChange={(event) => handleInputChange(index, event)}
                  options={
                    infoConditions[index]?.values.length > 1
                      ? infoConditions[index]?.operator
                      : operatorOption
                  }
                  onClick={(event) => handleInputChange(index, event)}
                />
              </S.RuleItem>
              <S.ActionRule>
                <S.ButtonAction
                  type="button"
                  onClick={() => (
                    handleRemoveFields(index), setCountRules(countRules - 1)
                  )}
                >
                  <S.IconDelete />
                </S.ButtonAction>
              </S.ActionRule>
            </S.RuleGroup>
          </S.Rule>
        </>
      ))}
      <div>
        <Button
          type="button"
          onClick={() => (handleAddFields(), setCountRules(countRules + 1))}
          sizeButton="sm"
        >
          Criar outra condição
        </Button>
      </div>
      {/**
        *  <div className="submit-button">
          <button
            className="btn btn-secondary mr-2"
            type="reset"
            onClick={resetForm}
          >
            Reset Form
          </button>
        </div>
        */}
    </S.Container>
  );
};

export default RulesGroup;
