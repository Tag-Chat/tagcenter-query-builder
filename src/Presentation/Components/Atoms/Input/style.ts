import styled from "styled-components";

export interface ContainerProps {
  withIcon: boolean;
  hasError: boolean;
  usePadding: boolean;
  iconToRight: boolean;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;

  ${(props) =>
    props.usePadding &&
    `
			padding-bottom: ${props.hasError ? ".2rem" : "1rem"};
	`}

  label {
    padding-left: 10px;
  }
  input:disabled {
    color: ${(props) => props.theme.textSecondary};
  }

  input {
    box-sizing: border-box;
    width: 100%;
    display: block;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: ${(props) => `solid 1px  ${props.theme.primary300}`};
      -webkit-text-fill-color: ${(props) => props.theme.textSecondary};
      transition: background-color 5000s ease-in-out 0s;
    }

    background: ${(props) => props.theme.backgroundInputFormV2};
    height: 54px;
    padding: ${(props) =>
      props.withIcon ? "14px 14px 0 36px" : "14px 14px 0 14px"};
    color: ${(props) => props.theme.textPrimary};
    border-radius: 0.188rem;
    font-size: 0.95rem;

    border: 1px solid
      ${(props) => (props.hasError ? `${props.theme.errorRed}` : "transparent")};

    &:focus-within {
      border: ${(props) => `solid 1px  ${props.theme.primary300}`};
    }

    &:focus + label {
      color: ${(props) => props.theme.primary300};
      pointer-events: none;
      top: 6px;
      font-size: 12px;
      font-weight: 600;
    }

    &:focus-within:nth-child(3) {
      color: ${(props) => props.theme.primary300};
    }

    &:not(:placeholder-shown) + label {
      color: ${(props) => props.theme.primary300};
      pointer-events: none;
      top: 6px;
      font-size: 12px;
    }
  }

  input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    margin: 0;
  }

  svg {
    position: absolute;
    top: 18px;
    left: 10px;
    width: 20px;
    color: ${(props) => props.theme.textSecondary};

    &.password ${({ iconToRight }) => (iconToRight ? ", &" : "")} {
      top: 18px;
      left: auto;
      right: 16px;
      cursor: pointer;
      transition: color 0.1s ease-in-out;

      &:hover {
        color: ${(props) => props.theme.primary300};
      }
    }
  }

  &:focus {
    svg {
      color: ${(props) => props.theme.primary300};
    }
  }
`;
