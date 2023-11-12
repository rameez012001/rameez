import React, { Children } from 'react'
import Controls from './Controls'
import './assets/css/about.css'
import displayPic from './assets/images/aboutImg.JPG'

export default function About (props) {
  return (
    <div className='appBox' id='about'>
        <Controls closeApp = {props.closeAll}/>
        <div id='about_content'>
          <div id='profilePhoto'>
            <img src={displayPic} alt="displayPicture" />
          </div>
          <div id='details'>
              <h1>Rameez Hameed</h1>
              <p>Front-End Developer, focusing on the creation of captivating and user-friendly web templates.</p>
              <aside>
                <button id='rsmBtn'>View Resume</button>
                <button id='msgBtn'>Message</button>
              </aside>
          </div>
        </div>
    </div>
  )
}