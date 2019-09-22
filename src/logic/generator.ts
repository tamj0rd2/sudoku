import { createCellId } from '~helpers'

export default function generate(): BoardState {
  const cells = Array.from({ length: 9 }).reduce((acc: CellsDict, _, y): CellsDict => {
    const row = y + 1

    Array.from({ length: 9 }).forEach((_, x) => {
      const col = x + 1
      const marks = Array.from({ length: 9 }).reduce((acc: MarkData, _, i): MarkData => {
        // TODO: put some actual hide/show logic here
        acc[i + 1] = true
        return acc
      }, {})

      const id = createCellId(col, row)

      acc[id] = { id, col, row, answer: '', marks }
    }, {})

    return acc
  }, {})

  return { cells, selectedCell: cells['1,1'] }
}
