import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { isEmpty } from 'lodash';

/**local */
import TextInputGroup from '../layout/TextInputGroup';
import Note from './../../models/note';
import { addNote } from '../../redux/actions/notesAction';

function AddNote() {
  const dispatch = useDispatch();

  /**states */
  const [note, setNote] = useState(new Note());
  /**show or hide textbox */
  const [showBox, setShowBox] = useState(false);

  /**handlers */
  const handleInputChange = (e) => {
    let noteObj = { ...note };
    noteObj[e.target.name] = e.target.value;

    setNote(noteObj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowBox(false);

    if (!isEmpty(note.title || note.content)) dispatch(addNote(note));
    setNote(new Note());
  };

  /**function: toggles visiblity */
  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <div
      className="flex justify-center p-4 pb-8 font-light"
      // onBlur={toggleBox}
    >
      {!showBox ? (
        <div
          onClick={toggleBox}
          className="p-2 border rounded-md w-11/12 sm:w-8/12 md:w-6/12 shadow px-4 text-gray-400"
        >
          Take a note...{' '}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="p-2 border rounded-md w-11/12 sm:w-8/12 md:w-6/12 shadow"
        >
          <TextInputGroup
            type="text"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleInputChange}
          />

          <TextareaAutosize
            className="p-2 font-extralight"
            name="content"
            value={note.content}
            placeholder="Take a note..."
            onChange={handleInputChange}
            autoFocus
          />
          <div>
            <button className="float-right px-4 p-2 text-sm hover:bg-blue-50 hover:text-blue-400 rounded-md">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddNote;
