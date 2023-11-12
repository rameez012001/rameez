import React, { useState } from 'react'
import './assets/css/taskbar.css'
import about from './assets/images/apps/about.png';
import resume from './assets/images/apps/resume.png';
import folder from './assets/images/apps/folder.png';
import contact from './assets/images/apps/contact.png';

export default function Taskbar(props) {
    
    function postAppName(id,name){
        props.getAppName(id,name);
    }
    
    function openApp(element){
        const appID = element.target.getAttribute('data-appID');
        const appName = element.target.getAttribute('data-appName');
        postAppName(appID,appName);
        props.openApp(appID);
    }

    return (
        <main>
            <img src={about} alt="about" data-appID={1} data-appName='About' onClick={openApp} />

            <img src={resume} alt="resume" data-appID={2} data-appName='Resume' onClick={()=>{window.open('https://drive.google.com/file/d/1oli9_VP2cv-zPjK8j1GFRFXfKRUdktMr/view?usp=drive_link','_blank')}}/>

            <img src={folder} alt="folder" data-appID={3} data-appName='Folder' 
            onClick={openApp}/>

            <img src={contact} alt="contact" data-appID={4} data-appName='Contact' onClick={openApp}/>
            
        </main>
    )
}
