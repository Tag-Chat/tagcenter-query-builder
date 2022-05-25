import { InputHTMLAttributes, ReactNode } from "react";

//libs
import { RegisterOptions, UseFormRegister, FieldValues } from "react-hook-form";

//styles
import { Container } from "./styles";

//components
import Label from "../Label";
import Error from "../Error";

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  validation?: RegisterOptions;
  register: UseFormRegister<FieldValues>;
  error?: string;
  icon?: ReactNode;
  emptyValueName?: string;
  options: {
    value: any;
    label: string;
  }[];
  usePadding?: boolean;
  withPaddingAdjustments?: boolean;
  isTooltip?: boolean;
  tooltip?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  validation,
  register,
  error,
  icon,
  emptyValueName,
  options,
  withPaddingAdjustments,
  usePadding = true,

  ...rest
}) => {
  return (
    <>
      <Container
        usePadding={usePadding}
        hasError={!!error}
        withIcon={!!icon}
        withPaddingAdjustments={withPaddingAdjustments}
      >
        <select
          {...rest}
          id={name}
          placeholder=" "
          {...register(name, {
            ...validation,
          })}
        >
          <option value="">{emptyValueName ?? `Selecione`}</option>
          {options &&
            options.map((option, index) => (
              <option key={`${option.value}+${index}`} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>

        {label && <Label name={name} withIcon={!!icon} label={label} />}

        {icon && icon}
      </Container>

      {error && <Error error={error} />}
    </>
  );
};

export default Select;
