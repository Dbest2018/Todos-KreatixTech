import { useEffect, useMemo, useState } from "react";
import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    let active = false;
    const fetchTodos = async () => {
      const querySnapshot = await getDocs(collection(db, "todo-items"));
      querySnapshot.forEach((doc) => {
        if (active) {
          setTodos((prevTodos) => {
            return [...prevTodos, { id: doc.id, ...doc.data() }];
          });
        }
      });
    };
    fetchTodos();
    return () => {
      active = true;
    };
  }, []);

  useMemo(() => {
    setFilteredTodos([...todos]);
  }, [todos]);
  return (
    <div className="flex flex-col items-center bg-slate-400 h-full min-h-screen py-10 box-border font-mono">
      <div className=" text-white m-8 text-3xl">Todo List</div>
      <div className="text-gray-700 sm:flex gap-8 items-center">
        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          setTodos={setTodos}
        />
        <CreateTodo setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
