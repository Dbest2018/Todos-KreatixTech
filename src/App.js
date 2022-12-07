import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div className="flex flex-col items-center bg-slate-400 h-screen py-10 box-border font-mono">
      <div className=" text-white m-8 text-xl">TodoList</div>
      <div className="text-gray-700 sm:flex gap-8 items-center">
        <TodoList />
        <CreateTodo />
      </div>
    </div>
  );
}

export default App;
