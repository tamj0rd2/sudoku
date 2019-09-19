export type CellInputAction = {
  type: 'CELL_INPUT'
  payload: string
}

export default function setReducer(state: BoardState, action: CellInputAction): BoardState {
  if (/^[1-9]$/.test(action.payload)) {
    const cell = state.cells[state.selectedCell.row - 1][state.selectedCell.col - 1]
    const updatedCells
    return { ...state }
  }

  console.log(/^[1-9]$/.test(action.payload))
}
