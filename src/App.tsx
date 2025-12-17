import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Schedule from "./views/schedule";
import Dashboard from "./views/dashboard";
import NavBar from "./components/navbar"; // import the new NavBar

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matrix" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;