import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.js";
import Coach from "./pages/Coach.js";
import CoachPage from "./pages/CoachPage.js";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coaches" element={<CoachPage />} />
          {/* <Route path={"/coaches/:id"} element={<Coach />} /> */}
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
