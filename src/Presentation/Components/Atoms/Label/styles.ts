import styled from "styled-components";

interface LabelContainerProps {
  withIcon?: boolean;
  isAbsolute?: boolean;
}
export const LabelContainer = styled.label<LabelContainerProps>`
  display: block;
  font-size: 0.9rem;
  color: ${(props) =>
    props.isAbsolute ? props.theme.textSecondary : props.theme.textPrimary};
  transition: all 0.1s ease-in-out;
  letter-spacing: 0.05rem;
  font-weight: 600;
  cursor: text;

  ${(props) =>
    props.isAbsolute
      ? `
    position: absolute;
    top: 16px;
    white-space: nowrap;2
    left: ${props.withIcon ? "36px" : "14px"};
  `
      : `
    padding-bottom: .2rem;

  `}
`;
