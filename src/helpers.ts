export const createCellId = (col: number, row: number) => `${col},${row}`

export const getCellById = (cells: CellsDict, col: number, row: number) =>
  cells[createCellId(col, row)]
