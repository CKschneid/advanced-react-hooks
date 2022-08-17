// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js
import * as React from 'react'

const countReducer = (state, action) => {
  if (action.type == 'increment') {
    return {...state, count: state.count + action.payload}
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const increment = () => dispatch({type: 'increment', payload: step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
