import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListComponent=(props)=>
{
    const [line,setLine]=useState(false)
    const Cutit=()=>
    {
        setLine(true)
    }
    return (
        <>
        <div className="todo_style">
            <span  onClick={Cutit}>
                <DeleteIcon/>
            </span>
            <li style={{textDecoration:line?"line-through":'none'}}>{props.text}</li>
        </div>
        </>
    )
}

export default ListComponent;