import { createCellId, createSquareId as createSegmentId } from '~helpers'

export function createMarks(shouldShow: boolean = false): MarkData {
  return Array.from({ length: 9 }).reduce((acc: MarkData, _, i): MarkData => {
    // TODO: put some actual hide/show logic here
    acc[i + 1] = shouldShow
    return acc
  }, {})
}

export default function generate(): BoardState {
  const cells = Array.from({ length: 9 }).reduce((acc: CellsDict, _, y): CellsDict => {
    const row = (y + 1) as SuNum
    ;(Array.from({ length: 9 }) as Array<SuNum>).forEach((_, x) => {
      const col = (x + 1) as SuNum
      const id = createCellId(col, row)
      const segmentId = createSegmentId(col, row)

      acc[id] = { id, col, row, segmentId, answer: undefined, marks: createMarks(true) }
    }, {})

    return acc
  }, {})

  return { cells, selectedCell: cells['1,1'] }
}
