import React, { useState } from 'react'
import './assets/css/taskbar.css'
import about from './assets/images/apps/about.png';
import resume from './assets/images/apps/resume.png';
import folder from './assets/images/apps/folder.png';
import contact from './assets/images/apps/contact.png';

export default function Taskbar(props) {
    
    function postAppName(id,name){
        props.posted(id,name);
    }
    
    function open(element){
        let appID = element.target.getAttribute('data-appID');
        appID = parseInt(appID)
        const appName = element.target.getAttribute('data-appName');
        postAppName(appID,appName);
    }
    
    const Application = [
        {
            src : about,
            alt : 'about',
            app_id : 1,
            app_name : 'About',
            onClick : open
        },
        {
            src : resume,
            alt : 'resume',
            app_id : 2,
            app_name : 'Resume',
            onClick : ()=>{window.open('https://drive.google.com/file/d/1oli9_VP2cv-zPjK8j1GFRFXfKRUdktMr/view?usp=drive_link','_blank')}
        },
        {
            src : folder,
            alt : 'folder',
            app_id : 3,
            app_name : 'Folder',
            onClick : open
        },
        {
            src : contact,
            alt : 'contact',
            app_id : 4,
            app_name : 'Contact',
            onClick : open
        }
    ]

    return (
        <main>
            
            {
            Application.map((app,id) => (
                <img key={id} src={app.src} alt={app.alt} data-appID = {app.app_id} data-appName={app.app_name} onClick={app.onClick} />
            ))
            }
            
        </main>
    )
}
