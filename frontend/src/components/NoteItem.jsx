import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice";

function NoteItem({ note }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(note.createdAt).toLocaleString("en-PK")}</div>
      <h2>{note.text}</h2>
      <button onClick={() => dispatch(deleteNote(note._id))} className="close">
        X
      </button>
    </div>
  );
}

export default NoteItem;
