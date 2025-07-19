import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BreakdownReport from "./pages/BreakdownReport";
import MoodTracker from "./pages/MoodTracker";
import RoutineReport from "./pages/RoutineReport";
import LegalRights from "./pages/LegalRights";
import EmergencyHelp from "./pages/EmergencyHelp";
import Login from "./pages/Login"; // NEW

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  if (!loggedInUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<BreakdownReport />} />
        <Route path="/rights" element={<LegalRights />} />
        <Route path="/mood" element={<MoodTracker />} />
        <Route path="/reportbox" element={<RoutineReport />} />
        <Route path="/emergency" element={<EmergencyHelp />} />
      </Routes>
    </>
  );
}
