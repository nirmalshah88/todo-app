import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log("test input", input);

  // when the app loads, we need to list to the db and fetch new todos as they get added/removed
  // provide a function using arrow function and give dependancies, if empty array then runs only once
  useEffect(() => {
    // this code fires when the App.js loads
    onSnapshot(
      query(collection(db, "todos"), orderBy("timestamp", "desc")),
      (snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      }
    );
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    // console.log("test button", input);

    event.preventDefault(); // this will stop page refresh

    try {
      const docRef = addDoc(
        collection(db, "todos"),
        // orderBy("timestamp", "desc"),
        {
          todo: input,
          timestamp: serverTimestamp(),
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document :", e);
    }
    // setTodos([...todos, input]); // append todo to existing array

    setInput(""); // clear input after adding todo
  };

  return (
    <div className="App">
      <h1>Get Shit Done</h1>

      <form>
        <FormControl>
          <InputLabel>✔ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>
        <Button disabled={!input} onClick={addTodo} type="submit">
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
