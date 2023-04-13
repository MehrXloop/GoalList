import React from 'react'

function GoalList(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.des}</p>
    </div>
  )
}

export default GoalList