declare interface Coordinate {
  col: number
  row: number
}

declare type CellData = Coordinate

interface BoardState {
  selectedCell: CellData
  cells: CellData[][]
}
