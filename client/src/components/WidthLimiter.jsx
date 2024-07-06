import React from "react";

const WidthLimiter = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-[1550px] items-center justify-between border sm:border-red-500 md:border-orange-400 lg:border-blue-600 xl:border-purple-600 2xl:border-amber-600">
      {children}
    </div>
  );
};

export default WidthLimiter;
