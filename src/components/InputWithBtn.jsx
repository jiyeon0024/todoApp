import React, { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { Reorder } from "framer-motion";
import { useMotionValue } from "framer-motion";
const InputWithBtn = ({
  item,
  value,
  removeBtn,
  completes,
  complete,
  removeCompletes,
  OriginCompletes,
  removeOriginBtn,
  lightMode,
  index,
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
    <Reorder.Item value={item} id={item}>
      <div
        className={
          lightMode
            ? "flex gap-3 p-3 justify-center items-center bg-white  rounded  border-b-2 border-gray-300  relative  "
            : "flex gap-3 p-3 justify-center items-center bg-slate-800 text-white  rounded  border-b-2 border-gray-600  relative  "
        }
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {complete ? (
          <BsCheckCircleFill
            onClick={() => completeButton()}
            size={30}
            className={
              lightMode ? "cursor-pointer text-gray-300 " : "cursor-pointer"
            }
          />
        ) : (
          <BsCircle
            size={30}
            className={
              lightMode ? "cursor-pointer text-gray-300 " : "cursor-pointer"
            }
            onClick={() => completeButton()}
          />
        )}

        <input
          type="text"
          value={value}
          className={
            complete
              ? lightMode
                ? "line-through w-full rounded h-12 pl-2 border-none outline-none bg-white"
                : "line-through w-full rounded h-12 pl-2 border-none outline-none bg-slate-800 "
              : lightMode
              ? "w-full rounded h-12 pl-2 border-none outline-none bg-white"
              : "w-full rounded h-12 pl-2 border-none outline-none bg-slate-800   "
          }
          readOnly
        />
        {hover ? (
          <button
            className="absolute right-[20px] top-[50%] translate-y-[-50%]"
            onClick={() => {
              removeBtn();
              removeOriginBtn();
            }}
          >
            <img src="./public/images/icon-cross.svg" alt="" />
          </button>
        ) : null}
      </div>
    </Reorder.Item>
  );
};

export default InputWithBtn;
