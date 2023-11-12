import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Taskbar from './Components/Taskbar';
import About from './Components/About';
import Folder from './Components/Folder';
import Contact from './Components/Contact';

function App() {
  const [appName,newAppName] = useState('Files');
  const [appIndex,setAppIndex] = useState(0);

  function openApplication(id,name) {
    setAppIndex(id);
    newAppName(name);
  }

  // to close the app with control components
  function closeAllFunc(){
    setAppIndex(0);
    newAppName('Apps');
  }

  return (
    <div className="App">
      <Header setAppName={appName}/>
      {appIndex === 1 && <About closeAll = {closeAllFunc} setIndex={()=>setAppIndex(appIndex+3)}/>}
      {appIndex === 3 && <Folder closeAll = {closeAllFunc}/>}
      {appIndex === 4 && <Contact closeAll = {closeAllFunc}/>}
      <Taskbar posted={openApplication} />
    </div>
  );
}

export default App;
