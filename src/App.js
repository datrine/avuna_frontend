import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Verify from "./pages/verify/verify";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
