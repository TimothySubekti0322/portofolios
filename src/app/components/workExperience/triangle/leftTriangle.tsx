import React from "react";

interface LeftTriangleProps {
  size: number;
}

const LeftTriangle: React.FC<LeftTriangleProps> = ({ size }) => {
  return (
    <div
      className={`w-0 h-0 border-t-transparent border-b-transparent border-[#313A54]`}
      style={{
        borderTopWidth: size,
        borderBottomWidth: size,
        borderRightWidth: size,
      }}
    ></div>
  );
};

export default LeftTriangle;
