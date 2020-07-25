import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom'
import { Counter } from './counter'

export const Main = () => {
  return (
    <div style={style}>
      {'React in Vue component'}
      <Counter />
    </div>
  )
}

const style: CSSProperties = {
  border: '2px solid #00d8ff',
  marginBottom: '12px'
}

export const render = (root: HTMLElement) => {
  ReactDOM.render(<Main />, root)
}
