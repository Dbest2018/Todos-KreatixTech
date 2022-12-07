import React from "react";

const Todo = () => {
  return (
    <div className="flex justify-around items-center p-4 rounded-xl bg-white text-gray-700 gap-4 my-4">
      <div className="">This is the first todo</div>
      <div className="text-blue-500">07/12/2022</div>
      <div className="text-red-500 text-lg">x</div>
    </div>
  );
};

export default Todo;
