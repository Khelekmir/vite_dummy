import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useContextStore } from "./ContextStore";

function Nav() {

    // const { urls } = useContextStore();

    return (
        <AppBar sx={{
            outline: '2px solid red',
            background: 'linear-gradient(to right, rgba(25,118,210,0) 0%, rgba(25,118,210,0.8) 100%)'
        }}>
            <Box
                marginLeft={"auto"}
                display="flex"
                height="50px"
                alignItems="center"
            >
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/"
                    color="inherit"
                    style={{ marginRight: '20px' }}
                >
                    Main
                </Typography>
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/home"
                    color="inherit"
                    style={{ marginRight: '20px' }}
                >
                    Service
                </Typography>
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/Sermons"
                    color="inherit"
                    style={{ marginRight: '20px' }}
                >
                    Sermons
                </Typography>
            </Box>
        </AppBar>
    );
}

export default Nav;

