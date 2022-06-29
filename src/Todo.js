import React, { useState } from "react";
import "./Todo.css";
import { doc, deleteDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Dialog,
  Button,
} from "@mui/material";
import db from "./firebase";

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    // update the todo with the new input text
    const docRef = doc(db, "todos", props.todo.id);
    updateDoc(docRef, {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setOpen(false);
    setInput("");
  };

  return (
    <>
      <Dialog open={open} onClose={(e) => setOpen(false)}>
        <div className="todo__dialog">
          <h1>I am a modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Dialog>
      <List className="todo__list">
        <ListItemAvatar></ListItemAvatar>
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="deadline" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>Edit</button>
        <DeleteForeverIcon
          onClick={(event) => deleteDoc(doc(db, "todos", props.todo.id))}
        />
      </List>
    </>
  );
}

export default Todo;
