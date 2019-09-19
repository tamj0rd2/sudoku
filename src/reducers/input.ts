export type CellInputAction = {
  type: 'CELL_INPUT'
  payload: string
}

function immutableReplace<T>(arr: T[], index: number, item: T) {
  return [...arr.slice(0, index), item, ...arr.slice(index + 1)]
}

const getNextState = (
  { cells, selectedCoords, ...state }: BoardState,
  newAnswer: Answer,
): BoardState => {
  const rowIndex = selectedCoords.row - 1
  const colIndex = selectedCoords.col - 1
  const cell = cells[rowIndex][colIndex]

  const updatedCell = { ...cell, answer: newAnswer }
  const updatedRow = immutableReplace(cells[rowIndex], colIndex, updatedCell)
  const updatedCells = immutableReplace(cells, rowIndex, updatedRow)

  return { ...state, selectedCoords, cells: updatedCells }
}

// TODO: fix issue of answer disappearing on re-render
export const cellInputReducer = (state: BoardState, action: CellInputAction): BoardState => {
  if (/^[1-9]$/.test(action.payload)) {
    return getNextState(state, parseInt(action.payload))
  }

  if (action.payload === 'Backspace') {
    return getNextState(state, '')
  }

  return state
}
