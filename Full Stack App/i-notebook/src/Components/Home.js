import React, { useContext, useRef, useState } from "react";
import { NoteContext } from "../Context/NoteState";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
const Home = () => {

const context = useContext(NoteContext)
const {editNote_api}= context;
const ref=useRef(null);
const refClose=useRef(null);
const [notes, setNotes] = useState({ id:"", etitle: "", edescription: "", etag: "" });
const updateNote=(currentNote)=>{
  ref.current.click();
  setNotes({id:currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
}
const {note, addNotes} = useContext(NoteContext);

const handleOnChange = (event) => {
  setNotes({ ...note, [event.target.name]: event.target.value });
};

const handleSubmit = (e) => {
  refClose.current.click();
  // to prevent from default aubmission of form
  editNote_api(note._id, note.etitle, note.edescription, note.etag);
};

  return (
    <div>
      <h2>Add a Note</h2>
      <AddNote/>
      {/* creating a form here */}

      <button ref={ref} type="button" className="btn btn-primary d none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form>
              <div className="mb-3 my-2">
                <label htmlFor="exampleInputEmail1" className="form-label"> Title </label>
                <input type="text"  className="form-control"  name="etitle" value={notes.etitle} id="title"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3 my-2">
                <label htmlFor="exampleInputPassword1" className="form-label">  Description </label>
                <input  type="password"  className="form-control"  name="edescription"  value={notes.edescription}  id="description"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="exampleCheck1">Tag:</label>
                <input  type="text"  className="form-check-input" name="etag"  value={notes.etag}  id="tag"
                  onChange={handleOnChange}
                />
              </div>
          </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleSubmit} type="button" className="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
          
      <div className="container my-4">
        <h2>Your Note</h2>
        <div className="d-flex">
          {notes.length === 0 && 'No Notes to Display...'}
        </div>
        {notes.map(()=>{ 
          return <NoteItem  key={notes._id} note={notes} updateNote={updateNote}/>
        })}
      </div>
    </div>
  );
};

export default Home;
