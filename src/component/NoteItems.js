import React ,{useContext} from "react";
import noteContext  from "../context/notes/NoteContext";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
import "../styles/notes.css";

const NoteItems = (props) => {
  const context = useContext(noteContext);
  const { deletenote } = context;
  const { note, updateNote } = props;

  return (
    <div className="note-card">
      <h5>{note.title}</h5>
      <p>{note.describtion}</p>
      <div>
        <i
          className="fa-solid fa-trash"
          onClick={() => {
            deletenote(note._id);
            props.showAlert("Deleted Successfully", "success");
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square mx-3"
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </div>
    </div>
  );
};

export default NoteItems;
