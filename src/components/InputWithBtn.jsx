import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";

const InputWithBtn = ({
  value,
  removeBtn,
  completes,
  complete,
  removeCompletes,
  OriginCompletes,
}) => {
  const [hover, setHover] = useState(false);

  const completeButton = () => {
    if (complete == true) {
      // remove complete
      removeCompletes();
    } else {
      completes();
      OriginCompletes();
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
      {complete ? (
        <BsCheckCircleFill onClick={() => completeButton()} size={30} />
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
          complete
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
