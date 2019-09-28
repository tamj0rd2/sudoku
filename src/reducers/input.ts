import { createMarks } from '~logic/generator'

export type CellInputAction = {
  type: 'CELL_INPUT'
  payload: string
}

const isNeighbor = (cells: CellsDict, origin: CellData) => (key: string) => {
  return (
    cells[key].id !== origin.id &&
    (cells[key].row === origin.row ||
      cells[key].col === origin.col ||
      cells[key].segmentId === origin.segmentId)
  )
}

const getImpactedCellsState = (
  cells: CellsDict,
  selectedCell: CellData,
  answer?: SuNum,
  previousAnswer?: SuNum,
): CellsDict =>
  Object.keys(cells)
    .filter(isNeighbor(cells, selectedCell))
    .map(key => {
      const cellToUpdate = cells[key]

      const marks =
        !answer || previousAnswer
          ? Object.keys(cells)
              .filter(isNeighbor(cells, cellToUpdate))
              .filter(key => cells[key].answer)
              .map(key => cells[key].answer as SuNum)
              .reduce((acc, answer) => {
                acc[answer] = false
                return acc
              }, createMarks(true))
          : { ...cellToUpdate.marks, [answer]: false }

      return { ...cellToUpdate, marks }
    })
    .reduce((accum: CellsDict, cell) => {
      accum[cell.id] = cell
      return accum
    }, {})

const getNextState = ({ cells, selectedCell }: BoardState, newAnswer?: SuNum): BoardState => {
  const updatedCell = { ...selectedCell, answer: newAnswer }
  const updatedCells = { ...cells, [selectedCell.id]: updatedCell }
  const impactedCells = getImpactedCellsState(
    updatedCells,
    updatedCell,
    newAnswer,
    selectedCell.answer,
  )

  return { selectedCell: updatedCell, cells: { ...updatedCells, ...impactedCells } }
}

export const cellInputReducer = (state: BoardState, action: CellInputAction): BoardState => {
  if (/^[1-9]$/.test(action.payload)) {
    return getNextState(state, parseInt(action.payload) as SuNum)
  }

  if (action.payload === 'Backspace') {
    return getNextState(state)
  }

  return state
}
