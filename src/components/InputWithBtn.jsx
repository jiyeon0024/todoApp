import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

const InputWithBtn = ({ value, removeBtn }) => {
  const [hover, setHover] = useState(false);
  const [completeBtn, setCompleteBtn] = useState(false);

  const completeButton = () => {
    console.log(completeBtn);
    if (completeBtn) {
      setCompleteBtn(false);
    } else {
      setCompleteBtn(true);
    }
  };

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
      {completeBtn == true ? (
        <BsCheckCircleFill
          onClick={() => completeButton()}
          size={30}
          value={value}
        />
      ) : (
        <BsCircle
          size={30}
          className="cursor-pointer"
          onClick={() => completeButton()}
        />
      )}

      <input
        type="text"
        value={value}
        className={
          completeBtn == true
            ? "line-through w-full rounded h-12 pl-2 border-none outline-none bg-slate-800 "
            : "w-full rounded h-12 pl-2 border-none outline-none bg-slate-800 "
        }
        readOnly
      />
      {hover ? (
        <button
          className="absolute right-[20px] top-[50%] translate-y-[-50%]"
          onClick={() => removeBtn()}
        >
          <img src="./public/images/icon-cross.svg" alt="" />
        </button>
      ) : null}
    </div>
  );
};

export default InputWithBtn;
