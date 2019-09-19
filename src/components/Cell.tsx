import React, { useRef } from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'
import * as dimens from '~constants/dimens'

interface CellProps {
  isSelected: boolean
  selectCell: () => void
  answer: number | ''
  setAnswer: () => void
}

// TODO: use styled components
export default function Cell({
  answer,
  setAnswer,
  isSelected,
  selectCell,
}: CellProps): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null)

  const styles: React.CSSProperties = {
    border: '1px solid black',
    display: 'inline-block',
    width: dimens.CELL_WIDTH,
    height: dimens.CELL_WIDTH,
    position: 'relative',
    boxSizing: 'border-box',
  }

  if (isSelected) {
    styles.backgroundColor = '#a0ffff'
    if (divRef.current) {
      divRef.current.focus()
    }
  }

  return (
    <div onKeyDown={setAnswer} tabIndex={0} style={styles} onClick={selectCell} ref={divRef}>
      <Answer num={answer} />
      <PencilMarks />
    </div>
  )
}
