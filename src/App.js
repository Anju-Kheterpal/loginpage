import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";
import Success from "./Routes/Success";

const App = () => (
  <Router>
    <>
      <Routes>
        <Route path="/successful" element={<Success />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  </Router>
);

export default App;
