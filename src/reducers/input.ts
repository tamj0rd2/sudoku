export type CellInputAction = {
  type: 'CELL_INPUT'
  payload: string
}

const getNextState = ({ cells, selectedCell }: BoardState, newAnswer: Answer): BoardState => {
  console.log(selectedCell)
  const updatedCell = { ...selectedCell, answer: newAnswer }
  const updatedCells = { ...cells, [selectedCell.id]: updatedCell }

  return { selectedCell: updatedCell, cells: updatedCells }
}

export const cellInputReducer = (state: BoardState, action: CellInputAction): BoardState => {
  if (/^[1-9]$/.test(action.payload)) {
    return getNextState(state, parseInt(action.payload))
  }

  if (action.payload === 'Backspace') {
    return getNextState(state, '')
  }

  return state
}
