import React from 'react'
import about from '../assets/images/apps/about.png';
import resume from '../assets/images/apps/resume.png';
import folder from '../assets/images/apps/folder.png';
import contact from '../assets/images/apps/contact.png';
import linkedin from '../assets/images/apps/linkedin.png';
import instagram from '../assets/images/apps/instagram.png';
import x from '../assets/images/apps/x.png';
import github from '../assets/images/apps/github.png';

function Taskbar(props) {
    
    function open(element){
        let appID = element.target.getAttribute('data-app_id');
        const appName = element.target.getAttribute('data-app_name');
        appID = parseInt(appID);
        props.post(appID,appName);
    }
    
    const Application = [
        {
            id_name: 'aboutID',
            src : about,
            alt : 'about',
            app_id : 1,
            app_name : 'About',
            onClick : open
        },
        {
            id_name: 'resumeID',
            src : resume,
            alt : 'resume',
            app_id : 2,
            app_name : 'Resume',
            onClick : ()=>{window.open('https://drive.google.com/file/d/1oli9_VP2cv-zPjK8j1GFRFXfKRUdktMr/view?usp=drive_link','_blank')}
        },
        {
            id_name: 'folderID',
            src : folder,
            alt : 'folder',
            app_id : 3,
            app_name : 'Folder',
            onClick : open
        },
        {
            id_name: 'contactID',
            src : contact,
            alt : 'contact',
            app_id : 4,
            app_name : 'Contact',
            onClick : open
        },
        {
            id_name: 'instagramID',
            src : instagram,
            alt : 'instagram',
            app_id : 4,
            app_name : 'Instagram',
            onClick : ()=>{window.open('https://instagram.com/rameeeeezzzz','_blank')}
        },
        {
            id_name: 'linkedinID',
            src : linkedin,
            alt : 'linkedin',
            app_id : 4,
            app_name : 'Linkedin',
            onClick : ()=>{window.open('https://www.linkedin.com/in/rameez-h-345b21246/','_blank')}
        },
        {
            id_name: 'xID',
            src : x,
            alt : 'x',
            app_id : 4,
            app_name : 'X',
            onClick : ()=>{window.open('https://x.com/rameezonit','_blank')}
        },
        {
            id_name: 'githubID',
            src : github,
            alt : 'github',
            app_id : 4,
            app_name : 'Github',
            onClick : ()=>{window.open('https://github.com/rameez012001','_blank')}
        }
    ]

    return (
        <main id='taskBar'>
            
            {
            Application.map((app,id) => (
                <img key={id} id={app.id_name} src={app.src} alt={app.alt} data-app_id = {app.app_id} data-app_name={app.app_name} onClick={app.onClick} />
            ))
            }
            
        </main>
    )
}

export default Taskbar;