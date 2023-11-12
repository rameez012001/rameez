import React, { useState } from 'react'
import Controls from './Controls'
import './assets/css/folder.css'
import documentIcon from './assets/images/icons/document.png'
import desktopIcon from './assets/images/icons/desktop.png'
import searchIcon from './assets/images/icons/searchIcon.png'
import safari from './assets/images/icons/safari.png'

export default function Folder(props) {
    const [indexActive,setIndexActive] = useState(1)
  return (
    <div id='folder'>

        <div id='sideBar'>
            <Controls closeApp = {props.closeAll}/>
            <div className='sideBar-content'>
                <aside>
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder='Search' />
                </aside>
                <p>Favorites</p>
                <ul>
                    <li><img src={documentIcon} alt="" /><p>Projects</p></li>
                    {/* <li><img src={desktopIcon} alt="" />Desktop</li> */}
                </ul>
            </div>
        </div>

        <div id='contentArea'>
            <div className='file-head'>
                <h2>Name</h2>
                <h3>Date Created...</h3>
            </div>  
            
            <a href='https://rameez012001.github.io/Uniiq/' className='file-data'>
                <div><img src={safari} alt="safari" /><p>uniiq</p></div>
                <span>26/08/23, 4:40AM</span>
            </a>
            <a href='https://preview.themeforest.net/item/drake-personal-portfolio-react-template/full_screen_preview/45844975' className='file-data'>
                <div><img src={safari} alt="safari" /><p>Drake</p></div>
                <span>26/08/23, 4:40AM</span>
            </a>
            <a href='https://wordpressriverthemes.com/TAILWIND/itsme/index-light.html' className='file-data'>
                <div><img src={safari} alt="safari" /><p>It's me</p></div>
                <span>26/08/23, 4:40AM</span>
            </a>
        </div>

    </div>
  )
}
