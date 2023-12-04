import { useState } from "react";
import Header from "./components/Header";
import Keys from "./components/Keys";
import Screen from "./components/Screen";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedOperatorSign, setSelectedOperatorSign] = useState("");

  const handleClick = (e) => {
    const buttonName = e.target.name;

    if (isNaN(buttonName)) {
      // If an operator button is clicked
      if (selectedOperatorSign && selectedOperatorSign !== buttonName) {
        // If a different operator is already selected, update the selected operator
        setSelectedOperatorSign(buttonName);
        setInput(input.slice(0, -1).concat(buttonName));
        setOutput(input.slice(0, -1).concat(buttonName));
      } else if (!selectedOperatorSign) {
        // Otherwise, select the operator and append it to the input
        setSelectedOperatorSign(buttonName);
        setInput(input.concat(buttonName));
        if (output) {
          setOutput(math.evaluate(input).toString());
        }
      }
    } else {
      // If a number button is clicked
      if (selectedOperatorSign) {
        // If an operator is already selected, append the number to the input after the operator
        if (input.slice(-1) === selectedOperatorSign) {
          setInput(input.concat(buttonName));
          // setOutput(input.concat(buttonName));
        } else {
          setInput(input + selectedOperatorSign + buttonName);
          // setOutput(input + selectedOperatorSign + buttonName);
        }
        setSelectedOperatorSign("");
      } else {
        // Otherwise, simply append the number to the input
        setInput(input.concat(buttonName));
        setOutput(input.concat(buttonName));
        if (output) {
          setOutput(math.evaluate(input).toString());
        }
      }
    }
  };

  const onDelete = () => {
    setInput(input.slice(0, -1));
    setOutput(input.slice(0, -1));
    setSelectedOperatorSign("");
  };

  const onReset = () => {
    setInput("");
    setOutput("");
    setSelectedOperatorSign("");
  };
  
  const onEquals = () => {
    try {
      setInput(math.evaluate(input).toString());
      setOutput(math.evaluate(input).toString());
      setSelectedOperatorSign("");
    } catch (err) {
      setInput("Error");
      setOutput("Error");
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
