import './Components/assets/css/global.css'
import About from './Components/jsx/About';
import Header from './Components/jsx/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/jsx/Home';
import Project from './Components/jsx/Project';
import Activities from './Components/jsx/Activities';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;