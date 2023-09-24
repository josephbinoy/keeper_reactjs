import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { amber } from "@mui/material/colors";

function CreateArea(props) {

  const [createNote, setCreateNote]=useState({title:"", content:""});
  const [isCreating, setIsCreating]=useState(false);

  const theme = createTheme({
    palette: {
      primary:{
        main: amber[500],
        dark: amber[600]
      }
    }
  });

  function handleChange(e){
    const toAddString=e.target.value;
    const callerName=e.target.name;
    setCreateNote((prevValue)=>{
      return{
        ...prevValue,
        [callerName]:toAddString
      }
    })
  }

  function expandArea(){
    setIsCreating(true);
  }

  return (
    <div>
    
      <form className="create-note" onSubmit={(e)=>{
        props.add(createNote);
        e.preventDefault();
        setCreateNote({title:"", content:""});
        setIsCreating(false);
      }}>
        {isCreating&&<input onChange={handleChange} name="title" placeholder="Title" value={createNote.title}/>}
        <textarea onClick={expandArea} onChange={handleChange} name="content" placeholder="Take a note..." rows={isCreating?"3":"1"} value={createNote.content}/>
        <ThemeProvider theme={theme}>
        <Zoom in={isCreating}>
        <Fab color="primary" style={{color:"white"}} type="submit">
        <AddIcon />
      </Fab>
      </Zoom>
      </ThemeProvider>
      </form>
    </div>
  );
}

export default CreateArea;
