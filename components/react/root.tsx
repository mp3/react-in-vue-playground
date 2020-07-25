import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './counter'

export const Main = () => {
  return (
    <div>
      {'React in Vue component'}
      <Counter />
    </div>
  )
}

export const render = (root: HTMLElement) => {
  ReactDOM.render(<Main />, root)
}
