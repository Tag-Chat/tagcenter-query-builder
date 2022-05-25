import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useTheme } from "../../../providers/Themes";

type LoadingProps = {
  duration?: number;
  type?: string;
  size?: number;
  color?: string;
};

const Loading: React.FC<LoadingProps> = ({ size = 56, color }) => {
  const { theme } = useTheme();
  const finalColor = !!color ? color : theme.primary300;

  return <ThreeDots color={finalColor} height={size} width={size} />;
};

export default Loading;
