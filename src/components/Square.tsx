import React from 'react'

const squareWidth = 30
const px = 'px'

interface PencilMarkProps {
  width: number
  num: number
  show: boolean
}

interface StyleProps {
  elem: string
  style?: React.CSSProperties
}

function PencilMark({ width, num, show }: PencilMarkProps) {
  const style: React.CSSProperties = {
    width: width + px,
    height: width + px,
    fontSize: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return <div style={style}>{show ? num : ''}</div>
}

export default function Square(): JSX.Element {
  const dimen = squareWidth + px

  const styles: React.CSSProperties = {
    border: '1px solid black',
    width: dimen,
    height: dimen,
    position: 'relative',
  }

  const solutionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: dimen,
    width: dimen,
  }

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
    <div style={styles}>
      <div style={solutionStyle}>1</div>
      <div style={marksStyle}>
        {Array.from({ length: 9 }).map((_, i) => {
          const num = i + 1
          return (
            <PencilMark
              key={num}
              width={squareWidth / 3}
              num={num}
              show={true}
            />
          )
        })}
      </div>
    </div>
  )
}
