import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";

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
