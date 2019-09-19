const cellsMapper = (_: any, y: number): CellData[] => {
  const row = y + 1

  return Array.from({ length: 9 }).map((_, x) => {
    const col = x + 1
    const marks = Array.from({ length: 9 }).reduce((acc: MarkData, _, i): MarkData => {
      // TODO: put some actual hide/show logic here
      acc[i + 1] = true
      return acc
    }, {})

    return { row, col, answer: '', marks }
  })
}

export default function generate(): BoardState {
  const cells = Array.from({ length: 9 }, cellsMapper)
  return { cells, selectedCoords: cells[0][0] }
}
