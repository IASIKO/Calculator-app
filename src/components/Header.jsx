import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.body.classList.remove(...document.body.classList);
    if (theme.length) {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return (
    <header className="w-[400px] h-[36px] flex justify-between text-primary-screen max-mobile:w-[313.5px]">
      <p className="text-[37px]">Calc</p>
      <div className="flex items-end gap-[15px]">
        <p className="text-[16px]">THEME</p>
        <div className="w-[60px] m-1">
          <div className="w-[60px] h-[18px] flex justify-center gap-[10px] mb-1">
            <button
              className="cursor-pointer text-[18px] transition-all hover:text-primary-key-bg3-toggle"
              onClick={() => setTheme("")}
            >
              1
            </button>
            <button
              className="cursor-pointer text-[18px] transition-all hover:text-primary-key-bg3-toggle"
              onClick={() => setTheme("white")}
            >
              2
            </button>
            <button
              className="cursor-pointer text-[18px] transition-all hover:text-primary-key-bg3-toggle"
              onClick={() => setTheme("purple")}
            >
              3
            </button>
          </div>
          <div
            className={`w-[60px] h-[18px] bg-primary-keypad-toggle-bg rounded-[50px] px-[8%] flex items-center ${
              (theme == "white" && "justify-center") ||
              (theme == "purple" && "justify-end")
            }`}
          >
            <div className="w-[13px] h-[13px]  rounded-[50%] bg-primary-key-bg3-toggle transition-[all, .3s]"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
