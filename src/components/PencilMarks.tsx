import React from 'react'

interface PencilMarkProps {
  num: number
  show: boolean
}

function PencilMark({ num, show }: PencilMarkProps) {
  const dimen = '10px'

  const style: React.CSSProperties = {
    width: dimen,
    height: dimen,
    fontSize: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return <div style={style}>{show ? num : ''}</div>
}

export default function PencilMarks() {
  const dimen = '30px'

  const marksStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: dimen,
    height: dimen,
    position: 'absolute',
    top: 0,
    left: 0,
  }

  return (
    <div style={marksStyle}>
      {Array.from({ length: 9 }).map((_, i) => {
        const num = i + 1
        return <PencilMark key={num} num={num} show={true} />
      })}
    </div>
  )
}
