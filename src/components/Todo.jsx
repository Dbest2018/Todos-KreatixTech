import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="flex justify-around items-center p-4 rounded-xl bg-white text-gray-700 gap-4 my-4">
      <div className="">{todo.title}</div>
      <div className="text-blue-500">{todo.date}</div>
      <div className="text-red-500 text-lg">x</div>
    </div>
  );
};

export default Todo;
