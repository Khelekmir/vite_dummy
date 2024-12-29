import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      width="100%"
      height="50px"
      sx={{
        background: 'linear-gradient(to left, rgba(25,118,210,0) 0%, rgba(25,118,210,0.8) 100%)',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      }}
    >
      <Typography variant="body2" color="textSecondary" component="p">
        © placeholder
      </Typography>
    </Box>
  );
}

export default Footer;
