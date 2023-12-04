import React from "react";

const Screen = ({input, output}) => {
  return (
    <div className="w-[400px] rounded-[5px] mt-[15px] mb-[13px] bg-primary-screen-bg overflow-x-auto">
      <p className="h-[25px] text-[20px] text-primary-output px-[20px] mt-[20px] text-right">
        {output.length && output}
      </p>
      <p className="text-[45px] text-primary-screen px-[20px] py-0 text-right">
        {input.length && input}
      </p>
    </div>
  );
};

export default Screen;
