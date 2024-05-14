import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  MainPage,
  Vote
} from "./components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
