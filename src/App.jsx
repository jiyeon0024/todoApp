import Input from "./components/Input";
import InputWithBtn from "./components/InputWithBtn";

function App() {
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
        <Input placeholder={"Create a new todo"} />
        <div className="mt-6">
          <InputWithBtn />
          <InputWithBtn />
        </div>
      </div>
      <p className="text-gray-300 text-center absolute bottom-20 left-[50%] translate-x-[-50%]">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;
