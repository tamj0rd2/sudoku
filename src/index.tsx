import React from 'react'
import ReactDOM from 'react-dom'
import Board from '~components/Board'
import Palette from '~components/Palette'

function App(): JSX.Element {
  return (
    <>
      <Board />
      <Palette />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
