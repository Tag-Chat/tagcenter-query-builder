import { useCore } from "../../../Hooks/Context";
import { MouseEventHandler, useMemo } from "react";
import { DefaultTheme } from "styled-components";
import Load from "../Loading";
import * as S from "./styles";

type ButtonColorListType = {
  [K in ButtonStyle]?: (theme: any) => string;
};

type ButtonStyle =
  | "primary"
  | "borderOrange"
  | "secondary"
  | "border"
  | "cancel"
  | "cancel notAllowed"
  | "red"
  | "borderRed"
  | "borderPrimary"
  | "borderWhite"
  | "borderDisabled"
  | "noBorder"
  | "facebook";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: "submit" | "button" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  IsLoading?: boolean;
  styleButton?: ButtonStyle;
  maxWidth?: string;
  sizeButton?: "sm" | "md" | "lg";
  spacing?: string;
  disable?: boolean;
  text?: string;
}

const buttonColorList: ButtonColorListType = {
  primary: (theme: DefaultTheme) => theme.white,
  borderOrange: (theme: DefaultTheme) => theme.orange,
  secondary: (theme: DefaultTheme) => theme.primary300,
  border: (theme: DefaultTheme) => theme.primary300,
  cancel: (theme: DefaultTheme) => theme.primary300,
  red: (theme: DefaultTheme) => theme.white,
  borderRed: (theme: DefaultTheme) => theme.textRedButtons,
  borderPrimary: (theme: DefaultTheme) =>
    theme.name === "Dark" ? theme.textButtons : "#14A18B",
  borderWhite: (theme: DefaultTheme) => theme.textSecondary,
  borderDisabled: (theme: DefaultTheme) => theme.textSecondary,
  noBorder: (theme: DefaultTheme) => theme.textSecondary,
  facebook: () => "#0061eb",
};

export const Button: React.FC<ButtonProps> = ({
  type = "submit",
  children,
  onClick,
  IsLoading,
  styleButton = "borderPrimary",
  maxWidth,
  sizeButton = "md",
  spacing,
  text,
  disable = false,
  ...rest
}) => {
  const { theme, isDark } = useCore();

  const loadingColor: string = useMemo(
    () => buttonColorList[styleButton]?.(theme) ?? "",
    [theme, styleButton]
  );

  return (
    <>
      <S.Container
        disabled={disable}
        style={{ maxWidth: maxWidth, margin: spacing }}
        isLoading={IsLoading}
      >
        {IsLoading ? (
          <S.Loading style={{ maxWidth: maxWidth, margin: spacing }}>
            <Load size={60} color={loadingColor ? loadingColor : ""} />
            <S.MensagenWait>{text}</S.MensagenWait>
          </S.Loading>
        ) : (
          <></>
        )}
        <button
          disabled={disable}
          className={`${styleButton} ${sizeButton}`}
          onClick={onClick}
          type={type}
          {...rest}
        >
          {children}
        </button>
      </S.Container>
    </>
  );
};
