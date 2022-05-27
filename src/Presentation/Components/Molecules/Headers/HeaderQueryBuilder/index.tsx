import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  SelectProps,
  HeaderQueryBuilderProps,
} from "../../../../../Validation/Protocols/TypeQueryBuilderDataProps";
import Select from "../../../Atoms/Select";

import * as S from "./style";

const HeaderQueryBuilder = ({ title }: HeaderQueryBuilderProps) => {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [conditionsOptions, setConditionsOptions] = useState<SelectProps[]>([
    {
      value: "e",
      label: "E",
    },
    {
      value: "ou",
      label: "OU",
    },
  ]);

  return (
    <S.HeaderGroupBlock>
      <S.TitleHeader>{title}</S.TitleHeader>
      <S.SelectCondition>
        <Select
          name="allcondition"
          register={register}
          options={conditionsOptions}
        />
      </S.SelectCondition>
    </S.HeaderGroupBlock>
  );
};

export default HeaderQueryBuilder;
