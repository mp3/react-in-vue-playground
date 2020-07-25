import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }

  return (
    <div>
      {`Counter with React: ${count} `}
      <button onClick={add}>add</button>
    </div>
  )
}
