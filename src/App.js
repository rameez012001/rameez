import './Components/assets/css/global.css'
import About from './Components/jsx/About';
import Header from './Components/jsx/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/jsx/Home';
import Project from './Components/jsx/Project';
import Activities from './Components/jsx/Activities';
import ThemeToggler from './Components/jsx/ThemeToggler';
import { useEffect, useState } from 'react';
import Footer from './Components/jsx/Footer';
import Admin from './Components/jsx/Admin';
import PostBlog from './Components/jsx/PostBlog';
import ProtectedRoute from './Components/jsx/ProtectedRoute';


function App() {
  const [theme, setTheme] = useState(()=>{
    return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  });

  useEffect(() => {
    document.body.classList.remove("theme--light", "theme--dark");
    document.body.classList.add(`theme--${theme}`);
  }, [theme]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ThemeToggler theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Admin/>}/>
          <Route path="/postBlog" element={
            <ProtectedRoute>
              <PostBlog/>
            </ProtectedRoute>
          }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;