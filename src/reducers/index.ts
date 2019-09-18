import selectionReducer, { SelectionAction } from './selection'

type CellAction = SelectionAction

export default function(current: BoardState, action: CellAction) {
  if (action.type.startsWith('SELECT')) {
    return selectionReducer(current, action)
  }
  return current
}
