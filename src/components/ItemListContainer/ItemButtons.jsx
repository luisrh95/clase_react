import React, { useEffect, useState } from 'react'

const ItemButtons = ({id, stock, ComprarItem}) => {
    const [ count, setCount] = useState(1)
    

    const sumar = () =>{
        if(count < stock)
        setCount(count + 1 )
    }
    const restar = () =>{
        if(count > 1 )
        setCount(count - 1 )
    }


  return (
    <div className='ButtonContainer'>
        <div className="CounterButton">
            <button onClick={restar}>-</button>
             <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
        <button onClick={()=>ComprarItem(count)}>Comprar </button>
    </div>
  )
}

export default ItemButtons