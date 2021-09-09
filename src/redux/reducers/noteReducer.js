import {
  GET_NOTE,
  GET_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from "./../actions/types";

const initialState = {
  notes: [],
  note: {},
};

const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTE:
      return {
        ...state,
        note: payload,
      };
    case GET_NOTES:
      return {
        ...state,
        notes: payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [payload, ...state.notes],
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? (note = payload) : note
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
