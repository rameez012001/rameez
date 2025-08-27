import React from 'react'

function ErrorComponent(props) {
  return (
    <div className="content-header">
      <p id="error-response">{props.message}</p>
    </div>
  )
}

export default ErrorComponent