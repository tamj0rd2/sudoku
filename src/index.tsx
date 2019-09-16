import React from 'react'
import ReactDOM from 'react-dom'
import Board from '~components/Board'

function App(): JSX.Element {
  return <Board />
}

ReactDOM.render(<App />, document.getElementById('root'))
