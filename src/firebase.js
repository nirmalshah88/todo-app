import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBjX5jQ7nIqP5rNK5NMxrN8kSwrXL-I1k8",
  authDomain: "todo-list-app-7b83a.firebaseapp.com",
  projectId: "todo-list-app-7b83a",
  storageBucket: "todo-list-app-7b83a.appspot.com",
  messagingSenderId: "688756598300",
  appId: "1:688756598300:web:35491ecfd61dfde78e21d9",
  measurementId: "G-HD4V7L9VBZ",
});

const db = getFirestore(app);

export default db;
