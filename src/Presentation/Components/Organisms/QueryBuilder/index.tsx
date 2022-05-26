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
  MoreActionProps,
} from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import { Input } from "../../Atoms/Input";
import { Button } from "../../Atoms/Button";
import Select from "../../Atoms/Select";

import * as S from "./style";
import { DataTime } from "../../Atoms/DataTime";

const QueryBuilder = () => {
  const [data, setData] = useState<any>(queryBuilderData);
  const [conditionActive, setConditionActive] = useState();
  const [operatorActive, setOperatorActive] = useState<boolean>(false);
  const [actionActive, setActionActive] = useState<boolean>(false);
  const [responseActive, setResponseActive] = useState<boolean>(false);
  const [dateActive, setDateActive] = useState<boolean>(false);
  const [multiDateActive, setMulitDateActive] = useState<boolean>(false);
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

  const [moreActionOption, setMoreActionOption] = useState([
    {
      label: "",
      input: "",
      value: "",
    },
  ]);

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
    let moreAction: any = [];

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

          //get Response Condition
          if (item.response !== null) {
            setResponseOption(item.response);
            setResponseActive(true);
          } else if (item.response === null) {
            setResponseActive(false);
          }
        }

        //get custom Input
        if (item?.customInput !== null) {
          for (let i = 0; i < item?.customInput?.length; i++) {
            moreAction = [
              ...moreAction,
              {
                value: item?.customInput[i].value,
                label: item?.customInput[i].label,
                input: item?.customInput[i].input,
              },
            ];
          }
          setMoreActionOption(moreAction);
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
                  <S.ActionMoreOptions>
                    <S.SelectContent>
                      <Select
                        name="moreActionOption"
                        register={register}
                        options={moreActionOption}
                      />
                    </S.SelectContent>
                  </S.ActionMoreOptions>
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
          <S.ContentContainerAction>
            <S.GroupAction>
              <Button maxWidth={"180px"} sizeButton={"sm"}>
                Criar outra condição
              </Button>
            </S.GroupAction>
          </S.ContentContainerAction>
        </S.ContentCondition>

        <S.GroupAction>
          <Button maxWidth={"290px"}>Criar outro grupo</Button>
        </S.GroupAction>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
