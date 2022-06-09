import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(60)};

  border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.borderDivider};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  min-width: ${pxToRem(302)};
  font-size: ${pxToRem(14)};
  color: ${(props) => props.theme.primary300};

  margin: 0 1rem;
`;

export const ContainerSelect = styled.div`
  min-width: ${pxToRem(250)};
  height: ${pxToRem(60)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
