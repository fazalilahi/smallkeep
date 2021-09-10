import React, { useState } from "react";
import { useDispatch } from "react-redux";
import isEqual from "lodash.isequal";
import TextareaAutosize from "react-autosize-textarea";

/**local */
import { deleteNote, updateNote } from "./../../redux/actions/notesAction";
import TextInputGroup from "./../layout/TextInputGroup";
import Modal from "./../layout/Modal";
import DeleteBtn from "./DeleteBtn";
import ArchiveBtn from "./ArchiveBtn";

function Note({ note }) {
  const dispatch = useDispatch();

  /*destructuring note object */
  const { id, title, content } = note;

  /**state */
  const [noteObj, setNoteObj] = useState(note);
  const [isOpen, setIsOpen] = useState(false);

  /**handlers */
  const handleOnSubmit = (e) => {
    e.preventDefault();

    toggleModal();

    //update only if there is any change.
    if (!isEqual(noteObj, note)) dispatch(updateNote(noteObj));
  };

  const handleToggleArchive = (e) => {
    let obj = { ...noteObj };
    obj.isArchived = !noteObj.isArchived;
    setNoteObj(obj);
    dispatch(updateNote(obj));
  };

  const handleOnDelete = () => {
    dispatch(deleteNote(id));
  };

  const handleInputChange = (e) => {
    let obj = { ...noteObj };
    obj[e.target.name] = e.target.value;

    setNoteObj(obj);
  };

  /**function: to toggle model visibility */
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border border-gray-200 rounded-md m-2 hover:shadow">
        <div className="p-1 overflow-hidden">
          <div onClick={toggleModal}>
            <h4 className="p-2">{title}</h4>
            <p className="p-2 font-extralight">{content}</p>
          </div>
          <Modal show={isOpen} onClose={handleOnSubmit}>
            <div>
              <form onSubmit={handleOnSubmit}>
                <TextInputGroup
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={noteObj.title}
                  onChange={handleInputChange}
                />
                <TextareaAutosize
                  required
                  className="p-2 w-full font-extralight"
                  name="content"
                  value={noteObj.content}
                  placeholder="Take a note..."
                  onChange={handleInputChange}
                  autoFocus
                />
                <div className="flex justify-between">
                  <div className="flex justify-start">
                    {/* model:archiveBtn */}
                    <ArchiveBtn
                      handleToggleArchive={handleToggleArchive}
                      isArchived={noteObj.isArchived}
                    />
                    {/* model:deleteBtn */}
                    <DeleteBtn handleOnDelete={handleOnDelete} />
                  </div>
                  <div className="flex justify-end">
                    <button className="px-2 p-1 text-sm hover:bg-blue-50 rounded-md">
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Modal>
        </div>

        {/* footer */}
        <div className="flex p-1">
          {/* archive button */}
        
          <ArchiveBtn
            handleToggleArchive={handleToggleArchive}
            isArchived={noteObj.isArchived}
          />
          {/* delete button */}
          <DeleteBtn handleOnDelete={handleOnDelete} />
        </div>
      </div>
    </div>
  );
}

export default Note;
