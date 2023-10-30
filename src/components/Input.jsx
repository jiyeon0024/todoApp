import React, { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { BsCircle, BsLightningCharge } from "react-icons/bs";

const Input = ({ placeholder, value, onChange, addInputInfo, lightMode }) => {
  //   const [inputInfo, setInputInfo] = useState("");
  //   const [inputs, setInputs] = useState([]);

  //   const addInputInfo = () => {
  //     inputs.push(inputInfo);
  //   };

  return (
    <div
      className={
        lightMode
          ? "flex gap-3 p-3 justify-center items-center bg-white rounded shadow-lg "
          : "flex gap-3 p-3 justify-center items-center bg-slate-800 text-white  rounded shadow-lg "
      }
    >
      <BsCircle size={33} className={lightMode ? "text-gray-300" : ""} />
      <input
        type="text"
        placeholder={placeholder}
        value={value.slice(0, 60)}
        className={
          lightMode
            ? " w-full rounded h-12 pl-2 border-none outline-none bg-white"
            : "   w-full rounded h-12 pl-2 border-none outline-none bg-slate-800"
        }
        // onChange={(e) => setInputInfo(e.target.value)}
        onChange={onChange}
      />

      <button
        onClick={() => {
          addInputInfo();
        }}
      >
        <RiAddCircleLine
          size={30}
          className={
            lightMode
              ? "text-gray-300 hover:text-blue-300 "
              : "hover:text-blue-300"
          }
        />
      </button>
    </div>
  );
};

export default Input;
