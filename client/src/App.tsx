import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
