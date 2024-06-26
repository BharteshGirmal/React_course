import React, { createContext, useState } from 'react';

// Define initial notes data
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

// Create context
export const NotesContext = createContext();

// Create provider component
export const NoteState = ({ children }) => {
  const [notes, setNotes] = useState(initialNotes);

  // Add a Note
  const addNote = (title, description, tag) => {
    const newNote = {
      _id: Date.now().toString(), // Example of generating a unique ID
      _user: "45452290876543456766",
      title,
      description,
      tag,
      date: new Date().toISOString().slice(0, 10), // Example of formatting date
    };
    setNotes([...notes, newNote]);
    // Call API to add note here if needed
  };

  // Delete a Note
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note._id !== id);
    setNotes(updatedNotes);
    // Call API to delete note here if needed
  };

  // Edit a Note (API version)
  const editNote2 = (id, title, description, tag) => {
    // Make a deep copy of the notes array
    const updatedNotes = notes.map((note) =>
      // Check if the current note's _id matches the id passed to the function
      note._id === id
        // If they match, create a new object with updated title, description, and tag
        ? { ...note, title, description, tag }
        // If they don't match, return the original note object
        : note
    );
  
    // Assuming setNotes is a state setter function (for example, in React)
    setNotes(updatedNotes);
  };
  

  const editNote = async (id, title, description, tag) => {
    try {
      // Example of API call to edit note
      const response = await fetch(`http://localhost:4000/api/notes/editnote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": "23456789cvbn5688uy34576767",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        throw new Error("Failed to edit note");
      }

      const updatedNote = await response.json();

      // Update state with edited note
      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setNotes(updatedNotes);

      return updatedNote;
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  // Fetch all Notes from API
  const fetchAllNotes = async () => {
    try {
      // Example of API call to fetch all notes
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
    }
  };

  // Delete a Note via API
  const deleteNoteAPI = async (id) => {
    try {
      // Example of API call to delete note
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
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Context value
  const contextValue = {
    notes,
    addNote,
    deleteNote,
    editNote,
    editNote2,
    fetchAllNotes,
    deleteNoteAPI,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};
