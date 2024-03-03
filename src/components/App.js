import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Members, Gallery } from "../pages";
import { Navbar } from "./";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
