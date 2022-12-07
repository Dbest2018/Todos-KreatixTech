import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase";

const Todo = ({ todo, setTodos }) => {
  const deleteTodo = async () => {
    await deleteDoc(doc(db, "todo-items", todo.id));
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todo.id);
    });
  };
  return (
    <div className="flex justify-around items-center p-4 rounded-xl bg-white text-gray-700 gap-4 my-4">
      <div className="">{todo.title}</div>
      <div className="text-blue-500">{todo.date}</div>
      <div className="text-red-500 text-lg" onClick={deleteTodo}>
        x
      </div>
    </div>
  );
};

export default Todo;
