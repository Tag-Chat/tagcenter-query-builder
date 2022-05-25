import styled, { css } from "styled-components";
import { lighten, transparentize } from "polished";
import { pxToRem } from "@/styles/global";
// import { Row, BasicButton } from "@/styles/components";

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  line-height: 20px;
`;

interface ContainerProps {
  disabled?: boolean;
  isLoading?: boolean;
}

export const Container = styled.div<ContainerProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  width: 100%;
  position: relative;
  button {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

    &.sm {
      font-size: 0.8rem;
      padding: 1rem 0.375rem;
      height: 30px;
      svg {
        font-size: ${pxToRem(22)} !important;
      }
    }
    &.md {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      height: 45px;
      svg {
        font-size: ${pxToRem(22)} !important;
      }
    }
    &.lg {
      font-size: 1rem;
      padding: 1rem 2rem;
      svg {
        font-size: ${pxToRem(22)} !important;
      }
    }

    border: 0;
    width: 100%;
    letter-spacing: 0.05rem;
    font-family: "Nunito", sans-serif;
    border-radius: 0.188rem;
    transition: background 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-weight: 600;

    justify-content: center;

    &.red {
      background: ${(props) => props.theme.darkRed};

      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => lighten("0.1", props.theme.darkRed)};
      }
    }

    &.borderRed {
      background: ${(props) =>
        props.theme.name === "Dark"
          ? "#00000050"
          : `${props.theme.darkRed}`} !important;
      border: 1px solid ${(props) => props.theme.darkRed};

      color: ${(props) => props.theme.textRedButtons};

      &:hover {
        background: ${(props) =>
          props.theme.name === "Dark"
            ? `${props.theme.darkRed}10`
            : `${props.theme.darkRed}`} !important;
      }
    }

    &.borderOrange {
      background: transparent;
      border: 1px solid ${(props) => props.theme.orange};

      color: ${(props) => props.theme.orange};

      &:hover {
        background: ${(props) => transparentize("0.8", props.theme.orange)};
      }
    }

    &.borderPrimary {
      background: ${(props) =>
        props.theme.name === "Dark" ? "#00000050" : "#14A18B"} !important;
      border: 1px solid ${(props) => props.theme.primary300};

      color: ${(props) => props.theme.textButtons};

      &:hover {
        background: ${(props) =>
          props.theme.name === "Dark" ? "#36EB7E10" : "#62C0B2"} !important;

        color: ${(props) => props.theme.textButtonsHover};
      }
    }

    &.borderPrimaryDrawer {
      background: ${(props) =>
        props.theme.name === "Dark" ? "#00000050" : "#14A18B"} !important;
      border: 1px solid ${(props) => props.theme.primary300};
      margin-top: auto;
      margin-bottom: 24px;

      color: ${(props) => props.theme.textButtons};

      &:hover {
        background: ${(props) =>
          props.theme.name === "Dark" ? "#36EB7E10" : "#62C0B2"} !important;

        color: ${(props) => props.theme.textButtonsHover};
      }
    }

    &.borderDisabled {
      background: transparent;
      border: 1px solid ${(props) => props.theme.textSecondary};

      color: ${(props) => props.theme.textSecondary};

      cursor: not-allowed;
    }

    &.noBorder {
      background: transparent;
      border: none;
      transition: color 0.1s ease-in-out;
      color: ${(props) => props.theme.textSecondary};
      cursor: ${(props) => (props.disabled ? "default" : "pointer")};

      &:hover {
        color: ${(props) => props.theme.textPrimary};
      }
    }

    &.facebook {
      background: transparent;
      border: 1px solid ${(props) => "#0061eb"};

      color: ${(props) => "#0061eb"};

      &:hover {
        background: ${(props) => transparentize("0.8", "#0061eb")};
      }
    }

    &.borderWhite {
      background: transparent;
      border: 1px solid ${(props) => props.theme.textSecondary};

      color: ${(props) => props.theme.textSecondary};

      &:hover {
        background: ${(props) =>
          transparentize("0.8", props.theme.textSecondary)};
      }
    }

    &.primary {
      background: ${(props) =>
        `linear-gradient(90deg, ${props.theme.primary300}, ${props.theme.primary900}, ${props.theme.primary300})`};

      color: ${(props) => props.theme.white};

      background-size: 190%;
      &:hover {
        background-position: right;
      }
    }

    &.secondary {
      background: ${(props) => props.theme.primary300};
      color: ${(props) => props.theme.primary300};

      &:hover {
        background: ${(props) => lighten("0.1", props.theme.primary300)};
      }
    }

    &.border {
      background: transparent;
      border: solid 1px ${(props) => props.theme.primary300};
      color: ${(props) => props.theme.primary300};
      font-size: 14px;
      letter-spacing: normal;
      height: 56px;

      &:hover {
        background: ${(props) => props.theme.primary300};
        color: ${(props) => props.theme.backgroundCard};
      }
    }

    &.cancel {
      background: transparent;
      color: ${(props) => props.theme.primary300};

      &:hover {
        background: ${(props) =>
          transparentize("0.95", props.theme.primary300)};
      }
    }

    &.notAllowed {
      cursor: not-allowed;
    }

    ${({ isLoading }) =>
      isLoading &&
      css`
        opacity: 0;
        pointer-events: none;
        cursor: not-allowed !important;
      `}
  }
`;

export const MensagenWait = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.primary300};
  margin-top: -20px;
`;
