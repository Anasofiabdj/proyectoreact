import { useState } from "react"

export const ItemCounter = () => {
    const [count, setCount] = useState(1)

    const handleSuma = () => { 
       setCount(count+1)
    }
    
    const handleResta = () => { 
        setCount(count-1)
    
    }

  return (

    <>
    <div>
      <p>{count}</p>
    </div>
    <div>
        <button onClick={handleSuma}> + </button>
        <button onClick={handleResta}> - </button>
    </div>
    </>

  )
}

