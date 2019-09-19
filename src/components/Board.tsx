import React, { useReducer } from 'react'
import Cell from './Cell'
import Reducer from '~reducers'
import * as dimens from '~constants/dimens'
import generateBoard from '~logic/generator'

export default function Board(): JSX.Element {
  const [state, dispatch] = useReducer(Reducer, null, generateBoard)

  const boardStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: dimens.BOARD_WIDTH,
    height: dimens.BOARD_WIDTH,
  }

  return (
    <div
      style={boardStyle}
      tabIndex={0}
      onKeyDown={e => dispatch({ type: 'SELECT_RELATIVE', payload: e.key })}
    >
      {state.cells.map((cellRow, i) => {
        return (
          <React.Fragment key={i}>
            {cellRow.map(cellData => {
              const { col, row, answer } = cellData

              return (
                <Cell
                  {...cellData}
                  dispatch={dispatch}
                  isSelected={state.selectedCoords.col === col && state.selectedCoords.row === row}
                  answer={answer}
                  key={`${col},${row}`}
                />
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}
