import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./Components/Note";
function App(){
  const[notes,setNotes] = useState([]);
  function addNote(newNote){
    setNotes((prevNotes) =>{
      return [...prevNotes,newNote];
    })
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
export default App;
