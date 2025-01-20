import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [darkMode, setdarkmode] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("darkmode") || "false") 
  );
  const toggleDarkMode = () => {
    setdarkmode((prev) => !prev)
  }
  useEffect (() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle("dark", darkMode);  
  }, [darkMode]);
  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 " : "bg-gray-100 text-black"}`}>

      <BrowserRouter>
        <Navbar darkMode= {darkMode} toggleDarkMode={toggleDarkMode}/> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
