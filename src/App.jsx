import { Route, Routes } from "react-router-dom"
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
// import { ThemeProvider } from "./context/ThemeContext"


function App() {


  return (
    <>
  
    {/* <ThemeProvider> */}
        <Navbar />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/map' element={<Map />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
    {/* </ThemeProvider> */}
    </>
  )
}

export default App
