import Input from "./components/Input";
import InputWithBtn from "./components/InputWithBtn";
import { useEffect, useState } from "react";

function App() {
  const [inputInfo, setInputInfo] = useState("");
  const [inputs, setInputs] = useState([]);
  const [click, setClick] = useState(false);
  const [origin, setOrigin] = useState([]);
  const [err, setErr] = useState(false);

  const addInputInfo = () => {
    if (inputInfo !== "") {
      setErr(false);
      setInputs([{ text: inputInfo, completed: false }, ...inputs]);
      setOrigin([{ text: inputInfo, completed: false }, ...inputs]);
    } else {
      setErr(true);
    }

    setClick(true);
    setInputInfo("");
    // console.log(inputs);
  };

  const removeBtn = (val) => {
    let filteredInput = inputs.filter((inputs) => inputs !== val);
    setInputs(filteredInput);
  };

  const clearBtn = () => {
    let filteredInputs = origin.filter((input) => !input.completed);
    setInputs(filteredInputs);
  };

  const completes = (val) => {
    // filterCompleted = inputs.filter((inputs) => inputs.text !== val.text);
    let newInputs = inputs.map((i) =>
      i.text !== val.text ? i : { text: i.text, completed: true }
    );
    setInputs(newInputs);
  };
  const OriginCompletes = (val) => {
    // filterCompleted = inputs.filter((inputs) => inputs.text !== val.text);
    let newInputs = origin.map((i) =>
      i.text !== val.text ? i : { text: i.text, completed: true }
    );
    setOrigin(newInputs);
  };

  const removeCompletes = (val) => {
    let NewInputs = inputs.map((i) => {
      if (i.completed !== val.complete) {
        return { text: i.text, completed: false };
      } else {
        i;
      }
    });
    setInputs(NewInputs);
  };

  const completedList = () => {
    let completedInputs = origin.filter((i) => i.completed);
    setInputs(completedInputs);
  };
  const activeList = () => {
    let activeInputs = origin.filter((i) => !i.completed);
    setInputs(activeInputs);
  };

  const all = () => {
    setInputs(origin);
    console.log(origin);
  };

  const left = inputs.filter((i) => i.completed == false);
  console.log(left);

  return (
    <div className="relative">
      <img src="./public/images/bg-desktop-dark.jpg" className="w-full "></img>
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
        {err == true ? (
          <p className="text-blue-100 font-bold font-2xl float-right">
            Can't empty!
          </p>
        ) : null}

        <div className="mt-6">
          {inputs.map((i, index) => {
            // console.log(i);

            return (
              <InputWithBtn
                value={i.text}
                complete={i.completed}
                key={i.text + index}
                removeBtn={() => removeBtn(i)}
                completes={() => completes(i)}
                OriginCompletes={() => OriginCompletes(i)}
                removeCompletes={() => removeCompletes(i)}
              />
            );
          })}
          <div>
            <div className="bg-slate-800 text-white  rounded p-3 ">
              <ul className="flex gap-20 justify-center items-center">
                <li>{` ${left.length} items left`} </li>

                <li className="flex gap-3 cursor-pointer">
                  <span onClick={() => all()} className="text-blue-500">
                    All
                  </span>
                  <span onClick={() => activeList()}>Active</span>
                  <span onClick={() => completedList()}>Completed</span>
                </li>

                <li className="cursor-pointer">
                  <button
                    onClick={() => {
                      clearBtn();
                    }}
                  >
                    Clear Completed
                  </button>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 text-center m-5">
              Drag and drop to reorder list
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
