import React from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'

interface CellProps {
  isSelected: boolean
  select: () => void
}

// TODO: use styled components
export default function Cell({ isSelected, select }: CellProps): JSX.Element {
  const dimen = '30px'

  const styles: React.CSSProperties = {
    border: '1px solid black',
    display: 'inline-block',
    width: dimen,
    height: dimen,
    position: 'relative',
  }

  if (isSelected) {
    styles.backgroundColor = 'cyan'
  }

  return (
    <div style={styles} onClick={select}>
      <Answer num="" />
      <PencilMarks />
    </div>
  )
}
