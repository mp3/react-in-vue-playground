import React, { useEffect, useReducer, Reducer } from 'react'

type State = {
  text: string
}

const initialState: State = {
  text: ''
}

type Action = 
  | { type: 'input', value: string }

const reducer: Reducer<State, Action> = (_state, action) => {
  switch (action.type) {
    case 'input':
      return {
        text: action.value
      }
    default:
      throw new Error()
  }
}

export const InputText = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    document.title = state.text
  }, [state])

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value

    dispatch({
      type: 'input',
      value
    })
  }

  return (
    <div>
      set title: <input type='text' onInput={onInput} />
    </div>
  )
}