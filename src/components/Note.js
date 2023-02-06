import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Note.css";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="Note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
