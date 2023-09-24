import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function Note(props) {
  const [mouseIsOver, setMouseIsOver]=useState(false);

  function fillIcon(){
    setMouseIsOver(true);
  }

  function emptyIcon(){
    setMouseIsOver(false);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onMouseOver={fillIcon} onMouseOut={emptyIcon} onClick={()=>{props.delete(props.id)}}>{mouseIsOver?<DeleteIcon/>:<DeleteOutlineIcon />}</button>
    </div>
  );
}

export default Note;
