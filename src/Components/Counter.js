import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(1)

    const plusFunc = () =>{
        setCounter(counter => counter +1)
    }
    const minusFunc = () =>{
        if(counter > 0){
            setCounter(counter => counter-1)
        }
    }
    const ressetFunc = ()=>{
        setCounter(0)
    }

  return (
    <div>
      <button onClick={plusFunc}>+</button>
      <span >{counter}</span>
      <button onClick={minusFunc}>-</button>
      <button onClick={ressetFunc}>resset</button>
    </div>
  )
}

export default Counter
