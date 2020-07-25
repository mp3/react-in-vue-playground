import React from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './counter'

export const Main = () => {
  return (
    <div style={{ border: '2px solid #00d8ff', marginBottom: '12px'}}>
      {'React in Vue component'}
      <Counter />
    </div>
  )
}

export const render = (root: HTMLElement) => {
  ReactDOM.render(<Main />, root)
}
