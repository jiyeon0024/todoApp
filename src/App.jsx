import Input from "./components/Input";
import InputWithBtn from "./components/InputWithBtn";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reorder } from "framer-motion";

function App() {
  const [inputInfo, setInputInfo] = useState("");
  const [inputs, setInputs] = useState([]);

  const [click, setClick] = useState(false);
  const [origin, setOrigin] = useState([]);
  const [err, setErr] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [clickActive, setClickedActive] = useState(false);
  const [Completed, setCompleted] = useState(false);

  const clickedAll = () => {
    if (clicked) {
      setClicked(false);
      setCompleted(false);
      setClickedActive(false);
    } else {
      setClicked(true);
      setClickedActive(false);
      setCompleted(false);
    }
  };

  const clickedActive = () => {
    if (clickActive) {
      setClickedActive(false);
      setCompleted(false);
      setClicked(false);
    } else {
      setClickedActive(true);
      setClicked(false);
      setCompleted(false);
    }
  };

  const Complete = () => {
    if (Completed) {
      setCompleted(false);
      setClickedActive(false);
      setClicked(false);
    } else {
      setClicked(false);
      setCompleted(true);
      setClickedActive(false);
    }
  };

  const checkMode = () => {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  };

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
    let filteredInput = origin.filter((inputs) => inputs !== val);
    setInputs(filteredInput);
  };
  const removeOriginBtn = (val) => {
    let filteredInput = inputs.filter((inputs) => inputs !== val);
    setOrigin(filteredInput);
  };

  const clearBtn = () => {
    let filteredInputs = origin.filter((input) => input.completed == false);
    setInputs(filteredInputs);
    setOrigin(filteredInputs);
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
  };

  const left = inputs.filter((i) => i.completed == false);

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      addInputInfo();
    }
  };

  return (
    <div className="relative  ">
      {/* <img src="./public/images/bg-desktop-dark.jpg" className="w-full "></img> */}
      <div
        className={
          lightMode ? "bg-white min-h-screen" : "bg-[#161722] min-h-screen"
        }
      >
        <div
          className={
            lightMode
              ? "sm:bg-[url('/public/images/bg-desktop-light.jpg')] bg-[url('/public/images/bg-mobile-light.jpg')] bg-cover h-[300px] bg-no-repeat"
              : "sm:bg-[url('/public/images/bg-desktop-dark.jpg')] bg-[url('/public/images/bg-mobile-dark.jpg')] bg-cover h-[300px] bg-no-repeat "
          }
        ></div>
        <div className="absolute top-[10%] left-[50%]   translate-x-[-50%]  p-2 lg:w-[50%] w-[80%]">
          <div className="flex justify-between items-center mb-6">
            <p className="text-white text-4xl font-bold">T O D O</p>
            {lightMode ? (
              <img
                src="./public/images/icon-moon.svg"
                alt=""
                onClick={() => checkMode()}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="./public/images/icon-sun.svg"
                alt=""
                onClick={() => checkMode()}
                className="cursor-pointer"
              />
            )}
          </div>
          <Input
            lightMode={lightMode}
            placeholder={"Create a new todo"}
            onChange={(e) => {
              setInputInfo(e.target.value);
              setClick(false);
            }}
            addInputInfo={() => {
              addInputInfo();
            }}
            value={click == true ? "" : inputInfo}
            onKeyPress={(e) => handleEnterKey(e)}
          />
          {err == true ? (
            <p className="text-blue-100 font-bold font-2xl float-right">
              Can't empty!
            </p>
          ) : null}

          <div className="mt-6  ">
            <Reorder.Group axis="y" values={inputs} onReorder={setInputs}>
              {inputs.map((i, index) => {
                // console.log(i);

                return (
                  <InputWithBtn
                    item={i}
                    value={i.text}
                    complete={i.completed}
                    // key={i.text + index}
                    key={i.text}
                    removeBtn={() => removeBtn(i)}
                    removeOriginBtn={() => removeOriginBtn(i)}
                    completes={() => completes(i)}
                    OriginCompletes={() => OriginCompletes(i)}
                    removeCompletes={() => removeCompletes(i)}
                    lightMode={lightMode}
                  />
                );
              })}
            </Reorder.Group>

            <div
              className={
                lightMode
                  ? "bg-white  rounded p-3 shadow-lg"
                  : "bg-slate-800 text-white  rounded p-3  shadow-lg"
              }
            >
              <ul
                className={
                  lightMode
                    ? "flex  justify-between items-center text-gray-500"
                    : "flex  justify-between items-center"
                }
              >
                <li>{` ${left.length} items left`} </li>

                <li
                  className={
                    lightMode
                      ? "md:flex gap-3 cursor-pointer w-fit  hidden text-gray-500 "
                      : "md:flex gap-3 cursor-pointer w-fit  hidden "
                  }
                >
                  <span
                    onClick={() => {
                      all();
                      clickedAll();
                    }}
                    className={clicked ? "text-blue-500" : ""}
                  >
                    All
                  </span>
                  <span
                    className={clickActive ? "text-blue-500" : ""}
                    onClick={() => {
                      activeList();
                      clickedActive();
                    }}
                  >
                    Active
                  </span>
                  <span
                    className={Completed ? "text-blue-500" : ""}
                    onClick={() => {
                      completedList();
                      Complete();
                    }}
                  >
                    Completed
                  </span>
                </li>

                <li className="cursor-pointer">
                  <button
                    className="hover:text-blue-500"
                    onClick={() => {
                      clearBtn();
                    }}
                  >
                    Clear Completed
                  </button>
                </li>
              </ul>
              <div
                className={
                  lightMode
                    ? "bg-white   rounded p-3  mt-5 md:hidden shadow-lg  "
                    : "bg-slate-800 text-white  rounded p-3  mt-5 md:hidden shadow-lg  "
                }
              >
                <ul className="flex justify-center">
                  <li className="flex gap-10 cursor-pointer w-fit   justify-center items-center">
                    <span
                      onClick={() => {
                        all();
                        clickedAll();
                      }}
                      className={clicked ? "text-blue-500" : ""}
                    >
                      All
                    </span>
                    <span
                      className={clickActive ? "text-blue-500" : ""}
                      onClick={() => {
                        activeList();
                        clickedActive();
                      }}
                    >
                      Active
                    </span>
                    <span
                      className={Completed ? "text-blue-500" : ""}
                      onClick={() => {
                        completedList();
                        Complete();
                      }}
                    >
                      Completed
                    </span>
                  </li>

                  <li className="cursor-pointer"></li>
                </ul>
              </div>
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
