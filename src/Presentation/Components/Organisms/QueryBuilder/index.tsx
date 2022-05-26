import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { queryBuilderData } from "../../../../Data";
import {
  QueryBuilderDataProps,
  TypeQueryBuilderDataProps,
  ResponsesProps,
  OperatorProps,
  ValueProps,
  TypeItemOperatorProps,
} from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import { Input } from "../../Atoms/Input";
import { Button } from "../../Atoms/Button";
import Select from "../../Atoms/Select";

import * as S from "./style";
import { DataTime } from "../../Atoms/DataTime";

const QueryBuilder = () => {
  const [data, setData] = useState<any>(queryBuilderData);
  const [conditionActive, setConditionActive] = useState();
  const [operatorActive, setOperatorActive] = useState<boolean>();
  const [actionActive, setActionActive] = useState<boolean>();
  const [responseActive, setResponseActive] = useState<boolean>();
  const [dateActive, setDateActive] = useState<boolean>();
  const [multiDateActive, setMulitDateActive] = useState<boolean>();
  const [actionMoreOptions, setActionMoreOptions] = useState<boolean>(false);
  const [conditionsOptions, setConditionsOptions] = useState([
    {
      value: "e",
      label: "E",
    },
    {
      value: "ou",
      label: "OU",
    },
  ]);
  const [itemOption, setItemOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [subItemOption, setSubItemOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [operatorOption, setOperatorOption] = useState<ValueProps[]>([
    {
      value: "",
      label: "",
    },
  ]);

  const [responseOption, setResponseOption] = useState<ResponsesProps>({
    type: "",
    label: "",
  });

  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchCondition = watch("condition");
  const watchOperator = watch("operator");
  const watchOperatorOption = watch("operatorOption");

  useEffect(() => {
    let options: ValueProps[] = [];
    let subOptions: ValueProps[] = [];
    let operator: ValueProps[] = [];

    if (data?.items) {
      //get options condition
      for (let i = 0; i < data?.items.length; i++) {
        options = [
          ...options,
          {
            value: data?.items[i]?.name,
            label: data?.items[i]?.name,
          },
        ];
      }
      setItemOption(options);
      setConditionActive(watchCondition);

      const getInputs = data?.items.map((item: QueryBuilderDataProps) => {
        //get ValueDefault select
        if (item.name === conditionActive) {
          for (let i = 0; i < item?.valueDefault.length; i++) {
            subOptions = [
              ...subOptions,
              {
                value: item?.valueDefault[i],
                label: item?.valueDefault[i],
              },
            ];
          }
          setSubItemOption(subOptions);
        }

        //get Action select
        if (item.name === conditionActive && item.action === true) {
          setActionActive(true);
        } else if (item.name === conditionActive && item.action === false) {
          setActionActive(false);
        }

        //get Operator select
        if (item.name === conditionActive) {
          //get values operator
          if (item?.operator && item.operator.length === 1) {
            setOperatorActive(true);
            for (let i = 0; i < item.operator[0].value.length; i++) {
              operator = [
                ...operator,
                {
                  value: item.operator[0].value[i],
                  label: item.operator[0].value[i],
                },
              ];
            }
            setOperatorOption(operator);
          } else if (item?.operator && item?.operator.length > 1) {
            setOperatorActive(true);
            for (let i = 0; i < item.operator.length; i++) {
              for (
                let index = 0;
                index < item?.operator[i]?.value.length;
                index++
              ) {
                operator = [
                  ...operator,
                  {
                    value: item?.operator[i]?.value[index],
                    label: item?.operator[i]?.value[index],
                  },
                ];
              }
            }
            setOperatorOption(operator);
          } else if (item?.operator === null) {
            setOperatorActive(false);
          } else {
            setOperatorActive(false);
          }

          // get input data
          if (
            item?.operator === null &&
            item?.typeItemOperator === TypeItemOperatorProps.Data
          ) {
            if (watchOperator === "Entre as datas") {
              setMulitDateActive(true);
            } else {
              setMulitDateActive(false);
            }
            setDateActive(true);
          } else {
            setDateActive(false);
          }

          //getResponseCondition
          if (item.response !== null && item?.name === conditionActive) {
            setResponseOption(item.response);
            setResponseActive(true);
          } else if (item.response === null && item?.name === conditionActive) {
            setResponseActive(false);
          }
        }
      });
    }
  }, [watchCondition, conditionActive, watchOperator]);

  return (
    <S.Container>
      <S.GroupBlock>
        <S.HeaderGroupBlock>
          <S.TitleHeader>Grupo 1 Quero Leads que atendam</S.TitleHeader>
          <S.SelectCondition>
            <Select
              name="allcondition"
              register={register}
              options={conditionsOptions}
            />
          </S.SelectCondition>
        </S.HeaderGroupBlock>
        <S.ContentCondition>
          <S.ContentContainer>
            <S.SelectContent>
              <Select
                name="condition"
                register={register}
                options={itemOption}
              />
            </S.SelectContent>
            {watchCondition && (
              <>
                <S.SelectContent>
                  <Select
                    name="operator"
                    register={register}
                    options={subItemOption}
                  />
                </S.SelectContent>
                {watchOperator && operatorActive && (
                  <S.SelectContent>
                    <Select
                      name="operatorOption"
                      register={register}
                      options={operatorOption}
                    />
                  </S.SelectContent>
                )}
                {watchOperator && responseActive && (
                  <S.InputContainer>
                    <Input
                      name={"teste"}
                      label={`${responseOption.label}`}
                      control={control}
                      usePadding={false}
                    />
                  </S.InputContainer>
                )}
                {watchOperator && dateActive && (
                  <>
                    <S.SelectContent>
                      <DataTime
                        name={"startData"}
                        title={`${multiDateActive ? "Inicial" : "Data"}`}
                      />
                    </S.SelectContent>
                    {multiDateActive && (
                      <S.SelectContent>
                        <DataTime name={"finishData"} title={"Final"} />
                      </S.SelectContent>
                    )}
                  </>
                )}
              </>
            )}
          </S.ContentContainer>
          <S.ContentContainerAction>
            {actionActive && (
              <>
                {actionMoreOptions && (
                  <S.ActionMoreOptions>teste</S.ActionMoreOptions>
                )}
                <S.GroupAction>
                  <Button
                    maxWidth={"150px"}
                    sizeButton={"sm"}
                    onClick={() => setActionMoreOptions(!actionMoreOptions)}
                  >
                    Adicionar ações
                  </Button>
                </S.GroupAction>
              </>
            )}
          </S.ContentContainerAction>
        </S.ContentCondition>

        <S.GroupAction>
          <Button maxWidth={"290px"}>Criar outra grupo</Button>
        </S.GroupAction>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
