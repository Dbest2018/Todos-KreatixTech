import React from "react";

const CreateTodo = () => {
  const date = new Date();
  console.log(date);
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        placeholder="Enter new task"
        className="rounded-md outline-none p-1"
        id="title"
      />
      <label htmlFor="description">Description</label>
      <textarea
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
