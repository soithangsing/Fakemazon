import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Cart from "./pages/cart";

function App() {
  return (
    <Router>
      <Navbar />
      <h1 className="text-blue-600">Sing</h1>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
