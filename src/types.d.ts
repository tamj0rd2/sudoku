declare interface Coordinate {
  col: number
  row: number
}

declare type Answer = number | ''

declare type MarkData = { [index: number]: boolean }

declare type CellData = Coordinate & {
  id: string
  answer: Answer
  marks: MarkData
}

declare type CellsDict = { [index: string]: CellData }

declare interface BoardState {
  selectedCell: CellData
  cells: CellsDict
}
