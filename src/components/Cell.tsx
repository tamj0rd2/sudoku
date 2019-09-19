import React, { useRef } from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'
import * as dimens from '~constants/dimens'
import { Action } from '~reducers'

type CellProps = {
  dispatch: React.Dispatch<Action>
  isSelected: boolean
} & CellData

// TODO: use styled components
export default function Cell({ col, row, dispatch, answer, isSelected }: CellProps): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null)

  const styles: React.CSSProperties = {
    border: '1px solid black',
    width: dimens.CELL_WIDTH,
    height: dimens.CELL_WIDTH,
    position: 'relative',
    boxSizing: 'border-box',
  }

  if (isSelected) {
    if (divRef.current) {
      divRef.current.focus()
    }
  }

  return (
    <div
      onKeyDown={e => dispatch({ type: 'CELL_INPUT', payload: e.key })}
      tabIndex={0}
      style={styles}
      onClick={() => dispatch({ type: 'SELECT_ABSOLUTE', payload: { col: col, row: row } })}
      ref={divRef}
    >
      <Answer num={answer} />
      <PencilMarks />
    </div>
  )
}
