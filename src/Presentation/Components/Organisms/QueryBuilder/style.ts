import styled from "styled-components";
import { pxToRem } from "../../../Styles/global";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const GroupBlock = styled.div`
  min-width: ${pxToRem(768)};
  min-height: ${pxToRem(200)};

  background: ${(props) => props.theme.backgroundCard};
  border: ${pxToRem(1)} solid ${(props) => props.theme.borderDivider};

  margin: ${pxToRem(10)} 0;
`;
