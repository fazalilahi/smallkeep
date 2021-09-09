import { Constant } from "./utils/constants";

/**
 * Fetches all the notes from localStorage
 * @returns Array of note objects from local-storage
 */
const getStore = () => {
  return JSON.parse(localStorage.getItem(Constant.StorageKey));
};

/**
 * Updates local-storage with the collection of notes provided.
 * @param {Array} notes - Array of notes objects to store into the local-storage
 */
const setStore = (notes) => {
  localStorage.setItem(Constant.StorageKey, JSON.stringify(notes));
};

/**
 * Fetches all the notes from local-storage if exist else returns empty array.
 * @returns Collection of notes if exists, else returns empty array
 */
export const getNotesFromStore = () => {
  return getStore() || [];
};

/**
 *
 * @param {object} note - A note item to add into collection of notes in local-storage.
 */
export const addNoteToStore = (note) => {
  const store = getNotesFromStore();
  let notes = [note, ...store];
  setStore(notes);
};

/**
 *
 * @param {note} note - An updated note that has to be updated in local-storage.
 */
export const updateNoteAtStore = (note) => {
  const store = getNotesFromStore();
  let notes = store.map((noteItem) =>
    noteItem.id === note.id ? (noteItem = note) : noteItem
  );
  setStore(notes);
};

/**
 *
 * @param {string} id - id of note to be deleted from local-storage
 */
export const deleteNoteFromStore = (id) => {
  const store = getNotesFromStore();
  let notes = store.filter((noteItem) => noteItem.id !== id);

  setStore(notes);
};
