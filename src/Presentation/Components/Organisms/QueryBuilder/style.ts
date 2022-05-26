import styled from "styled-components";
import { pxToRem } from "../../../Styles/global";

export const Container = styled.div`
  width: 100vw;

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

  margin-left: 10px;
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
  align-items: center;

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};
`;

export const SelectContent = styled.div`
  max-width: ${pxToRem(220)};
  min-width: ${pxToRem(220)};
  height: 56px;

  margin: 0.5rem;
`;

export const GroupAction = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 10px;
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
