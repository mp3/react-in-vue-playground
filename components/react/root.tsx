import React from 'react'
import ReactDOM from 'react-dom'

export const Main = () => {
  return (
    <div>React in Vue component</div>
  )
}

export const render = (root: HTMLElement) => {
  ReactDOM.render(<Main />, root)
}
