import React, { useState } from 'react'
import Controls from './app-components/Controls'
import documentIcon from '../../assets/images/icons/document.png'
import desktopIcon from '../../assets/images/icons/desktop.png'
import searchIcon from '../../assets/images/icons/searchIcon.png'
import safari from '../../assets/images/icons/safari.png'

export default function Folder(props) {
    const [indexActive,setIndexActive] = useState(1)

    const arry = [
        {
            projectName:'Uniqq',
            link:'https://rameez012001.github.io/Uniiq/',
            date:'26/08/23',
            time:'4:40AM'
        },
        {
            projectName:'Drake',
            link:'https://preview.themeforest.net/item/drake-personal-portfolio-react-template/full_screen_preview/45844975',
            date:'26/08/23',
            time:'4:40AM'
        },
        {
            projectName:"It's me",
            link:'https://wordpressriverthemes.com/TAILWIND/itsme/index-light.html',
            date:'26/08/23',
            time:'4:40AM'
        },
    ]
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
                </ul>
            </div>
        </div>

        <div id='contentArea'>
            <div className='file-head'>
                <h2>Name</h2>
                <h3>Date Created...</h3>
            </div>  
            
            {
            arry.map((element,indexID)=> {
                return(
                    <a key={indexID} href={element.link} className='file-data' target='_blank'>
                        <div><img src={safari} alt="safari" /><p>{element.projectName}</p></div>
                        <span>{element.date},{element.time}</span>
                    </a>
                )
            })
            }
        </div>

    </div>
  )
}
