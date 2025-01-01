import React from "react";
import noteContext from "../context/notes/NoteContext";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
import "../styles/notes.css";

// import"../images"
import { useContext, useState } from "react";

const Addnote = (props) => {
  const context = useContext(noteContext);
  const { addnote } = context;

  const [note, setNote] = useState({ title: "", describtion: "" });


  const handleClick = (e) => {
    e.preventDefault();
    if (!note.title || !note.describtion) {
      alert("Please fill out all fields");
      return;
    }
    addnote(note.title, note.describtion);
    setNote({
      title: "",
      describtion: "",})
  };


  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  return (
    <div className="container">
      <h1 >Add Nutritions</h1>
      <form action="" className="my-3">
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" value={note.title} name="title" placeholder="e.g : Protein" onChange={onChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="describtion" className="form-label">Description</label>
            <textarea className="form-control" id="describtion" value={note.describtion} name="describtion" placeholder="I have Taken 10 gm protein on monday"onChange={onChange} rows="3"></textarea>
        </div>
        <div className="col-auto">
        <button type="submit" disabled={note.title.length < 5 || note.describtion.length<5} className="btn btn-primary mb-3" onClick={handleClick}>Add Note</button>
      </div>
      </form>
    </div>
  );
};

export default Addnote;

