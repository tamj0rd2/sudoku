declare interface Coordinate {
  col: number
  row: number
}

declare type Answer = number | ''

declare type MarkData = { [index: number]: boolean }

declare type CellData = Coordinate & {
  answer: Answer
  marks: MarkData
}

declare interface BoardState {
  selectedCoords: Coordinate
  cells: CellData[][]
}
