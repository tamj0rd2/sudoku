import React, { useReducer } from 'react'
import Cell from './Cell'
import Reducer from '~reducers'
import * as dimens from '~constants/dimens'

const getCellId = (col: number, row: number) => `${col},${row}`

const initBoardState = (): BoardState => {
  const cells = Array.from({ length: 9 }, (_, x) => {
    return Array.from(
      { length: 9 },
      (_, y): CellData => {
        const col = y + 1
        const row = x + 1
        return {
          col,
          row,
          //id: `${col},${row}`,
          //isSelected: false,
          //answer: '',
          //marks: [1, 2, 7],
          // solution: ''
        }
      },
    )
  })

  return { cells, selectedCell: cells[0][0] }
}

export default function Board(): JSX.Element {
  const [state, dispatch] = useReducer(Reducer, initBoardState())

  return (
    <div
      style={{ width: dimens.BOARD_WIDTH }}
      tabIndex={0}
      onKeyDown={e => dispatch({ type: 'SELECT_RELATIVE', payload: e.key })}
    >
      {Array.from({ length: 9 }).map((_, y) => {
        const row = y + 1
        return (
          <React.Fragment key={row}>
            {Array.from({ length: 9 }).map((_, x) => {
              const col = x + 1
              const cellId = getCellId(col, row)

              return (
                <Cell
                  selectCell={() => dispatch({ type: 'SELECT_ABSOLUTE', payload: { col, row } })}
                  isSelected={state.selectedCell.col === col && state.selectedCell.row === row}
                  answer={col}
                  setAnswer={() => {}}
                  key={cellId}
                />
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}
