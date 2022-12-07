import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          total: <span className="text-white">2</span>
        </div>
        <select className="rounded-md p-2 outline-none">
          <option>All</option>
          <option className="">Sort by date</option>
          <option>Sort by Title</option>
        </select>
      </div>
      <div className="main">
        <Todo />
      </div>
    </div>
  );
};

export default TodoList;
