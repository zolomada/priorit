import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import GoalsListPage from "./Pages/GoalsListPage/GoalsListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/goals" element={<GoalsListPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/profile" element={<ProfilePage />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
