import React, { useState, useContext } from 'react';
import Addnote from './Addnote';
import { NotesContext } from '../Context/NoteContext';

export default function HomePage() {
  // Using useContext to access notes state and functions from NoteState
  const { notes, editNote2, deleteNote } = useContext(NotesContext);

  const [showModal, setShowModal] = useState(false);
  const [modalNote, setModalNote] = useState(null); // To track which note is being edited

  const handleSaveClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalNote(null); // Reset modal note state
  };

  const handleUpdateNote = (note) => {
    setModalNote(note); // Set the note to be updated in the modal
    setShowModal(true);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  const handleModalSaveChanges = () => {
    console.log(modalNote);
    if (modalNote) {
      editNote2({
        id: modalNote._id,
        title: modalNote.title,
        description: modalNote.description,
        tag: modalNote.tag
      });
      setShowModal(false);
      setModalNote(null); // Reset modal note state
    }
  };

  return (
<>
  <Addnote />
  <div className={`modal fade ${showModal ? 'show' : ''} border border-dark shadow-lg p-4 `} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header text-light" style={{backgroundColor:'rgb(36 83 130)'}}>
          <h5 className="modal-title">Edit Note</h5>
          <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
        </div>
        <div className="modal-body bg-info text-light" style={{color:'rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;}'}}>
          {modalNote && (
            <form>
              <div className="mb-3">
                <label htmlFor="modalTitle" className="form-label"><b>Title</b></label>
                <input type="text" className="form-control" id="modalTitle" value={modalNote.title} onChange={(e) => setModalNote({ ...modalNote, title: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="modalDescription" className="form-label"><b>Description</b></label>
                <input type="text" className="form-control" id="modalDescription" value={modalNote.description} onChange={(e) => setModalNote({ ...modalNote, description: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="modalTag" className="form-label"><b>Tag</b></label>
                <input type="text" className="form-control" id="modalTag" value={modalNote.tag} onChange={(e) => setModalNote({ ...modalNote, tag: e.target.value })} />
              </div>
            </form>
          )}
        </div>
        <div className="modal-footer text-light" style={{backgroundColor:'rgb(36 83 130)'}}>
          <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
          <button type="button" className="btn btn-primary" onClick={handleModalSaveChanges}>Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-6">
    <h3>Your Notes</h3>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {notes.map((note) => (
        <div key={note._id} className="col">
          <div className="card">
            <div className="card-body text-center">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title">{note.title}</h5>
                <div>
                  <i className="fa-solid fa-trash mx-3" onClick={() => handleDeleteNote(note._id)}></i>
                  <i className="fa-solid fa-user-pen mx-3" onClick={() => handleUpdateNote(note)}></i>
                </div>
              </div>
              <p className="card-text">{note.description}</p>
              <p className="card-text">{note.tag}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

  );
}

