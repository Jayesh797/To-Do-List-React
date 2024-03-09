import React, { useState } from "react";
import { Button } from "@mui/material";
import ListComponent from "./ListComponent";
import AddCircleIcon from '@mui/icons-material/AddCircle';
const ToDolist = () => {
    const [item, setItem] = useState()
    const [newitem, setNewItem] = useState([])
    const itemevent = (event) => {
        setItem(event.target.value)
    }
    const AddNew = () => {
        setNewItem((prevVal) => {
            return [...prevVal, item]
        })
        setItem(' ')
    }
    return (
        <>
            <div className="main_div">
                <div className="centre_div">
                    <br />
                    <h1>TO DO LIST</h1>
                    <br />
                    <input type="text" value={item} placeholder="Enter item" onChange={itemevent} />
                    <Button className="button" onClick={AddNew}>
                        <AddCircleIcon />
                    </Button>
                </div>
                <ol>
                    {
                        newitem.map((val) => {
                            return <ListComponent text={val} />
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default ToDolist;