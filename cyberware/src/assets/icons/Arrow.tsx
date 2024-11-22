import React from "react";

interface RightArrowIconProps {
  size?: number;
  color?: string;
}

export const RightArrowIcon: React.FC<RightArrowIconProps> = ({
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
        d="M29.6529 23.8334H7.33203V20.1667H29.6529L19.3862 9.90004L21.9987 7.33337L36.6654 22L21.9987 36.6667L19.3862 34.1L29.6529 23.8334Z"
        fill="white"
      />
    </svg>
  );
};
