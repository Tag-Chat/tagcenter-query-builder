import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";
import { DeleteBin2 } from "@styled-icons/remix-line/";
import { DeleteDismiss } from "@styled-icons/fluentui-system-regular/";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};
  border-radius: ${pxToRem(4)};

  padding: 1rem;
`;

export const Rule = styled.form`
  width: 100%;
  border: ${pxToRem(1)} solid ${(props) => props.theme.primary300};

  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(16)};

  margin: ${pxToRem(8)};

  display: flex;
`;

export const RuleGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const RuleItem = styled.div`
  max-width: 200px;
  min-width: 200px;

  margin: 0 0.5rem;
  input,
  select {
    width: 100%;
  }
`;

export const ActionRule = styled.div`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  position: absolute;
  top: -1.4rem;
  right: -1.4rem;

  display: flex;
  flex-direction: column;
`;

export const IconDelete = styled(DeleteDismiss)`
  width: 15px;
  height: 15px;

  color: ${(props) => props.theme.red};
`;

export const ButtonAction = styled.button`
  width: 20px;
  height: 20px;

  background: ${(props) => props.theme.backgroundBody};
  border: 1px solid ${(props) => props.theme.primary300};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primary300};
    ${IconDelete} {
      color: ${(props) => props.theme.textDark};
    }
  }
`;

export const CombinerContent = styled.div`
  max-width: 200px;
  min-width: 200px;

  margin: 0 0.5rem;
  padding: 1rem 1.5rem;
  position: relative;

  select {
    width: 100%;
    border: 1px solid ${(props) => props.theme.primary300};
  }

  &::before {
    content: "";
    width: 1px;
    height: 25px;
    background: ${(props) => props.theme.primary300};
    display: block;
    position: absolute;
    left: 130px;
    top: -8px;
  }

  &::after {
    content: "";
    width: 1px;
    height: 25px;
    background: ${(props) => props.theme.primary300};
    display: block;
    position: absolute;
    left: 130px;
  }

  &:first-child {
    &::after,
    &::before {
      display: none;
    }
  }
`;
