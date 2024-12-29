import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Box, Container, Grid2, Typography } from "@mui/material";

function Home() {
    return (
        <Container sx={{ border: "1px solid black" }}>
            <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                <Typography variant="h4" >
                    Service time: 10:30 AM
                </Typography>
                <img
                    src="https://cdn.fireemblemwiki.org/8/84/FEH_Camilla_Bewitching_Beauty_02.png"
                    alt="Camilla the Bewitching Beauty"
                    width="100%" />

            </Box>
        </Container>
    );
}
export default Home;