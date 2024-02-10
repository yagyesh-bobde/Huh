import { Routes, Route, Link } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <h1>
              <Link to="/">Go Home</Link>
            </h1>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/learn" element={<Dashboard />} />
        <Route path="/dashboard/talk" element={<Dashboard />} />
        <Route path="/dashboard/talk/friends" element={<Dashboard />} />
        <Route path="/dashboard/talk/ai" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
