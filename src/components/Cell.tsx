import React, { useRef } from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'
import { Action } from '~reducers'

type CellProps = {
  dispatch: React.Dispatch<Action>
  isSelected: boolean
} & CellData

// TODO: use styled components
export default function Cell({ col, row, dispatch, answer, isSelected }: CellProps): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null)

  if (isSelected) {
    if (divRef.current) {
      divRef.current.focus()
    }
  }

  return (
    <div
      className="cell"
      onKeyDown={e => dispatch({ type: 'CELL_INPUT', payload: e.key })}
      tabIndex={0}
      onClick={() => dispatch({ type: 'SELECT_ABSOLUTE', payload: { col: col, row: row } })}
      ref={divRef}
    >
      <Answer num={answer} />
      <PencilMarks />
    </div>
  )
}
