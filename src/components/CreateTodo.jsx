import { useState } from "react";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const date = new Date();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setError(false);
  };
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setError(true);
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length,
        title: title,
        description: description,
        date: date,
      },
    ]);
    setTitle("");
    setDescription("");
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      {error && <div className="text-red-500">Title is required</div>}
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter new task"
        className="rounded-md outline-none p-1"
        id="title"
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={description}
        onChange={handleDescChange}
        placeholder="description(optional)"
        className="rounded-md outline-none p-1"
        id="description"
      />
      <label htmlFor="date">Date</label>
      <div id="date">07/12/2022</div>
      <button type="submit" className="bg-blue-500 p-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default CreateTodo;
