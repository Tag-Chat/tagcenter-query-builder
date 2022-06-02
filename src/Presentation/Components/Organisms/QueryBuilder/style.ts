import styled from "styled-components";
import { pxToRem } from "../../../Styles/global";

import { RemoveCircleOutline } from "@styled-icons/material/";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const GroupBlock = styled.div`
  min-width: 98%;

  display: flex;
  flex-direction: column;
`;

export const HeaderGroupBlock = styled.div`
  width: 100%;
  height: ${pxToRem(56)};

  color: ${(props) => props.theme.primary300};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleHeader = styled.div`
  min-width: ${pxToRem(293)};

  margin-left: ${pxToRem(10)};
`;

export const SelectCondition = styled.div`
  max-width: ${pxToRem(220)};
  min-width: ${pxToRem(220)};
  height: ${pxToRem(56)};

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 0;
  }
`;

export const ContentCondition = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SelectContent = styled.div`
  max-width: ${pxToRem(220)};
  min-width: ${pxToRem(220)};
  height: ${pxToRem(47)};

  margin: ${pxToRem(8)};
`;

export const GroupAction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: ${pxToRem(8)};
`;

export const ContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  max-width: ${pxToRem(220)};
  min-width: ${pxToRem(220)};
  height: 47px;

  margin: 0.5rem;

  input {
    height: 47px;
  }
`;

export const ContentContainerAction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ActionMoreOptions = styled.div`
  width: 100%;
`;

export const TesteAction = styled.div`
  width: calc(100% - 1rem);
  height: ${pxToRem(47)};

  margin: 0 auto;

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding-left: 0.5rem;
`;

export const WrapperGroup = styled.div`
  width: 100%;
  border: ${pxToRem(1)} solid ${(props) => props.theme.primary300};

  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(16)};

  margin: ${pxToRem(8)};

  position: relative;
`;

export const IconDelete = styled(RemoveCircleOutline)`
  color: ${(props) => props.theme.red};

  width: 21px;
  height: 21px;

  &:hover {
    color: ${(props) => props.theme.textPrimary};
  }
`;

interface ActionDeleteProps {
  visible?: boolean;
}
export const ActionDelete = styled.div<ActionDeleteProps>`
  position: absolute;

  background: ${(props) => props.theme.backgroundCard2};
  border: ${pxToRem(1)} solid ${(props) => props.theme.primary300};

  display: ${(props) => (props?.visible === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;

  border-radius: 8px;

  top: -5px;
  right: -5px;

  cursor: pointer;
`;
