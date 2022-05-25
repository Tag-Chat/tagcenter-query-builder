import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { queryBuilderData } from "../../../../Data";
import { TypeQueryBuilderDataProps } from "../../../../Validation/Protocols/TypeQueryBuilderDataProps";

import Input from "../../Atoms/Input";

import * as S from "./style";

const QueryBuilder = () => {
  const [data, setData] = useState(queryBuilderData);

  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <S.Container>
      <S.GroupBlock>{console.log("data", data)}</S.GroupBlock>
    </S.Container>
  );
};

export default QueryBuilder;
