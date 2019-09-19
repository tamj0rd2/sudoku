import React from 'react'
import * as dimens from '~constants/dimens'

interface AnswerProps {
  num: number | ''
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
