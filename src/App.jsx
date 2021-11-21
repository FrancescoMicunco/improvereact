import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Dishes from './Component/Dishes';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Dishes" element={<Dishes />} />
            </Routes>
          </BrowserRouter>
        </header>{" "}
      </div>
    );
}

export default App;