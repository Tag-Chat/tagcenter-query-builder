import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

interface ContainerProps {
  withIcon: boolean;
  hasError: boolean;
  usePadding: boolean;
  withPaddingAdjustments?: boolean;
}
export const Container = styled.div`
  width: 100%;

  select {
    box-sizing: border-box;
    width: 100%;
    display: block;
    outline: none;
    resize: vertical;
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #05f282 10%),
      linear-gradient(-45deg, transparent 50%, #05f282 50%),
      radial-gradient(#ddd 0%, transparent 0%);
    background-position: calc(100% - 19px) calc(1em + 2px),
      calc(100% - 14px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 0px solid ${(props) => props.theme.primary300};
      -webkit-text-fill-color: ${(props) => props.theme.textSecondary};
      transition: background-color 5000s ease-in-out 0s;
    }

    background-color: ${(props) =>
      props.theme.name === "Dark" ? "#00000050" : "#FEFEFE"} !important;
    padding: 14px 14px 14px 7px;
    color: ${(props) => props.theme.textPrimary};
    border-radius: 0.188rem;
    font-size: 0.95rem;
    option {
      background: ${(props) =>
        props.theme.name === "Dark"
          ? lighten("0.1", "#000000")
          : darken("0.1", "#ffffff")};
    }

    border: 1px solid transparent;

    &:focus-within {
      border: ${(props) => `solid 1px  ${props.theme.primary300}`};
    }

    &:focus + label {
      color: ${(props) => props.theme.primary300} !important;
      pointer-events: none;
      font-size: 12px !important;
      font-weight: 600;
      top: 12px;
    }

    &:focus-within:nth-child(3) {
      color: ${(props) => props.theme.primary300};
    }

    &:not(:placeholder-shown) + label {
      color: ${(props) => props.theme.primary300};
      pointer-events: none;
      font-size: 12px;
    }
  }

  &:focus {
    svg {
      color: ${(props) => props.theme.primary300};
    }
  }
`;
