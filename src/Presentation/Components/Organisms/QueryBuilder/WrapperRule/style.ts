import styled from "styled-components";
import { pxToRem } from "../../../../Styles/global";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
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
  margin: 0.5rem 0;
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

export const ContentButton = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 0.5rem;
`;

export const WrapperCondition = styled.div`
  width: 100%;
  height: 68px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: ${pxToRem(4)};
  margin: 0.5rem 0;
`;

export const ContentConditionSelect = styled.div`
  min-width: ${pxToRem(250)};
  height: ${pxToRem(56)};

  margin-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border: ${pxToRem(1)} solid ${(props) => props.theme.borderLine};
`;
