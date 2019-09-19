declare interface Coordinate {
  col: number
  row: number
}

declare type CellData = Coordinate & {
  answer: number | ''
}

declare interface BoardState {
  selectedCoords: Coordinate
  cells: CellData[][]
}
