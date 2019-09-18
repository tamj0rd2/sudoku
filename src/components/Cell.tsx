import React, { useRef } from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'

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

  const dimen = '30px'

  const styles: React.CSSProperties = {
    border: '1px solid black',
    display: 'inline-block',
    width: dimen,
    height: dimen,
    position: 'relative',
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
