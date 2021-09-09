import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/**local */
import { getNotes } from "./../redux/actions/notesAction";
//components
import Notes from "../components/notes/Notes";
import AddNote from "../components/notes/AddNote";

function Home() {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.rootReducer.noteReducer);
  const unArchivedNotes = notes?.filter((note) => note.isArchived !== true);

  /*effects */
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div>
      <AddNote />
      <Notes notes={unArchivedNotes} />
    </div>
  );
}
export default Home;
