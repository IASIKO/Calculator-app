import { useState } from "react";
import Header from "./components/Header";
import Keys from "./components/Keys";
import Screen from "./components/Screen";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");

  const handleClick = (e) => {
    const buttonName = e.target.name;

    if (isNaN(buttonName)) {
      if (input) {
        // If an operator button is clicked
        if (selectedOperator && selectedOperator !== buttonName) {
          // If a different operator is already selected, update the selected operator
          setSelectedOperator(buttonName);
          setInput(input.slice(0, -1).concat(buttonName));
        } else if (!selectedOperator) {
          // Otherwise, select the operator and append it to the input
          setSelectedOperator(buttonName);
          setInput(input.concat(buttonName));
        }
      }
    } else {
      // If a number button is clicked
      if (selectedOperator) {
        // If an operator is already selected, append the number to the input after the operator
        if (input.slice(-1) === selectedOperator) {
          setInput(input.concat(buttonName));
          setOutput(math.evaluate(input.concat(buttonName)).toString());
        } else {
          setInput(input + selectedOperator + buttonName);
        }
        setSelectedOperator("");
      } else {
        // Otherwise, simply append the number to the input
        setInput(input.concat(buttonName));
        setOutput(math.evaluate(input.concat(buttonName)).toString());
      }
    }
  };

  const onDelete = () => {
    setInput(input.slice(0, -1));
    setOutput(input.slice(0, -1));
    setSelectedOperator("");
  };

  const onReset = () => {
    setInput("");
    setOutput("");
    setSelectedOperator("");
  };

  const onEquals = () => {
    if (input) {
      try {
        setInput(math.evaluate(input).toString());
        setOutput("");
        setSelectedOperator("");
      } catch (err) {
        setInput("Error");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-primary-main-bg items-center flex-col justify-center">
      <main className="w-[440px] h-[575px] font-spartan p-[20px] border-[1px] border-primary-key-bg2 rounded-[5px] m-auto translate-y-14">
        <Header />
        <Screen input={input} output={output} />
        <Keys
          handleClick={handleClick}
          onDelete={onDelete}
          onReset={onReset}
          onEquals={onEquals}
        />
      </main>
    </div>
  );
}

export default App;
