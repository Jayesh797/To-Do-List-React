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
            <li style={{textDecoration:line?"line-through":'none',flex: '1'}}>{props.text}</li>
            <span  onClick={Cutit}>
                <DeleteIcon/>
            </span>
        </div>
        </>
    )
}

export default ListComponent;