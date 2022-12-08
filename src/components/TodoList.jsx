import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Todo from "./Todo";

const TodoList = ({ todos, filteredTodos, setFilteredTodos, setTodos }) => {
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    switch (e.target.value) {
      case "all":
        setFilter("All");
        setFilteredTodos([...todos]);
        break;
      case "date":
        setFilter("Sort by date");
        setFilteredTodos((prevFilteredTodos) => {
          return prevFilteredTodos.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });
        });
        break;
      case "title":
        setFilter("Sort by title");
        setFilteredTodos((prevFilteredTodos) => {
          return prevFilteredTodos.sort(function (a, b) {
            return a.title.localeCompare(b.title);
          });
        });
        break;
      default:
        setFilteredTodos([...todos]);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="mr-4">
          total: <span className="text-white">{filteredTodos.length}</span>
        </div>
        <select
          value={filter}
          className="rounded-md p-2 outline-none"
          onChange={handleFilter}
        >
          <option value={filter} disabled>
            {filter === "" ? "All" : filter}
          </option>
          <option value="all">All</option>
          <option value="date">Sort by date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      {filteredTodos.length > 1 ? (
        filteredTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} setTodos={setTodos} />
        ))
      ) : (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#fff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </div>
  );
};

export default TodoList;
