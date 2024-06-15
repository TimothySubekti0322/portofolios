import React from "react";

interface RightTriangleProps {
  size: number;
}

const RightTriangle: React.FC<RightTriangleProps> = ({ size }) => {
  return (
    <div
      className={`w-0 h-0 border-t-transparent border-b-transparent dark:border-t-transparent dark:border-b-transparent dark:border-[#313A54] border-[#cecfdb]`}
      style={{
        borderTopWidth: size,
        borderBottomWidth: size,
        borderLeftWidth: size,
      }}
    ></div>
  );
};

export default RightTriangle;
