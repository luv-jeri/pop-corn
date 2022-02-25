import "./App.css";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Card from "./pages/card";
function App() {
  return (
    <div className="App">
      <nav>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/card">Card</a>
      </nav>
      <Login />
      <Signup />
      <Card />
    </div>
  );
}

export default App;
