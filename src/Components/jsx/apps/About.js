import React from 'react'
import Controls from './app-components/Controls'
import displayPic from '../../assets/images/aboutImg.JPG'
import Resume from '../../assets/files/Resume.pdf'

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
                <button id='rsmBtn'><a href={Resume} download={Resume}>View Resume</a></button>
                <button id='msgBtn' onClick={props.setIndex}>Message</button>
              </aside>
          </div>
        </div>
    </div>
  )
}