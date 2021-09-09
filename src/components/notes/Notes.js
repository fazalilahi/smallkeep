import React from "react";

/**local */
import Note from "./Note";

function Notes({ notes }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
      {notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
