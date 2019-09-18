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
  const nextIndex = state.selectedCell[item] + change
  if (nextIndex >= 1 && nextIndex <= 9) {
    const selectedCell = { ...state.selectedCell, [item]: nextIndex }
    return { ...state, selectedCell }
  }
  return state
}

const selectionReducer = (state: BoardState, action: SelectionAction): BoardState => {
  if (action.type === 'SELECT_RELATIVE') {
    switch (action.payload) {
      case 'ArrowUp':
        return getNextState(state, 'row', -1)
      case 'ArrowDown':
        return getNextState(state, 'row', 1)
      case 'ArrowRight':
        return getNextState(state, 'col', 1)
      case 'ArrowLeft':
        return getNextState(state, 'col', -1)
      default:
        return state
    }
  }

  if (action.type === 'SELECT_ABSOLUTE') {
    return { ...state, selectedCell: action.payload }
  }

  return state
}

export default selectionReducer
