import React from 'react'

interface AnswerProps {
  num: Answer
}

export default function Answer({ num }: AnswerProps) {
  const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em',
    height: '100%',
    width: '100%',
  }

  return <div style={style}>{num}</div>
}
