import React, { useContext } from "react";
import {NoteContext} from "../Context/NoteState";
import { AlertsContext } from "../Context/AlertsState";
export default function NoteItem(props) {
  const {showAlert} = useContext(AlertsContext);
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="d-flex-align-item-center">
        <div className="card my-3">
          <div className="card-header">{props.note.title}</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{props.note.descriptiom}</p>
              <i
                class="fa-solid fa-trash mx-3"
                onClick={() => {
                  deleteNote(props.note._id);
                }}
              ></i>
              <i
                class="fa-solid fa-user-pen mx-3"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
              <footer className="blockquote-footer">
                <cite title="Source Title">{props.note.tag}</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
