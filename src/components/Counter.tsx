import React, { useState } from 'react'

const initializeCounter = () => {
  for (let i = 0; i < 20000; i++) {
    console.log(i)
  }
  return 0
}

const Counter = () => {
  const [count, setCount] = useState(() => {
    const initialValue = initializeCounter()
    return initialValue
  })

  return (
    <button
      onClick={() => {
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 5)
      }}
    >
      {count}
    </button>
  )
}

export default Counter
