import React, { useCallback, useEffect, useMemo, useState } from "react";

import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import {
  RegisterOptions,
  FieldValues,
  Controller,
  Control,
} from "react-hook-form";
import Error from "../Error";

import * as S from "./style";

interface DataTimeProps {
  title: string;
  place?: string;
  name: string;
  control?: Control<FieldValues, object>;
  validation?: RegisterOptions;
  error?: string;
  resetValue?: boolean;
  dateFormat?: any;
  timeFormat?: any;
}

const DataTime: React.FC<DataTimeProps> = ({
  title,
  place,
  name,
  control,
  validation,
  error,
  resetValue,
  dateFormat,
  timeFormat,
}) => {
  const [reseted, setReseted] = useState(false);

  const inputProps: React.HTMLProps<HTMLInputElement> = {
    placeholder: "00-00-00",
    name,
    autoComplete: "off",
  };

  const dateField = useCallback(
    ({ field: { onBlur, ref, onChange, value } }: any) => {
      if (!control) return <></>;
      const props = { ...inputProps, onBlur };
      if (reseted) {
        props.value = "";
      }
      return (
        <>
          <Datetime
            ref={ref}
            onChange={(...e) => {
              setReseted(false);
              onChange?.(...e);
            }}
            dateFormat={dateFormat}
            timeFormat={timeFormat}
            locale={"pt-BR"}
            value={value}
            inputProps={props}
            closeOnClickOutside={true}
          />
        </>
      );
    },
    [reseted, control]
  );

  useEffect(() => {
    if (resetValue) {
      setReseted(true);
    }
  }, [resetValue]);

  return (
    <S.Wrapper error={!!error}>
      <S.Container>
        <S.Title>{title}:</S.Title>
        {control ? (
          <Controller
            name={name}
            control={control}
            rules={validation}
            render={dateField}
          />
        ) : (
          <Datetime locale={"pt-BR"} inputProps={inputProps} />
        )}
      </S.Container>
      {error && <Error error={error} />}
    </S.Wrapper>
  );
};

export default DataTime;
