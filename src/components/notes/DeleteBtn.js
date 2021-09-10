import React from "react";

function DeleteBtn({ handleOnDelete }) {
  return (
    <button
      onClick={handleOnDelete}
      className="hover:bg-red-50 rounded-full h-8 w-8 flex items-center justify-center"
    >
      <img src="images/delete.svg" alt="trash icon to delete note" />
    </button>
  );
}

export default DeleteBtn;
