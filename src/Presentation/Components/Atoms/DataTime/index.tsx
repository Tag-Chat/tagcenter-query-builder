import React, { useCallback, useEffect, useMemo, useState } from "react";

import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { RegisterOptions } from "react-hook-form";
import Error from "../Error";

import * as S from "./style";

interface DataTimeProps {
  title: string;
  place?: string;
  name: string;
  validation?: RegisterOptions;
  error?: string;
  resetValue?: boolean;
  dateFormat?: any;
  timeFormat?: any;
  onChange?: (e: any) => void;
}

export const DataTime: React.FC<DataTimeProps> = ({
  title,
  name,
  error,
  resetValue,
  onChange,
}) => {
  const [reseted, setReseted] = useState(false);

  const inputProps: React.HTMLProps<HTMLInputElement> = {
    placeholder: "00-00-00",
    name,
    autoComplete: "off",
  };

  useEffect(() => {
    if (resetValue) {
      setReseted(true);
    }
  }, [resetValue]);

  return (
    <S.Wrapper error={!!error}>
      <S.Container>
        <S.Title>{title}:</S.Title>
        <Datetime
          locale={"pt-BR"}
          dateFormat="DD-MM-YYYY"
          timeFormat={false}
          inputProps={inputProps}
          onChange={onChange}
        />
      </S.Container>
      {error && <Error error={error} />}
    </S.Wrapper>
  );
};
