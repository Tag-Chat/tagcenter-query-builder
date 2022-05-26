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

const QueryBuilder = () => {
  const [data, setData] = useState<any>(queryBuilderData);
  const [conditionActive, setConditionActive] = useState();
  const [operatorActive, setOperatorActive] = useState<boolean>();
  const [actionActive, setActionActive] = useState<boolean>();
  const [responseActive, setResponseActive] = useState<boolean>();
  const [dateActive, setDateActive] = useState<boolean>();
  const [conditionsOptions, setConditionsOptions] = useState({
    selectCondition: [
      {
        value: "e",
        label: "E",
      },
      {
        value: "ou",
        label: "OU",
      },
    ],
    itemOption: [
      {
        value: "",
        label: "",
      },
    ],
  });
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

  useEffect(() => {
    let options: ValueProps[] = [];
    let subOptions: ValueProps[] = [];
    let operator: ValueProps[] = [];

    for (let i = 0; i < data?.items.length; i++) {
      options = [
        ...options,
        {
          value: data?.items[i]?.name,
          label: data?.items[i]?.name,
        },
      ];
    }

    const response = conditionsOptions;
    response.itemOption = options;

    setConditionActive(watchCondition);

    const getValueDefault = data?.items.map((item: any) => {
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
      }
    });
    setSubItemOption(subOptions);

    const getAction = data?.items.map((item: QueryBuilderDataProps) => {
      if (item.name === conditionActive && item.action === true) {
        setActionActive(true);
      } else if (item.name === conditionActive && item.action === false) {
        setActionActive(false);
      }
    });

    const getOperator = data?.items.map((item: any) => {
      if (item.name === conditionActive) {
        if (item.operator && item.operator.length === 1) {
          setOperatorActive(true);
          for (let i = 0; i < item?.operator[0]?.value.length; i++) {
            operator = [
              ...operator,
              {
                value: item?.operator[0]?.value[i],
                label: item?.operator[0]?.value[i],
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

          if (item?.typeItemOperator === TypeItemOperatorProps.Data) {
            setDateActive(true);
          }
        } else {
          setOperatorActive(false);
        }
      }
    });

    const getResponseCondition = data?.items?.map((item: any) => {
      if (item.response !== null && item?.name === conditionActive) {
        setResponseOption(item.response);
        setResponseActive(true);
      } else if (item.response === null && item?.name === conditionActive) {
        setResponseActive(false);
      }
    });
  }, [watchCondition, conditionActive]);

  return (
    <S.Container>
      <S.GroupBlock>
        <S.HeaderGroupBlock>
          <S.TitleHeader>Grupo 1 Quero Leads que atendam</S.TitleHeader>
          <S.SelectCondition>
            <Select
              name="allcondition"
              register={register}
              options={conditionsOptions.selectCondition}
            />
          </S.SelectCondition>
        </S.HeaderGroupBlock>
        <S.ContentCondition>
          <S.ContentContainer>
            <S.SelectContent>
              <Select
                name="condition"
                register={register}
                options={conditionsOptions.itemOption}
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
                    <h1>tem campo data</h1>
                  </>
                )}
              </>
            )}
          </S.ContentContainer>
          <S.ContentContainer>
            {actionActive && (
              <S.GroupAction>
                <Button maxWidth={"150px"} sizeButton={"sm"}>
                  Adicionar ações
                </Button>
              </S.GroupAction>
            )}
          </S.ContentContainer>
        </S.ContentCondition>

        <S.GroupAction>
          <Button maxWidth={"290px"}>Criar outra grupo</Button>
        </S.GroupAction>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
