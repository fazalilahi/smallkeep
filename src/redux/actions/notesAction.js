import isEmpty from "lodash.isempty";

/**local */
import {
  GET_NOTE,
  GET_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "./../actions/types";
import {
  getNotesFromStore,
  addNoteToStore,
  updateNoteAtStore,
  deleteNoteFromStore,
} from "./../../api";

/**TODO: remove below test code */
import { staticNotes } from "./../../data/static";

/**
 * Retrieves a single note of given id
 * @param {string} id - The id of the note to be retrieved.
 * @returns retrieves a single note
 */
export const getNote = (id) => {
  return {
    type: GET_NOTE,
    payload: id,
  };
};

/**
 * Retrieves all the notes.
 * @returns all the notes
 */
export const getNotes = () => {
  let notes = getNotesFromStore();

  if (isEmpty(notes)) {
    notes = staticNotes;
    staticNotes.forEach((note) => {
      addNoteToStore(note);
    });
  }

  return {
    type: GET_NOTES,
    payload: notes,
  };
};

/**
 * Adds given note to the list of notes.
 * @param {object} note - The note object to be added to the list of notes
 * @returns
 */
export const addNote = (note) => {
  addNoteToStore(note);

  return {
    type: ADD_NOTE,
    payload: note,
  };
};

/**
 * Updates note object.
 * @param {object} note - The note object to be updated
 * @returns
 */
export const updateNote = (note) => {
  updateNoteAtStore(note);

  return {
    type: UPDATE_NOTE,
    payload: note,
  };
};

/**
 * Deletes a note of given id.
 * @param {string} id - The id of the note to be deleted from the list of notes.
 * @returns
 */
export const deleteNote = (id) => {
  deleteNoteFromStore(id);

  return {
    type: DELETE_NOTE,
    payload: id,
  };
};
