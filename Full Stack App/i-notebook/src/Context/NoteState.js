import React, { createContext, useContext, useState } from "react";
// import { AlertsContext } from "./AlertsState";

// Create a new context for notes
const NoteContext = createContext();

const initialNotes = [
  {
    _id: "34567890876543456766",
    _user: "45452290876543456766",
    title: "Note : 1",
    description: "description : 1",
    tag: "general",
    date: "2024-06-21",
  },
  {
    _id: "34567890876543456769",
    _user: "45452290876543456766",
    title: "Note : 2",
    description: "description : 2",
    tag: "entertainment",
    date: "2024-06-21",
  },
  {
    _id: "34567890876543456770",
    _user: "45452290876543456766",
    title: "Note : 3",
    description: "description : 3",
    tag: "health",
    date: "2024-06-21",
  },
  {
    _id: "34567890876543456771",
    _user: "45452290876543456766",
    title: "Note : 4",
    description: "description : 4",
    tag: "logistics",
    date: "2024-06-21",
  },
  {
    _id: "34567890876543456772",
    _user: "45452290876543456766",
    title: "Note : 5",
    description: "description : 5",
    tag: "personal",
    date: "2024-06-21",
  },
  {
    _id: "34567890876543456773",
    _user: "45452290876543456766",
    title: "Note : 6",
    description: "description : 6",
    tag: "automobile",
    date: "2024-06-21",
  },
];

const NoteState = (props) => {
  const [notes, setNotes] = useState(initialNotes);
  // const { showAlert } = useContext(AlertsContext);

  // Add a Note
  const addNotes = (title, description, tag) => {
    const newNote = {
      _id: Date.now().toString(), // Example of generating a unique ID
      _user: "45452290876543456766",
      title,
      description,
      tag,
      date: new Date().toISOString().slice(0, 10), // Example of formatting date
    };
    setNotes([...notes, newNote]);
    // showAlert("New Note added", "success");
  };

  // Delete a Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note._id !== id);
    setNotes(updatedNotes);
    // showAlert("Note deleted", "danger");
  };

  // Edit a Note
  const editNote_api = async (id, title, description, tag) => {
    try {
      const response = await fetch(`http://localhost:4000/api/notes/editnote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": "23456789cvbn5688uy34576767",
        },
        body: JSON.stringify({ title, description, tag }), // Corrected usage of title, description, tag
      });

      if (!response.ok) {
        throw new Error("Failed to edit note");
      }

      const updatedNote = await response.json();

      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );

      setNotes(updatedNotes);
      // showAlert("Note updated", "success");
      return updatedNote;
    } catch (error) {
      console.error("Error editing note:", error);
      // showAlert("Failed to edit note", "danger");
    }
  };

  // Get all Notes from API
  const getallNote_api = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/notes/fetchallnotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": "23456789cvbn5688uy34576767",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
      // showAlert("Failed to fetch notes", "danger");
    }
  };

  // Delete a Note via API
  const deleteNote_api = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": "23456789cvbn5688uy34576767",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
      // showAlert("Note deleted", "danger");
    } catch (error) {
      console.error("Error deleting note:", error);
      // showAlert("Failed to delete note", "danger");
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNotes,
        deleteNote,
        editNote_api,
        deleteNote_api,
        getallNote_api,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteState, NoteContext };
