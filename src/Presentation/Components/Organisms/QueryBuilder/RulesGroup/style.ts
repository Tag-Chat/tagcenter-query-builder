import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";
import { DeleteDismiss } from "@styled-icons/fluentui-system-regular/";

export const Container = styled.div`
  width: 100%;
  height: auto;

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 1rem;
`;

export const Rule = styled.form`
  width: 100%;
  border: ${pxToRem(1)} solid ${(props) => props.theme.primary300};

  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(16)};

  display: flex;
`;

export const RuleGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;

export const RuleItem = styled.div`
  max-width: ${pxToRem(200)};
  min-width: ${pxToRem(200)};

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
  width: ${pxToRem(15)};
  height: ${pxToRem(15)};

  color: ${(props) => props.theme.red};
`;

export const ButtonAction = styled.button`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  background: ${(props) => props.theme.backgroundBody};
  border: 1px solid ${(props) => props.theme.darkRed};
  border-radius: ${pxToRem(4)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.3s;

  ${IconDelete} {
    color: ${(props) => props.theme.darkRed};
  }

  &:hover {
    background: ${(props) => props.theme.red};
    border: 1px solid ${(props) => props.theme.darkRed};
    ${IconDelete} {
      color: ${(props) => props.theme.textPrimary};
    }
  }
`;

interface CombinerContentProps {
  active?: boolean;
}

export const CombinerContent = styled.div<CombinerContentProps>`
  width: 100%;

  margin: 0.5rem 0;
  padding: 1rem 0;
  position: relative;

  display: ${(props) => (props.active ? "flex" : "none")};

  select {
    max-width: 200px;
    min-width: 200px;

    border: 1px solid ${(props) => props.theme.primary300};
  }

  /**
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
  */

  &:first-child {
    display: none;
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const ContainerButtonAddCondition = styled.div`
  width: 100%;
  height: auto;

  padding: 1rem 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
