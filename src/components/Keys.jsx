import React from "react";

const Keys = ({
  onOne,
  onTwo,
  onThree,
  onFour,
  onFive,
  onSix,
  onSeven,
  onEight,
  onNine,
  onZero,
  onDelete,
  onReset,
  onPlus,
  onMinus,
  onTimes,
  onDivision,
  onEquals,
  onDot,
}) => {
  return (
    <div className="w-[400px] h-[360px] rounded-[5px] bg-primary-keypad-toggle-bg p-[20px] grid grid-cols-4 gap-[20px]">
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onSeven}
      >
        7
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onEight}
      >
        8
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onNine}
      >
        9
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg2 shadow-[0_4px_0] shadow-primary-key-shadow2  text-[23px]  text-primary-screen hover:bg-primary-hover2 hover:shadow-primary-hover-bg2 transition-all duration-[200ms]"
        onClick={onDelete}
      >
        DEL
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onFour}
      >
        4
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onFive}
      >
        5
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onSix}
      >
        6
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onPlus}
      >
        &#43;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onOne}
      >
        1
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onTwo}
      >
        2
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onThree}
      >
        3
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onMinus}
      >
        &#8722;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onDot}
      >
        &#8901;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onZero}
      >
        0
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onDivision}
      >
        &#247;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        onClick={onTimes}
      >
        &#215;
      </button>
      <button
        className="col-[1/3] rounded-[8px] bg-primary-key-bg2 shadow-[0_4px_0] shadow-primary-key-shadow2 text-[23px] text-primary-screen hover:bg-primary-hover2 hover:shadow-primary-hover-bg2 transition-all duration-[200ms]"
        onClick={onReset}
      >
        RESET
      </button>
      <button
        className="col-[3/-1] rounded-[8px] bg-primary-key-bg3-toggle shadow-[0_4px_0] shadow-primary-key-shadow3 text-[32px]  text-primary-screen hover:bg-primary-hover3 hover:shadow-primary-hover-bg3 transition-all duration-[200ms]"
        onClick={onEquals}
      >
        &#61;
      </button>
    </div>
  );
};

export default Keys;
