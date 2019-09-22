import React, { useReducer } from 'react'
import Cell from './Cell'
import Reducer from '~reducers'
import generateBoard from '~logic/generator'

export default function Board(): JSX.Element {
  const [state, dispatch] = useReducer(Reducer, null, generateBoard)

  return (
    <div
      id="board"
      tabIndex={0}
      onKeyDown={e => dispatch({ type: 'SELECT_RELATIVE', payload: e.key })}
    >
      {Object.entries(state.cells)
        .sort((a, b): number => {
          // TODO: this is gross. do something about it
          const aData = a[1]
          const bData = a[1]

          if (aData.row < bData.row) {
            return -1
          }

          if (aData.row > bData.row) {
            return 1
          }

          if (aData.col < bData.col) {
            return -1
          }

          if (aData.col > bData.col) {
            return -1
          }

          return 0
        })
        .map(([cellId, cellData], i) => {
          const { col, row, answer } = cellData

          return (
            <Cell
              {...cellData}
              dispatch={dispatch}
              isSelected={state.selectedCell.col === col && state.selectedCell.row === row}
              answer={answer}
              key={cellId}
            />
          )
        })}
    </div>
  )
}
