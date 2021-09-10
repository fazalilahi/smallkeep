import React from "react";

function DeleteBtn({ handleOnDelete }) {
  return (
    <button
      onClick={handleOnDelete}
      className="group hover:bg-red-50 rounded-full h-8 w-8 flex items-center justify-center"
    >
      {/* <img src="images/delete.svg" alt="trash icon to delete note" /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 stroke-current text-gray-400 group-hover:text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        alt="trash icon to delete note"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
}

export default DeleteBtn;
