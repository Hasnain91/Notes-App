import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NoteForm from "../components/NoteForm";
import Spinner from "../components/Spinner";
import { getNotes, reset } from "../features/notes/noteSlice";
import NoteItem from "../components/NoteItem";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getNotes());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Notes Dashboard</p>
      </section>
      <NoteForm />
      <section className="content"></section>
      {notes.length > 0 ? (
        <div className="goals">
          {notes.map((note) => (
            <NoteItem key={note._id} note={note} />
          ))}
        </div>
      ) : (
        <h3>You have not made any note</h3>
      )}
    </>
  );
}

export default Dashboard;
