import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />}/> */}
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/login" element={<LoginPage />}/> */}
          {/* <Route path="/goals" element={<GoalsListPage />}/> */}
          {/* <Route path="/home" element={<HomePage />}/> */}
          {/* <Route path="/profile" element={<ProfilePage />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
