import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
//local
import { getNotes } from "../../redux/actions/notesAction";
import TextInputGroup from "./TextInputGroup";
import Note from "../notes/Note";

const SearchBar = () => {
  const dispatch = useDispatch();

  const { notes } = useSelector((state) => state.rootReducer.noteReducer);

  /**states */
  const [searchValue, setSearchValue] = useState("");
  const [notesFiltered, setNotesFiltered] = useState(notes);

  /**effects: to retrieve notes from the state*/
  useEffect(() => {
    console.log(`Loading..SearchBar`);
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    console.log(`[SearchBar]->Notes Changed`);
    if (!isEmpty(searchValue)) {
      let filteredNotes = getFilteredNotes(searchValue);
      setNotesFiltered(filteredNotes);
    } else setNotesFiltered(notes);
  }, [notes]);

  /**handlers */
  const handleInputChange = (e) => {
    //sets search string
    const searchStr = e.target.value.toLowerCase();
    setSearchValue(searchStr);

    //filter notes
    let filteredNotes = getFilteredNotes(searchStr);
    setNotesFiltered(filteredNotes);
  };

  /**function: to retrieve filtered notes based on search string */
  const getFilteredNotes = (searchStr) => {
    return notes?.filter((note) => note.content.includes(searchStr));
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center py-3 w-11/12 sm:w-8/12 md:w-6/12">
          <div className="border-b border-gray-200 p-2 px-4 flex items-center">
            <img src="/images/search.svg" alt="search icon" />
            <TextInputGroup
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleInputChange}
              value={searchValue}
              autoFocus
            />
            <Link to="/" className="flex items-center">
              <button className="text-sm px-4 py-2 text-bg-gray-400 hover:bg-blue-50 hover:text-blue-400 rounded-md">
                close
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* notes: filtered */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        {notesFiltered?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
