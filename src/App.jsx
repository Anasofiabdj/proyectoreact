import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Tienda from './components/Tienda/Tienda'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemCounter } from './components/ItemCounter/ItemCounter'
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'



const onAdd= cant => {
    console.log(cant)
}


function App() {
  
 return ( 

    <BrowserRouter>
       <NavBar />
        <Routes>
            <Route path= '/' element= {<ItemListContainer greetings='Bienvenidos 🌷' />} />
            <Route path= '/category/:cid' element= {<ItemListContainer greetings='Bienvenidos 🌷' />} />
            <Route path= '/tienda' element= {<Tienda />} />
            <Route path= '/cart' element= {<CartContainer/>} />
            <Route path= '/details/:pid' element= {<ItemDetailContainer/>} />
          
            <Route path= '*' element={<Navigate to= '/' />} />
        </Routes>
        <ItemCounter initial={1} stock= {5} onAdd={onAdd}/>
    </BrowserRouter>

    )

}

export default App
