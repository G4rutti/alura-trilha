// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './Pages/Inicio/Inicio'
import SobreMim from './Pages/SobreMim/SobreMim'

import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import PaginaPadrao from './Components/PaginaPadrao/PaginaPadrao'
import Post from './Pages/Post/Post'
import PaginaNaoEncontrada from "./Pages/PaginaNaoEncontrada/PaginaNaoEncontrada"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio/>}/>
          <Route path='sobremim' element={<SobreMim/>}/>
          <Route path='posts/:id' element={<Post/>}/>
        </Route>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
