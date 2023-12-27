import React, { useState } from "react";

function EditButton({ todo, onUpdate }) {
  const [modal, setModal] = useState(false);
  const [updateTask, setUpdateTask] = useState(todo);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleUpdateTask = (e) => {
    e.preventDefault();
    onUpdate(updateTask);
    closeModal();
  };

  return (
    <>
      <button className="mr-2" onClick={openModal}>
        <svg
          width="24"
          strokeWidth="1.5"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M20 12V5.74853C20 5.5894 19.9368 5.43679 19.8243 5.32426L16.6757 2.17574C16.5632 2.06321 16.4106 2 16.2515 2H4.6C4.26863 2 4 2.26863 4 2.6V21.4C4 21.7314 4.26863 22 4.6 22H11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M8 10H16M8 6H12M8 14H11"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M16 5.4V2.35355C16 2.15829 16.1583 2 16.3536 2C16.4473 2 16.5372 2.03725 16.6036 2.10355L19.8964 5.39645C19.9628 5.46275 20 5.55268 20 5.64645C20 5.84171 19.8417 6 19.6464 6H16.6C16.2686 6 16 5.73137 16 5.4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M17.9541 16.9394L18.9541 15.9394C19.392 15.5015 20.102 15.5015 20.5399 15.9394V15.9394C20.9778 16.3773 20.9778 17.0873 20.5399 17.5252L19.5399 18.5252M17.9541 16.9394L14.963 19.9305C14.8131 20.0804 14.7147 20.2741 14.6821 20.4835L14.4394 22.0399L15.9957 21.7973C16.2052 21.7646 16.3988 21.6662 16.5487 21.5163L19.5399 18.5252M17.9541 16.9394L19.5399 18.5252"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </svg>
      </button>

      {modal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white rounded-lg p-3 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="mb-4 w-full">
                <input
                  className="appearance-none border rounded w-full py-2 h-12
                  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="addtask"
                  type="text"
                  placeholder="Add Task"
                  value={updateTask}
                  onChange={(e) => setUpdateTask(e.target.value)}
                  required
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full bg-indigo-950 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-indigo-900 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleUpdateTask}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditButton;
