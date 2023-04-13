import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Verify from "./pages/verify/verify";
import Login from "./pages/login/login";
import Preferences from "./pages/preferences/preferences";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </div>
  );
}

export default App;
