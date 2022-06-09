import { InputHTMLAttributes, ReactElement } from "react";
import { Control, FieldValues, RegisterOptions } from "react-hook-form";

export type ITypeMask =
  | "default"
  | "extended_phone"
  | "cep"
  | "cpf"
  | "cnpj"
  | "link"
  | "hour"
  | "date"
  | "cpfCnpj";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: "text" | "password" | "email" | "number" | "hidden" | "checkbox";
  validation?: RegisterOptions;
  error?: string;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
  mask?: ITypeMask;
  control?: Control<FieldValues, object>;
  onKeyPress?: (e: any) => void;
  customComponents?: {
    container?: any;
    label?: any;
  };
  usePadding?: boolean;
}
