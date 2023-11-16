import React from 'react'

export default function Controls(props) {
  return (
    <div className='windowControls'>
        <div id='red' className="dots" onClick={props.closeApp}>
            <span></span>
            <span></span>
        </div>
        <div id='yellow' className="dots">

        </div>
        <div id='green' className="dots">

        </div>
    </div>
  )
}
