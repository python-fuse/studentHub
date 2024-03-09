import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route Component={Login} path="/" />
          <Route Component={Signup} path="/signup" />
          <Route Component={Home} path="/feed" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
