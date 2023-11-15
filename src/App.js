import { useEffect, useState } from 'react';
import './Components/assets/css/main.css'
import OnLoad from './Components/jsx/OnLoad';
import Header from './Components/jsx/Header';
import Taskbar from './Components/jsx/Taskbar';
import About from './Components/jsx/apps/About';
import Folder from './Components/jsx/apps/Folder';
import Contact from './Components/jsx/apps/Contact';
import bg1 from './Components/assets/images/wallpapers/wallpaper.png';
import bg2 from './Components/assets/images/wallpapers/wallpaper1.png';
import bg3 from './Components/assets/images/wallpapers/wallpaper2.jpg';


function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [appName,newAppName] = useState('Finder');
  const [appIndex,setAppIndex] = useState(0);
  const backgroundImage = [bg1, bg2, bg3];
  const [background,changeBackground] = useState(backgroundImage[0]);
  
  const setBackground = () => {
    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    const randomIndex = getRandomInt(0, backgroundImage.length - 1);
    const randomElement = backgroundImage[randomIndex];
  
    changeBackground(randomElement);
  };

  useEffect(() => {
    setBackground();
  }, []); 

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
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      {isLoading&&<OnLoad/>}
      <Header setAppName={appName}/>
      {appIndex === 1 && <About closeAll = {closeAllFunc} setIndex={()=>setAppIndex(appIndex+3)}/>}
      {appIndex === 3 && <Folder closeAll = {closeAllFunc}/>}
      {appIndex === 4 && <Contact closeAll = {closeAllFunc}/>}
      <Taskbar posted={openApplication} />
    </div>
  );
}

export default App;
