import React, { useEffect } from "react";
import { useContext } from "react";
import { NoteContext } from "../Context/NoteState";

import { AlertsContext } from "../Context/AlertsState";
import NoteItem from "./NoteItem";
export default function Notes() {
  const {showAlert} = useContext(AlertsContext);
  const { notes} = useContext(NoteContext);

//   useEffect(()=>{
//     getallNote_api;
//   },[1])

  return (
    <div className="container-my-2 text-center">
      <span>Your Saved Notes</span>
      <div className="row">
        {/* {getallNote_api.map(() => { */}
        {notes.map(() => {
          return <NoteItem key={notes._id} note={notes} />;
        })}
      </div>
    </div>
  );
}
