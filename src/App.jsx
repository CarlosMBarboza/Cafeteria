import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import HomePage from "./Pages/HomePage"
import GaleriaPage from './Pages/GaleriaPage'
import NosotrosPage from './Pages/NosotrosPage'
import ContactanosPage from './Pages/ContactanosPage'
import Footer from "./Components/Footer"
import EncontranosPage from './Pages/EncontranosPage'


const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
        <Nav />
        <Header/>
          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Galeria" element={<GaleriaPage/>} />
        <Route path="Nosotros" element={<NosotrosPage/>} />
        <Route path="Contactanos" element={<ContactanosPage/>} />
        <Route path="Encontranos" element={<EncontranosPage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
