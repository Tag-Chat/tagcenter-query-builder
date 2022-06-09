import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 1rem;
`;

export const QueryBuilder = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background: ${(props) => props.theme.backgroundCard};
`;
