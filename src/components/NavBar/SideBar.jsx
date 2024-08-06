import { Box, Button, Divider, MenuItem } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types'


const SideBar = ({LoggedIn}) => {
  return (
    <Box
      sx={{
        minWidth: "60dvw",
        p: 2,
        backgroundColor: "background.paper",
        flexGrow: 1,
      }}
    >
      {
        LoggedIn==true?<>
      <MenuItem>TODOS</MenuItem>
      <MenuItem>Profile</MenuItem>
        </>:""
      }
      <MenuItem>About</MenuItem>
      <Divider />
      <MenuItem>
        <Button
          color="primary"
          variant="contained"
          component="a"
          href="./"
          sx={{ width: "100%" }}
        >
          Sign in
        </Button>
      </MenuItem>
    </Box>
  );
};
SideBar.propTypes={
    LoggedIn : PropTypes.string.isRequired
}
export default SideBar;
