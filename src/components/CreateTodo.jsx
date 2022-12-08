import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

import { ThreeDots } from "react-loader-spinner";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const addTodo = async (newTodo) => {
    try {
      const docRef = await addDoc(collection(db, "todo-items"), newTodo);
      setTodos((prevTodos) => [...prevTodos, { ...newTodo, id: docRef.id }]);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setErrorMessage("Error adding document");
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setError(false);
    setErrorMessage("");
  };
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
    setError(false);
    setErrorMessage("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || date === "") {
      setError(true);
      return;
    }
    const newTodo = {
      title: title,
      description: description,
      date: date,
    };
    addTodo(newTodo);
    setIsLoading(true);
    setTitle("");
    setDescription("");
    setDate("");
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
        placeholder="Description(optional)"
        className="rounded-md outline-none p-1"
        id="description"
      />
      <label htmlFor="date">Date</label>
      {error && <div className="text-red-500">Date is required</div>}
      <input
        id="date"
        value={date}
        className="outline-none p-1 rounded-md"
        type="date"
        onChange={handleDate}
      />
      <div className="text-red-700">{errorMessage}</div>
      <button type="submit" className="bg-blue-500 p-2 rounded-md">
        {isLoading ? (
          <ThreeDots
            height="30"
            width="30"
            radius="9"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default CreateTodo;
