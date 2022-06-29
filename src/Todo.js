import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function Todo(props) {
  return (
    <List>
      <ListItemAvatar></ListItemAvatar>
      <ListItem>
        <ListItemText primary={props.text} secondary="deadline" />
      </ListItem>
    </List>
  );
}

export default Todo;
