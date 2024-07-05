import React, { useContext, useState } from 'react';
import { NotesContext } from '../Context/NoteContext';
import { AlertsContext } from '../Context/AlertContext';
import Alert from './Alert';
export default function addNote_API() {
  const { addNote_API } = useContext(NotesContext);
  const {showAlert}= useContext(AlertsContext);
  const [note, setNote] = useState({ title: '', description: '', tag: '' });
  const [error, setError] = useState('');

  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!note.title.trim() || !note.description.trim() || !note.tag.trim()) {
      setError('Please fill out all fields');
      return;
    }

    // If all fields are filled, add the note
    addNote_API(note.title, note.description, note.tag);

    // Clear input fields and error state after submission
    setNote({ title: '', description: '', tag: '' });
    showAlert('Note Added Successfully', 'success');
    setError('');
  };

  return (
    <div className="container d-block">
      {/* <Alert/> */}
      <h3>Add a Note</h3>
      <form className='col-md-6' id="addNote_APIs" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleOnChange}
          />
          <label htmlFor="title">Title</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            value={note.description}
            onChange={handleOnChange}
          />
          <label htmlFor="description">Description</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Tag"
            value={note.tag}
            onChange={handleOnChange}
          />
          <label htmlFor="tag">Tag</label>
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <div className="form-floating mb-3">
          <button type="submit" className="btn btn-success">Add Note</button>
        </div>
      </form>
    </div>
  );
}
