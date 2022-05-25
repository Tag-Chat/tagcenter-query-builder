import React, { useMemo, useState } from "react";
import InputMask from "react-input-mask";

//libs
import { Controller } from "react-hook-form";

import { Container as DefaultContainer } from "./style";

//components
import DefaultLabel from "../Label";
import Error from "../Error";
import { useMask } from "../../../../Validation/Rules/InputMask";
import { InputProps } from "../../../../Validation/Protocols/TypeInputMaskProps";

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  validation,
  error,
  icon,
  iconPosition = "left",
  mask = "default",
  control,
  onKeyPress,
  customComponents,
  usePadding = true,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const { Container, Label } = useMemo(
    () => ({
      Container: customComponents?.container ?? DefaultContainer,
      Label: customComponents?.label ?? DefaultLabel,
    }),
    [customComponents]
  );

  return (
    <>
      <Container
        usePadding={usePadding}
        hasError={!!error}
        withIcon={type !== "password" && !!icon && iconPosition === "left"}
        iconToRight={type !== "password" && !!icon && iconPosition === "right"}
      >
        <Controller
          name={name}
          control={control}
          rules={validation}
          render={({ field: { onBlur, ref, onChange, value } }) => (
            <InputMask
              mask={mask}
              type={showPassword ? "text" : type ?? "text"}
              id={name}
              value={value ?? ""}
              onChange={onChange}
              onKeyPress={onKeyPress}
              onBlur={onBlur}
              inputRef={ref}
              placeholder=" "
              /**@ts-ignore */
              maskChar=""
              {...rest}
            />
          )}
        />

        {label && (
          <Label
            name={name}
            withIcon={type !== "password" && !!icon && iconPosition === "left"}
            label={label}
          />
        )}

        {/* Render Handle Icon */}
        {type !== "password" && icon && icon}
      </Container>

      {/* Render Error */}
      {error && <Error error={error} />}
    </>
  );
};

export default Input;
