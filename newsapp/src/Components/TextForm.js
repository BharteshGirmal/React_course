import React, { useState } from 'react'

export default function TextForm(props) {
  // usestate : used to save the state of the component
  
  const [text, setText] = useState("");

  const handleUpClick= ()=>{
    // console.log("HandleUpClick is clicked ...");
    // setText("you have clicked HandleUpClick");
    let newText = text.toUpperCase();
    // alert(newText);
    setText(newText);
    props.showAlert("Converted to UpperCase ", "success");
    

  }

  const handleLowerClick=()=>{
    let newText = text.toLowerCase();
    // alert(newText);
    setText(newText);
    props.showAlert("Converted to LowerCase ", "success");
  }

  const handleCopyClick = () =>{
    var text2 = document.getElementById("mybox");
    text2.select();
    text2.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text2.value);
    props.showAlert("text copied ", "info");

  }

  const handleClearClick=()=>{
    setText('');
    props.showAlert("text is cleared ", "danger");

  }
  const handleChange=(event)=>{
    // console.log("handleChnage is changed ...");
    setText(event.target.value);

  }
  // to set the value
  //setText("Bhartesh");

  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'black', backgroundColor:props.mode ==='dark'?'#2c267c':'white'}} >
      <h2>{props.heading}</h2>
      <div className="mb-3" >
        <textarea  id="mybox" cols="30" rows="10" onChange={handleChange} value={text} className="form-control" style={{backgroundColor:props.mode ==='dark'?'#38377f':'white', color:props.mode ==='dark'?'white':'black'}}></textarea>

      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
      <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase </button>
      <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h3>Your text Summary </h3>
      <p> {text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} Words and {text.length} Characters </p>
      <p> {0.008 * text.split(" ").length} Minutes are sufficient to read this Text </p>
    </div>
    <div className="container-fluid my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
      <h4>Preview</h4>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div> 
    </>
  )
}
