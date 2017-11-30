import React from 'react'

const Topics = (props) => {
  console.log('props', props)
  return (
    <div>Topic is: {props.match.params.subject}</div>
  )
}

export default Topics
