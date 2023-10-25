import Input from "./components/Input";
import InputWithBtn from "./components/InputWithBtn";
import { useEffect, useState } from "react";

function App() {
  const [inputInfo, setInputInfo] = useState("");
  const [inputs, setInputs] = useState([]);
  const [click, setClick] = useState(false);

  const addInputInfo = () => {
    inputs.push(inputInfo);
    setInputs([...inputs]);
    setClick(true);
    console.log(inputs);
    console.log(inputInfo);
  };

  const removeBtn = (val) => {
    let filteredInput = inputs.filter((inputs) => inputs !== val);
    setInputs(filteredInput);
  };

  return (
    <div>
      <img
        src="./public/images/bg-desktop-dark.jpg"
        className="w-full relative"
      ></img>
      <div className="absolute top-[10%] left-[50%]   translate-x-[-50%]  p-2 w-[50%]">
        <div className="flex justify-between items-center mb-6">
          <p className="text-white text-4xl font-bold">T O D O</p>
          <img src="./public/images/icon-sun.svg" alt="" />
        </div>
        <Input
          placeholder={"Create a new todo"}
          onChange={(e) => {
            setInputInfo(e.target.value);
            setClick(false);
          }}
          addInputInfo={() => {
            addInputInfo();
          }}
          value={click == true ? "" : inputInfo}
        />
        <div className="mt-6">
          {inputs?.map((i, index) => {
            return (
              <InputWithBtn
                value={i}
                key={i + index}
                removeBtn={() => removeBtn(i)}
              />
            );
          })}
        </div>
      </div>
      <p className="text-gray-300 text-center absolute bottom-20 left-[50%] translate-x-[-50%]">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;
