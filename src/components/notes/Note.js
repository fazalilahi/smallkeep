import React, { useState } from "react";
import { useDispatch } from "react-redux";
import isEqual from "lodash.isequal";
import TextareaAutosize from "react-autosize-textarea";

/**local */
import TextInputGroup from "./../layout/TextInputGroup";
import Modal from "./../layout/Modal";
import { deleteNote, updateNote } from "./../../redux/actions/notesAction";

function Note({ note }) {
  const dispatch = useDispatch();

  /*destructuring note object */
  const { id, title, content } = note;

  /**state */
  const [noteObj, setNoteObj] = useState(note);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  /**handlers */
  const handleUpdate = (e) => {
    e.preventDefault();

    toggleModal();

    //update only if there is any change.
    if (!isEqual(noteObj, note)) dispatch(updateNote(noteObj));
  };

  const handleInputChange = (e) => {
    let obj = { ...noteObj };
    obj[e.target.name] = e.target.value;

    setNoteObj(obj);
  };

  return (
    <div>
      <div className="border border-gray-200 rounded-md m-2 hover:shadow font-light">
        <div className="p-1 overflow-hidden">
          <div onClick={toggleModal}>
            <h4 className="p-2">{title}</h4>
            <p className="p-2">{content}</p>
          </div>
          <Modal show={isOpen} onClose={handleUpdate}>
            <div>
              <form onSubmit={handleUpdate}>
                <TextInputGroup
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={noteObj.title}
                  onChange={handleInputChange}
                />
                <TextareaAutosize
                  required
                  className="p-2 w-full"
                  name="content"
                  value={noteObj.content}
                  placeholder="Take a note..."
                  onChange={handleInputChange}
                />
                <div>
                  <button className="float-right px-2 p-1 text-sm hover:bg-blue-50 rounded-md">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>
        <div className="flex flex-row-reverse p-1">
          {/* delete button */}
          <button
            onClick={() => dispatch(deleteNote(id))}
            className="px-2 py-1 p-6 hover:bg-blue-50 rounded-full"
          >
            <img src="images/delete.svg" alt="trash icon to delete note" />
          </button>
          {/* archive button */}
          <button
            onClick={() =>
              dispatch(
                updateNote({ ...noteObj, isArchived: !noteObj.isArchived })
              )
            }
            className="px-2 py-1 p-6 hover:bg-blue-50 rounded-full"
          >
            {noteObj.isArchived && (
              <img
                src="images/unarchive.svg"
                alt="Un-archive icon to un-archive note"
              />
            )}
            {!noteObj.isArchived && (
              <img
                src="images/archive.svg"
                alt="archive icon to archive note"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
