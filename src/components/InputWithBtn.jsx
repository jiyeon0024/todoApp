import React, { useState } from "react";
import { BiCircle } from "react-icons/bi";

const InputWithBtn = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex gap-3 p-3 justify-center items-center bg-slate-800 text-white  rounded  border-b-2 border-gray-600  relative"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <BiCircle size={30} />
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        className="w-full rounded h-12 pl-2 border-none outline-none bg-slate-800 "
      />
      {hover ? (
        <button className="absolute right-[20px] top-[50%] translate-y-[-50%]">
          <img src="./public/images/icon-cross.svg" alt="" />
        </button>
      ) : null}
    </div>
  );
};

export default InputWithBtn;
