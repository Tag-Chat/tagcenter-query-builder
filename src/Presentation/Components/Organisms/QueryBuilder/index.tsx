import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { queryBuilderData } from "../../../../Data";
import { TypeQueryBuilderDataProps } from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import Input from "../../Atoms/Input";
import { Button } from "../../Atoms/Button";
import Select from "../../Atoms/Select";

import * as S from "./style";

interface ValueProps {
  value: string;
  label: string;
}

const QueryBuilder = () => {
  const [data, setData] = useState<any>(queryBuilderData);
  const [conditionActive, setConditionActive] = useState();
  const [operatorActive, setOperatorActive] = useState<boolean>();
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

  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const watchCondition = watch("condition");

  useEffect(() => {
    let options: ValueProps[] = [];
    let subOptions: ValueProps[] = [];
    let operator: ValueProps[] = [];

    for (let i = 0; i < data.items.length; i++) {
      options = [
        ...options,
        {
          value: data.items[i]?.name,
          label: data.items[i]?.name,
        },
      ];
    }
    setItemOption(options);

    setConditionActive(watchCondition);

    const getValueDefault = data.items.map((item: any) => {
      if (item.name === conditionActive) {
        for (let i = 0; i < item.valueDefault.length; i++) {
          subOptions = [
            ...subOptions,
            {
              value: item.valueDefault[i],
              label: item.valueDefault[i],
            },
          ];
        }
      }
    });
    setSubItemOption(subOptions);

    const getOperator = data.items.map((item: any) => {
      if (item.name === conditionActive) {
        if (item.operator.length === 1) {
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
        } else if (item.operator.length > 1) {
          setOperatorActive(true);
          for (let i = 0; i < item.operator.length; i++) {
            for (
              let index = 0;
              index < item.operator[i].value.length;
              index++
            ) {
              operator = [
                ...operator,
                {
                  value: item.operator[i].value[index],
                  label: item.operator[i].value[index],
                },
              ];
            }
          }
        } else {
          setOperatorActive(false);
        }
      }
    });

    console.log("getValueDefault", operator);
    setOperatorOption(operator);
  }, [watchCondition, conditionActive]);

  return (
    <S.Container>
      <S.GroupBlock>
        <S.HeaderGroupBlock>
          Grupo 1 Quero Leads que atendam
          <S.SelectCondition>
            <Select
              name="allcondition"
              register={register}
              options={conditionsOptions}
            />
          </S.SelectCondition>
        </S.HeaderGroupBlock>
        <S.ContentCondition>
          <S.SelectContent>
            <Select name="condition" register={register} options={itemOption} />
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
              {operatorActive && (
                <S.SelectContent>
                  <Select
                    name="operator"
                    register={register}
                    options={operatorOption}
                  />
                </S.SelectContent>
              )}
            </>
          )}
        </S.ContentCondition>
      </S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
