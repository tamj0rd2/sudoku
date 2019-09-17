import React, { useReducer } from 'react'
import Cell from './Cell'

interface Coordinate {
  col: number
  row: number
}

const getCellId = (col: number, row: number) => `${col},${row}`
const isValidIndex = (num: number) => num > 0 && num <= 9

const coordinateReducer = (current: Coordinate, action: string | Coordinate): Coordinate => {
  if (action && typeof action === 'string') {
    switch (action) {
      case 'ArrowUp': {
        const nextRow = current.row - 1
        return isValidIndex(nextRow) ? { col: current.col, row: nextRow } : current
      }
      case 'ArrowRight': {
        const nextCol = current.col + 1
        return isValidIndex(nextCol) ? { col: nextCol, row: current.row } : current
      }
      case 'ArrowDown': {
        const nextRow = current.row + 1
        return isValidIndex(nextRow) ? { col: current.col, row: nextRow } : current
      }
      case 'ArrowLeft': {
        const nextCol = current.col - 1
        return isValidIndex(nextCol) ? { col: nextCol, row: current.row } : current
      }
      default:
        return current
    }
  }

  if (action) {
    return action as Coordinate
  }

  return current
}

export default function Board(): JSX.Element {
  // const [selectedCell, setSelectedCell] = useState<Coordinate>({ row: 0, col: 0 })
  const [selectedCell, dispatch] = useReducer(coordinateReducer, { col: 0, row: 0 })

  return (
    <div tabIndex={0} onKeyDown={e => dispatch(e.key)}>
      {Array.from({ length: 9 }).map((_, y) => {
        const row = y + 1
        return (
          <div key={row}>
            {Array.from({ length: 9 }).map((_, x) => {
              const col = x + 1
              const cellId = getCellId(col, row)

              return (
                <Cell
                  select={() => dispatch({ col, row })}
                  isSelected={selectedCell.col === col && selectedCell.row === row}
                  key={cellId}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
