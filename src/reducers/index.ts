import selectionReducer, { SelectionAction } from './selection'
import { cellInputReducer, CellInputAction } from './input'

export type Action = SelectionAction | CellInputAction

export default function(state: BoardState, action: Action) {
  switch (action.type) {
    case 'SELECT_RELATIVE':
    case 'SELECT_ABSOLUTE':
      return selectionReducer(state, action)
    case 'CELL_INPUT':
      return cellInputReducer(state, action)
    default:
      return state
  }
}
