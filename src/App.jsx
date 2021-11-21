import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Component/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "./Component/Contact";
import Dishes from "./Component/Dishes";
import MyNavbar from "./Component/MyNavbar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <BrowserRouter>
<MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Dishes" element={<Dishes />} />
        </Routes>
      </BrowserRouter>
      {/* </header>{" "} */}
    </div>
  );
}

export default App;
