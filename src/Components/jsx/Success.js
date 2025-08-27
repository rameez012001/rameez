import React from 'react'

function Success(props) {
  return (
    <div className="content-header">
      <p id="success-response">{props.message}</p>
    </div>
  )
}

export default Success