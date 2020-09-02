import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Zoom from "@material-ui/core/Zoom";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}>
<div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteOutlineIcon />
      </button>
    </div>
    </Zoom>
    
  );
}

export default Note;
