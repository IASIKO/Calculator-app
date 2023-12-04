import React from "react";

const Screen = ({ input, output }) => {
  return (
    <div className="w-[400px] h-[110px] rounded-[5px] mt-[15px] mb-[13px] bg-primary-screen-bg">
      <p className="h-[25px] text-[20px] text-primary-output px-[20px] pt-[10px] mt-[20px] text-right">
        {output.length ? output : null}
      </p>
      <p className="text-[45px] text-primary-screen px-[20px] pt-[10px] text-right overflow-x-auto">
        {input.length ? input : null}
      </p>
    </div>
  );
};

export default Screen;
