import React, { useEffect, useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";
import { BiCircle } from "react-icons/bi";

const Input = ({ placeholder, value, onChange, addInputInfo }) => {
  //   const [inputInfo, setInputInfo] = useState("");
  //   const [inputs, setInputs] = useState([]);

  //   const addInputInfo = () => {
  //     inputs.push(inputInfo);
  //   };

  return (
    <div className="flex gap-3 p-3 justify-center items-center bg-slate-800 text-white  rounded ">
      <BiCircle size={30} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="w-full rounded h-12 pl-2 border-none outline-none bg-slate-800"
        // onChange={(e) => setInputInfo(e.target.value)}
        onChange={onChange}
      />

      <button
        onClick={() => {
          addInputInfo();
        }}
      >
        <RiAddCircleLine size={30} className="hover:text-blue-300" />
      </button>
    </div>
  );
};

export default Input;
