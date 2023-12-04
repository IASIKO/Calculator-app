import React from "react";

const Keys = ({ onDelete, onReset, onEquals, handleClick}) => {
  return (
    <div className="w-[400px] h-[360px] rounded-[5px] bg-primary-keypad-toggle-bg p-[20px] grid grid-cols-4 gap-[20px]">
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="7"
        onClick={handleClick}
      >
        7
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="8"
        onClick={handleClick}
      >
        8
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="9"
        onClick={handleClick}
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
        name="4"
        onClick={handleClick}
      >
        4
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="5"
        onClick={handleClick}
      >
        5
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="6"
        onClick={handleClick}
      >
        6
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="+"
        onClick={handleClick}
      >
        &#43;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="1"
        onClick={handleClick}
      >
        1
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="2"
        onClick={handleClick}
      >
        2
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="3"
        onClick={handleClick}
      >
        3
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="-"
        onClick={handleClick}
      >
        &#8722;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="."
        onClick={handleClick}
      >
        &#8901;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="0"
        onClick={handleClick}
      >
        0
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="/"
        onClick={handleClick}
      >
        &#247;
      </button>
      <button
        className="rounded-[8px] bg-primary-key-bg-main shadow-[0_4px_0] shadow-primary-key-shadow-main text-[32px] hover:bg-primary-hover1 hover:shadow-primary-hover-bg1 transition-all duration-[200ms]"
        name="*"
        onClick={handleClick}
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
