import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(prop){

    function handleClick(event){
        prop.onDelete(prop.id);
        
        event.preventDefault();
    }
    return(
        <div className="note">
            <h1>{prop.title}</h1>
            <p>{prop.content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>

    );
}
export default Note;