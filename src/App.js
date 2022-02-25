import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Card from "./pages/card";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/card">Card</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
