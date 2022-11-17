import "../src/assets/styles/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Cars } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
