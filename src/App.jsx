import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import About from './components/about/ABout'
import Works from './components/works/Works'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';



const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#66FCF1',
    },
  },
});

function App() {
const [show, SetShow] = useState(false)

  return (

    <ThemeProvider theme={outerTheme}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
