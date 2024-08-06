import {  Box, Button, Paper, Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { DeleteRounded } from '@mui/icons-material';
const Task = () => {

  return (
   <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "80vw",
          height: 'auto',
          minWidth:300
        },
      }}
    >
        
      <Paper elevation={3} sx={{
        p:2,
        display:'flex',
        justifyContent:"space-between"
      }}>
        <Typography variant="h6" textAlign={'left'} >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto perferendis veniam corrupti sunt. Possimus magni iste iure eum laborum error ea quo vero. Placeat voluptas adipisci quidem aspernatur autem.
        </Typography>
        <Box display={'flex'}>
        <Button onClick={()=>{console.log("Hello")}}>
            <CheckRoundedIcon/>
        </Button>
        <Button onClick={()=>{console.log("delete")}}
            sx={{color:'red'}}>
            <DeleteRounded/>
        </Button>
        </Box>

      </Paper>
      
    </Box>
   </>
  )
}

export default Task;