import React, { useState } from 'react';
import './Components/assets/css/global.css'
import OnLoad from './Components/jsx/OnLoad';
import Header from './Components/jsx/Header';
import Taskbar from './Components/jsx/Taskbar';
import About from './Components/jsx/apps/About';
import Folder from './Components/jsx/apps/Folder';
import Contact from './Components/jsx/apps/Contact';
import bg1 from './Components/assets/images/wallpapers/wallpaper.png';


function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [appName,newAppName] = useState('Finder');
  const [appIndex,setAppIndex] = useState(0);

  function openApplication(id,name) {
    setAppIndex(id);
    newAppName(name);
  }

  function closeAllFunc(){
    setAppIndex(0);
    newAppName('Finder');
  }

  setTimeout(() => {
    setIsLoading(false);
  }, 1800); 

  return (
    <div className="App" style={{
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      {isLoading&&<OnLoad/>}
      <Header setAppName={appName}/>
      {appIndex === 1 && <About closeAll = {closeAllFunc} setIndex={()=>setAppIndex(appIndex+3)}/>}
      {appIndex === 3 && <Folder closeAll = {closeAllFunc}/>}
      {appIndex === 4 && <Contact closeAll = {closeAllFunc}/>}
      <Taskbar post={openApplication} />
    </div>
  );
}

export default App;