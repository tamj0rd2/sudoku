import React from 'react'
import Answer from './Answer'
import PencilMarks from './PencilMarks'

// TODO: use styled components
export default function Cell(): JSX.Element {
  const dimen = '30px'

  const styles: React.CSSProperties = {
    border: '1px solid black',
    width: dimen,
    height: dimen,
    position: 'relative',
  }

  return (
    <div style={styles}>
      <Answer num="" />
      <PencilMarks />
    </div>
  )
}
