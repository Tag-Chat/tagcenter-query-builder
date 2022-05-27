import { FieldValues, UseFormRegister } from "react-hook-form";
import { ValueProps } from "../TypeQueryBuilderDataProps";

export interface SelectQueryProps {
  register: UseFormRegister<FieldValues>;
  options: ValueProps[];
}
