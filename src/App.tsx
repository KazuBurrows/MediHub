import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import NavBar from "./components/navbar"; // import the new NavBar
import ScheduleL from "./views/scheduleList";
import ScheduleM from "./views/scheduleMatrix";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<ScheduleL />} />
        <Route path="/matrix" element={<ScheduleM />} />
      </Routes>
    </Router>
  );
}

export default App;