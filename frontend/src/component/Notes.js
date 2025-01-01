import React from "react";
import noteContext from "../context/notes/NoteContext";
import { useContext, useEffect, useRef, useState } from "react";
import NoteItems from "./NoteItems";
import Addnote from "./Addnote";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
import "../styles/notes.css";
import Footer from "./Footer";

const Notes=(props)=> {
  const { showAlert } = props;

  const context = useContext(noteContext);
  const { notes, getNote, editnote } = context;
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNote();
    } 
    else {
      navigate("/login");
    }
  }, [navigate, getNote]);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentnote) => {
    ref.current.click();
    setNote({
      id: currentnote._id,
      etitle: currentnote.title,
      edescribtion: currentnote.describtion,
    });
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescribtion: "",

});

  const handleClick = (e) => {
    e.preventDefault();
    editnote(note.id, note.etitle, note.edescribtion);
    refClose.current.click();
    setNote({ etitle: "", edescribtion: ""
    });
   showAlert("Updated Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header/>
    <div  style={{paddingTop:"120px"}}>
      
      <Addnote showAlert={showAlert} />

      <button
        type="button"
        ref={ref}
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ display: "none" }} // Toggling visibility
        >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="" className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    placeholder="Joindus"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="describtion" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescribtion"
                    value={note.edescribtion}
                    name="edescribtion"
                    onChange={onChange}
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                disabled={note.etitle.length < 5 || note.edescribtion.length < 5}
                onClick={handleClick}
                className="btn btn-primary"
                >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
      <div className="logo container  my-3 row">
        <h1>Your Nutrition </h1>
        {notes.map((note) => {
          return (
            <NoteItems
            key={note._id}
              note={note}
              updateNote={updateNote}
              showAlert={showAlert}
            />
          );
        })}
      </div>
      <Footer/>
    </>
  );
}
export default Notes;