const cellsMapper = (_: any, y: number): CellData[] => {
  const row = y + 1

  return Array.from({ length: 9 }).map((_, x) => {
    const col = x + 1
    return { row, col, answer: '' }
  })
}

export default function generate(): BoardState {
  const cells = Array.from({ length: 9 }, cellsMapper)
  cells[0][0].answer = 8

  return { cells, selectedCoords: cells[0][0] }
}
