import React, { useState } from "react";
import "./Todo.css";
import { doc, deleteDoc } from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";
import db from "./firebase";

function Todo(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}></button>
        </div>
      </Modal>
      <List>
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
