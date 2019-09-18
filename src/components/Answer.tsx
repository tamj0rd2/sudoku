import React from 'react'

interface AnswerProps {
  num: number | ''
}

export default function Answer({ num }: AnswerProps) {
  const dimen = '30px'

  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: dimen,
    width: dimen,
    fontSize: '1.8em',
  }

  return <div style={style}>{num}</div>
}
