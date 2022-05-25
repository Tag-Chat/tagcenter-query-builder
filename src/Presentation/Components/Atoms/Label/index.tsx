import { LabelContainer } from "./styles";

interface LabelProps {
  label: string;
  name: string;
  withIcon?: boolean;
  isAbsolute?: boolean;
}
const Label: React.FC<LabelProps> = ({
  label,
  withIcon,
  name,
  isAbsolute = true,
}) => {
  return (
    <LabelContainer isAbsolute={isAbsolute} htmlFor={name} withIcon={withIcon}>
      {label}
    </LabelContainer>
  );
};

export default Label;
