import React from 'react'

function Count() {

    const { count, increment, decrement } = useCustomCount()


  return ( 
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Count


