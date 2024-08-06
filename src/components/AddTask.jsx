import React from "react";
import { Box, Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const AddTask = () => {
  const [Input, setInput] = React.useState("");
  const handleNewTask =()=>{

    console.log(Input);
    setInput('');
  }
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        gap={1}
        alignItems={"flex-end"}
      >
        <TextField
          id="task-input"
          label="Add Task Here"
          variant="standard"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e)=>e.key=="Enter"?handleNewTask():undefined}
        />
        <Button
          variant="outlined"
          sx={{ color: "green", borderColor: "green" }}
          onClick={handleNewTask}

        >
          <AddIcon />
        </Button>
      </Box>
    </>
  );
};
