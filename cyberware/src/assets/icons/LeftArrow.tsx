import React from "react";

interface LeftArrowIconProps {
  size?: number;
  color?: string;
}

export const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
  size = 40,
  //color = "black",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.3452 23.8333H36.666V20.1666H14.3452L24.6118 9.89998L21.9993 7.33331L7.33268 22L21.9993 36.6666L24.6118 34.1L14.3452 23.8333Z"
        fill="white"
      />
    </svg>
  );
};
