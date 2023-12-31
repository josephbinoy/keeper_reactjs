import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes]=useState([]);

  function addNote(note){
    setNotes((oldNotes)=>{
      return [...oldNotes, note]
    })
  }

  function deleteNote(index){
    setNotes((oldNotes)=>{
      //using splice
      // oldNotes.splice(index, 1);
      // const newNotes=[...oldNotes]; //to create "deep" clone?
      // return newNotes;
      return oldNotes.filter((note, i)=>i!==index)
    })
  }
  return (
    <div>
      <Header />
      <CreateArea add={addNote}/>
      {notes.map((note, index)=><Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote}/>)}
      <Footer />
    </div>
  );
}

export default App;
