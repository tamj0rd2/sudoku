import selectionReducer, { SelectionAction } from './selection'
import cellInputReducer, { CellInputAction } from './set'

type Action = SelectionAction | CellInputAction

export default function(current: BoardState, action: Action) {
  console.log(action)

  switch (action.type) {
    case 'SELECT_RELATIVE':
    case 'SELECT_ABSOLUTE':
      return selectionReducer(current, action)
    case 'CELL_INPUT':
      return cellInputReducer(current, action)
    default:
      return current
  }
}
