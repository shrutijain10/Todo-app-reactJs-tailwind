import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function SubmitForm() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements.addtask.value;
    setTodo([...todo, newTodo]);
    e.target.elements.addtask.value = "";
  };
  const handleDelete = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };
  const handleEdit = (index, updatedTask) => {
    const newList = [...todo];
    if (updatedTask !== null) {
      newList[index] = updatedTask;
      setTodo(newList);
    }
  };
  return (
    <>
      <h1 className="text-5xl font-bold	mb-5 mt-2 text-white">Todo App</h1>
      <form
        className="w-full max-w-sm mx-auto shadow-md p-5 bg-violet-300 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-full">
          <input
            className="appearance-none border rounded w-full py-2 h-12
          px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="addtask"
            type="text"
            placeholder="Add Task"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-indigo-950  hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Task
          </button>
        </div>
      </form>
      <div className="w-full max-w-sm mx-auto mt-5">
        <ul
          className="text-1xl text-white 
        "
        >
          {todo.map((item, index) => (
            <li
              key={index}
              className="p-3 mb-3 flex justify-between bg-indigo-950 rounded-md"
            >
              {item}
              <div>
                <EditButton
                  onUpdate={(updatedTask) => handleEdit(index, updatedTask)}
                  todo={item}
                />
                <DeleteButton onClick={() => handleDelete(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SubmitForm;
