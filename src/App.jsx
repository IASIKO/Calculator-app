import Header from "./components/Header";
import Keys from "./components/Keys";
import Screen from "./components/Screen";

function App() {
  const onOne = () => {};
  const onTwo = () => {};
  const onThree = () => {};
  const onFour = () => {};
  const onFive = () => {};
  const onSix = () => {};
  const onSeven = () => {};
  const onEight = () => {};
  const onNine = () => {};
  const onZero = () => {};
  const onDelete = () => {};
  const onReset = () => {};
  const onPlus = () => {};
  const onMinus = () => {};
  const onTimes = () => {};
  const onDivision = () => {};
  const onEquals = () => {};
  const onDot = () => {};


  return (
    <div className="w-screen h-screen bg-primary-main-bg items-center flex-col justify-center">
      <main className="w-[440px] h-[575px] font-spartan p-[20px] border-[1px] border-primary-key-bg2 rounded-[5px] m-auto translate-y-14">
        <Header />
        <Screen />
        <Keys
          onOne={onOne}
          onTwo={onTwo}
          onThree={onThree}
          onFour={onFour}
          onFive={onFive}
          onSix={onSix}
          onSeven={onSeven}
          onEight={onEight}
          onNine={onNine}
          onZero={onZero}
          onDelete={onDelete}
          onReset={onReset}
          onPlus={onPlus}
          onMinus={onMinus}
          onTimes={onTimes}
          onDivision={onDivision}
          onEquals={onEquals}
          onDot={onDot}
        />
      </main>
    </div>
  );
}

export default App;
