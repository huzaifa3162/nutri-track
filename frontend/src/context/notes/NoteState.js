import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

  const Notesinitial = [];

  const [notes, setNotes] = useState(Notesinitial);

  // Get ALl note
  const getNote = async () => {
    console.log("Fetching notes...");
    // const authtoken1=localStorage.getItem('token')
    // console.log(authtoken1)
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Fetched notes:", json);
  
      // Assuming setNotes is available in your context
      setNotes(json);
    } 
    
    catch (error) {
      console.error("Error fetching notes:", error);
    }
  };
  



  // Add A note
  const addnote = async (title, describtion, tag) => {
    console.log("Adding a new note...");
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body: JSON.stringify({ title, describtion, tag }),      
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json(); 
      console.log("Note added successfully:", data);
  
      // Addind the new note to the state that creaed upword
      setNotes((prevNotes) => [...prevNotes, data]);
    } catch (error) {
      console.error("Failed to add note:", error.message);
    }
  };
  
  // Delete a notes
  const deletenote = async (id) => {
    console.log(`Deleting note with id:${id}...`);
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/deletenote/${id}`, {
        method: "DELETE",
        headers: { // Corrected `header` to `headers`
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error(`Failed to delete note with id ${id}. Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Note deleted successfully:", json);
  
      // Update the notes state by removing the deleted note
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };
  

  //edit a notes
  const editnote = async (id, title, describtion, tag) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json",
        "auth-token" : localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, describtion, tag }),
    });
    const json = await response.json();
    console.log(json)

    let newNote=JSON.parse(JSON.stringify(notes))
    // logic to edit notes
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].describtion = describtion;
        newNote[index].tag = tag;
        break;
      }

    }
    setNotes(newNote)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addnote, deletenote, editnote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

