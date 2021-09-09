import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//local
import { getNotes } from "./../redux/actions/notesAction";
import Notes from "../components/notes/Notes";

function Archive() {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.rootReducer.noteReducer);
  const archivedNotes = notes?.filter((note) => note.isArchived === true);

  /**effects */
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div>
      <Notes notes={archivedNotes} />
    </div>
  );
}

export default Archive;
