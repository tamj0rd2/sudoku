import React from 'react'

interface PencilMarkProps {
  num: number
  show: boolean
}

function PencilMark({ num, show }: PencilMarkProps) {
  const style: React.CSSProperties = {
    display: 'flex',
    flex: `0 0 ${100 / 3}%`,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.9em',
    visibility: show ? 'visible' : 'hidden',
  }

  return <div style={style}>{num}</div>
}

export default function PencilMarks() {
  const marksStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  }

  return (
    <div style={marksStyle}>
      {Array.from({ length: 9 }).map((_, i) => {
        const num = i + 1
        return <PencilMark key={num} num={num} show={false} />
      })}
    </div>
  )
}
