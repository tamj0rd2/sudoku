export const createCellId = (col: SuNum, row: SuNum) => `${col},${row}`

export const getCellById = (cells: CellsDict, col: SuNum, row: SuNum) =>
  cells[createCellId(col, row)]

export const createSquareId = (col: SuNum, row: SuNum) => `${getSquareId(col)},${getSquareId(row)}`

const getSquareId = (num: SuNum): SegNum => {
  if (num < 4) {
    return 1
  }

  if (num < 7) {
    return 2
  }

  return 3
}
