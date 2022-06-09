import { darken, lighten } from "polished";
import styled from "styled-components";
import { pxToRem } from "../../../Styles/global";

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(56)};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    box-sizing: border-box;
    width: 100%;
    display: block;
    outline: none;
    resize: vertical;
    appearance: none;

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
`;
