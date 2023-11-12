import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Taskbar from './Components/Taskbar';
import About from './Components/About';
import Resume from './Components/Resume';
import Folder from './Components/Folder';
import Contact from './Components/Contact';

function App() {
  const [appName,newAppName] = useState('Apps');
  const [appIndex,setAppIndex] = useState(undefined);

  function handleAppName(id,name) {
    setAppIndex(id);
    newAppName(name);
  }

  // to close the app with control components
  function closeAllFunc(){
    setAppIndex(undefined);
    newAppName('Apps');
  }

  return (
    <div className="App">
      <Header setAppName={appName}/>
      {appIndex == 1?<About closeAll = {closeAllFunc}/>:false}
      {appIndex == 2?<Resume closeAll = {closeAllFunc}/>:false}
      {appIndex == 3?<Folder closeAll = {closeAllFunc}/>:false}
      {appIndex == 4?<Contact closeAll = {closeAllFunc}/>:false}
      <Taskbar getAppName={handleAppName} openApp={(v)=>setAppIndex(v)}/>
    </div>
  );
}

export default App;
