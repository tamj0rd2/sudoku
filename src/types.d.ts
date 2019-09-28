declare type SuNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

declare type SegNum = 1 | 2 | 3

declare interface Coordinate {
  col: SuNum
  row: SuNum
}

declare type MarkData = { [index: number]: boolean }

declare type CellData = Coordinate & {
  id: string
  answer?: SuNum
  marks: MarkData
  segmentId: string
}

declare type CellsDict = { [index: string]: CellData }

declare interface BoardState {
  selectedCell: CellData
  cells: CellsDict
}
