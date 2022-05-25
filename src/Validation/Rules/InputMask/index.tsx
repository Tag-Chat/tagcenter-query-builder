import { ITypeMask } from "../../Protocols/TypeInputMaskProps";

export function useMask(inputValue: string | null, typeMask: ITypeMask | null) {
  if (typeMask === "default") {
    return "";
  }
}
