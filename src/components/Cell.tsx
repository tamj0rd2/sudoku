import React, { useRef } from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'

interface CellProps {
  isSelected: boolean
  select: () => void
}

// TODO: use styled components
export default function Cell({ isSelected, select }: CellProps): JSX.Element {
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
    <div tabIndex={0} style={styles} onClick={select} ref={divRef}>
      <Answer num="" />
      <PencilMarks />
    </div>
  )
}
