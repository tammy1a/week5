import { IconButton, TextField } from "@mui/material/";
import AddIcon from "@mui/icons-material/Add";

const InputTask = ({input,setInput,addTask}) => {
  return (
    <>
      <div style={{display:"flex", justifyContent:"center",
        alignItems:"end",mt:1,
      }}>
        <TextField id="add-task-input" label="Add Task Here" variant="standard" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <IconButton aria-label="add" size="medium" onClick={addTask}>
          <AddIcon color="primary" fontSize="inherit" />
        </IconButton>
      </div>
    </>
  );
};

export default InputTask;
