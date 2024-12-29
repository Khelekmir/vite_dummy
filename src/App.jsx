import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Main, { theme } from "./main"; // do not delete Main
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import { ThemeProvider } from '@mui/material/styles';
import Sermons from "./Sermons";
import { Box, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Box sx={{ position: 'fixed', top: 0, width: '100%' }}>
          <Navbar />
        </Box>
        <Box sx={{ border: '3px solid black' , height: '100vh', marginTop: '50px' }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sermons" element={<Sermons />} />
          </Routes>
        </Box>
        <Box sx={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
          <Footer />
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
