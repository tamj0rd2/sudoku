const COL = 'col'
const ROW = 'row'

import { createCellId } from '~helpers'

export type SelectionAction =
  | {
      type: 'SELECT_RELATIVE'
      payload: string
    }
  | {
      type: 'SELECT_ABSOLUTE'
      payload: Coordinate
    }

const getNextState = (state: BoardState, item: keyof Coordinate, change: 1 | -1): BoardState => {
  const col = item === COL ? ((state.selectedCell.col + change) as SuNum) : state.selectedCell.col
  const row = item === ROW ? ((state.selectedCell.row + change) as SuNum) : state.selectedCell.row
  const selectedCell = state.cells[createCellId(col, row)]

  return selectedCell ? { ...state, selectedCell } : state
}

const selectionReducer = (state: BoardState, action: SelectionAction): BoardState => {
  if (action.type === 'SELECT_RELATIVE') {
    switch (action.payload) {
      case 'ArrowUp':
        return getNextState(state, ROW, -1)
      case 'ArrowDown':
        return getNextState(state, ROW, 1)
      case 'ArrowRight':
        return getNextState(state, COL, 1)
      case 'ArrowLeft':
        return getNextState(state, COL, -1)
      default:
        return state
    }
  }

  if (action.type === 'SELECT_ABSOLUTE') {
    const { col, row } = action.payload
    return { ...state, selectedCell: state.cells[createCellId(col, row)] }
  }

  return state
}

export default selectionReducer
