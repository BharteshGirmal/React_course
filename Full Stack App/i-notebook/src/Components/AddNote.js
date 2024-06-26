import React, { useContext, useState } from "react";
import { NoteContext } from "../Context/NoteState";
export default function AddNote() {
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const {addNotes} = useContext(NoteContext);

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // to prevent from default aubmission of form
    addNotes(note.title, note.description, note.tag);
    const form = document.getElementById('addNotes');
    form.reset();
  };
  return (
    <div className="container my-4">
      <form id="addNotes">
        <div className="mb-3 my-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="title"
            value="title"
            id="title"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 my-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Descriptionh
          </label>
          <input
            type="password"
            className="form-control"
            name="description"
            value="description"
            id="description"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="exampleCheck1">
            Tag:
          </label>
          <input
            type="text"
            className="form-check-input"
            name="tag"
            value="tag"
            id="tag"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Add Note
        </button>
      </form>
    </div>
  );
}
