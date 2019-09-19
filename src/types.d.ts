declare interface Coordinate {
  col: number
  row: number
}

declare type Answer = number | ''

declare type CellData = Coordinate & {
  answer: Answer
}

declare interface BoardState {
  selectedCoords: Coordinate
  cells: CellData[][]
}
