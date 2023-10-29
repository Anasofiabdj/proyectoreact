import { useEffect, useState } from "react"
import { mFetch } from "../../utilidades/mFetch"



function ItemListContainer({greetings='saludo'}) {
  const [productos, setProductos] =useState ([])

  useEffect (()=>{
    mFetch ()
    .then (
      resultado => setProductos (resultado)
      
    )
    .catch(error => console.log(error))
    .finally(()=> console.log ('ultimo'))
  }, [])
 
  console.log (productos)
  return (
    <>
        <div>
          {greetings}
        </div>
         
        <div className="d-flex justify-content-center align-items-center">
          {productos.map(product=>  
          <div className="card w-25">
             <img src= {product.imageUrl} className= "card-img-top" />
    
             <div className= "card-body">
             <p> Nombre: {product.name}</p>
             <p> Precio: {product.price}</p>
             <p> Categoria: {product.category}</p>
             </div>
             <div className= "card-footer">
            
             <button className= "btn btn-outline-dark w-100">Ver más</button>

             </div>
            
              </div>
            

      
      )}
      </div>
</>
)
  }

export default ItemListContainer
