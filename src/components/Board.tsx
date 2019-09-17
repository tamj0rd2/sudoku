import React, { useState } from 'react'
import Cell from './Cell'

const getCellId = (row: number, col: number) => `${row},${col}`

export default function Board(): JSX.Element {
  const [selectedCell, setSelectedCell] = useState('')

  return (
    <div>
      {Array.from({ length: 9 }).map((_, col) => (
        <div key={col}>
          {Array.from({ length: 9 }).map((_, row) => {
            const cellId = getCellId(row, col)

            return (
              <Cell
                select={() => setSelectedCell(cellId)}
                isSelected={selectedCell === cellId}
                key={cellId}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
