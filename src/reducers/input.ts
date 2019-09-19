export type CellInputAction = {
  type: 'CELL_INPUT'
  payload: string
}

function immutableReplace<T>(arr: T[], index: number, item: T) {
  return [...arr.slice(0, index), item, ...arr.slice(index + 1)]
}

// TODO: fix issue of answer disappearing on re-render
export const cellInputReducer = (state: BoardState, action: CellInputAction): BoardState => {
  const { cells, selectedCoords } = state

  if (/^[1-9]$/.test(action.payload)) {
    const rowIndex = selectedCoords.row - 1
    const colIndex = selectedCoords.col - 1
    const cell = cells[rowIndex][colIndex]

    const updatedCell = { ...cell, answer: parseInt(action.payload) }
    const updatedRow = immutableReplace(cells[rowIndex], colIndex, updatedCell)
    const updatedCells = immutableReplace(cells, rowIndex, updatedRow)

    return { ...state, cells: updatedCells }
  }

  return state
}
