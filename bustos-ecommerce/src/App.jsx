import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Tienda from './components/Tienda/Tienda'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'






function App() {
  
 return (
  <>
  <NavBar />
  <Tienda />
  <ItemListContainer greetings='Bienvenidos'/>
  </>
 )

}

export default App
