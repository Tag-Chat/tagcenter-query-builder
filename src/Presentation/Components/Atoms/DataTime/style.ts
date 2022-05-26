import { pxToRem } from "../../../Styles/global";
import styled, { css } from "styled-components";
import { CalendarCheckFill } from "@styled-icons/bootstrap/";

export const Wrapper = styled.div<{ error?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ error }) =>
    !error
      ? css`
          margin-bottom: 1rem;
        `
      : ""}
`;

export const CalendarCheckFillIcon = styled(CalendarCheckFill)``;

export const Container = styled.div`
  width: 100%;
  height: 50px;

  background: ${(props) => props.theme.backgroundInputFormV2};
  background-image: url("/icons/calendar.svg");
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 15% 30%;

  display: flex;
  align-items: center;

  .rdt {
    width: 80%;
    input {
      width: 100%;

      background: transparent;
      border: none;

      color: ${(props) => props.theme.primary300};

      font-size: ${pxToRem(14)};
      font-weight: 600;

      padding-left: 0.5rem;

      outline: none;
    }

    .rdtPicker {
      width: 100%;

      background: ${(props) => props.theme.backgroundBody};
      color: ${(props) => props.theme.textPrimary};
      border: none;

      right: 0;

      font-size: ${pxToRem(14)};

      border-radius: ${pxToRem(8)};

      th {
        border-bottom: 1px solid ${(props) => props.theme.primary300};
      }

      .rdtNext,
      .rdtPrev,
      .rdtSwitch,
      .rdtTimeToggle,
      .rdtBtn,
      .rdtCount {
        color: ${(props) => props.theme.primary300};
        &:hover {
          background: ${(props) => props.theme.primary300};
          color: #000;
        }
      }

      .rdtDay {
        width: 32px;
        height: 32px;

        &:hover {
          background: ${(props) => props.theme.primary300};
          color: #000;
        }
      }

      .rdtActive {
        background: ${(props) => props.theme.primary300};
        color: #000;

        border-radius: 50%;

        &::before {
          display: none;
        }
      }
    }
  }
`;

export const Title = styled.div`
  width: 20%;

  font-size: 0.9rem;
  font-weight: 600;

  letter-spacing: 0.05rem;
  font-weight: 600;
  cursor: text;

  padding-left: 0.5rem;

  color: ${(props) => props.theme.textSecondary};
`;
