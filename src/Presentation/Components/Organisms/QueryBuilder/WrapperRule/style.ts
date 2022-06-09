import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentSelect = styled.div`
  min-width: ${pxToRem(250)};
  height: ${pxToRem(56)};

  margin-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const WrapperRule = styled.div`
  width: 100%;
  height: 68px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};

  padding: ${pxToRem(4)};
`;

export const ContentResponse = styled.div`
  width: 100%;
  height: ${pxToRem(56)};

  margin-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
