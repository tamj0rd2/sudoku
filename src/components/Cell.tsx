import React, { useRef } from 'react'
import { Action } from '~reducers'

type CellProps = {
  dispatch: React.Dispatch<Action>
  isSelected: boolean
} & CellData

const PencilMarks = ({ marks }: { marks: MarkData }): JSX.Element => {
  return (
    <div className="marks-container">
      {Array.from({ length: 9 }, (_, i) => {
        const num = i + 1

        return (
          <div key={num} className={`mark ${marks[num] ? '' : 'hidden'}`}>
            {num}
          </div>
        )
      })}
    </div>
  )
}

// TODO: use styled components
export default function Cell({ answer, dispatch, ...props }: CellProps): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null)

  if (props.isSelected) {
    if (divRef.current) {
      divRef.current.focus()
    }
  }

  return (
    <div
      className="cell"
      onKeyDown={e => dispatch({ type: 'CELL_INPUT', payload: e.key })}
      tabIndex={0}
      onClick={() => dispatch({ type: 'SELECT_ABSOLUTE', payload: props })}
      ref={divRef}
    >
      {answer ? <div className="answer">{answer}</div> : <PencilMarks marks={props.marks} />}
    </div>
  )
}
