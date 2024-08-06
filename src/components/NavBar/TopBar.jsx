import * as React from "react";
import PropTypes from "prop-types";
import { Box, Button, MenuItem, Typography } from "@mui/material";

const logoStyle = {
    width: "140px",
    height: "auto",
    cursor: "pointer",
  };
  

const TopBar = ({ LoggedIn }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          ml: "-18px",
          px: 0,
        }}
      >
        <img
          src={
            "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
          }
          style={logoStyle}
          alt="logo of sitemark"
        />
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {
            LoggedIn==true?<>
          <MenuItem sx={{ py: "6px", px: "12px" }}>
            <Typography variant="body2" color="text.primary">
              TODOS
            </Typography>
          </MenuItem>
          <MenuItem sx={{ py: "6px", px: "12px" }}>
            <Typography variant="body2" color="text.primary">
              Profile
            </Typography>
          </MenuItem>
            </>:""
          }
          <MenuItem sx={{ py: "6px", px: "12px" }} >
            <Typography variant="body2" color="text.primary">
              About
            </Typography>
          </MenuItem>
        </Box>
      </Box>
      <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
             
              
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="./"
              >
                Sign In
              </Button>
            </Box>
    </>
  );
};

TopBar.propTypes = {
  LoggedIn: PropTypes.string.isRequired,
};

export default TopBar;
