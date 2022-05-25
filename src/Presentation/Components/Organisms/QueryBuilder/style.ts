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

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderDivider};

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

  padding: 0 10px;
`;

export const SelectCondition = styled.div`
  width: ${pxToRem(200)};
  height: ${pxToRem(56)};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  div {
    padding: 0;
  }
`;

export const ContentCondition = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SelectContent = styled.div`
  min-width: ${pxToRem(200)};

  margin: 0 0.5rem;
`;
