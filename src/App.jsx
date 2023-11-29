import { useState } from "react";
import Header from "./components/Header";
import Keys from "./components/Keys";
import Screen from "./components/Screen";


function App() {
  const [theme, setTheme] = useState()
  
  return (
    <div className="w-screen h-screen bg-primary-main-bg items-center flex-col justify-center">
      <main className="w-[440px] h-[575px] font-spartan p-[20px] border-[1px] border-primary-key-bg2 rounded-[5px] m-auto translate-y-24">
        <Header />
        <Screen />
        <Keys />
      </main>
    </div>
  );
}

export default App;
