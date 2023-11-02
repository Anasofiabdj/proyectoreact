import { useEffect, useState } from "react"
import { mFetch } from "../../utilidades/mFetch"
import { Link, useParams } from "react-router-dom"




function ItemListContainer({greetings='saludo'}) {
  const [productos, setProductos] =useState ([])

  const {cid} = useParams()

  useEffect (()=>{
    if (cid) {
      mFetch ()
      .then (
        resultado => setProductos (resultado.filter(product => product.category ===cid)))
      .catch(error => console.log(error))
      .finally(()=> console.log ('ultimo'))

    }else {
    mFetch ()
    .then (
      resultado => setProductos (resultado))
    .catch(error => console.log(error))
    .finally(()=> console.log ('ultimo'))
    }
  }, [cid]) 

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
             
                <Link to={`/details/${product.id}`}>
                <button className= "btn btn-outline-dark w-100">Ver más</button>
                </Link>
             </div>
            
              </div>
            

      
      )}
      </div>
</>
)
  }

export default ItemListContainer
