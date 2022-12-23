import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";
import Success from "./Routes/Success";
import LoginSuccess from "./components/loginSucess";
import OnlineLibrary from "./components/onlineLib";


const App = () => (
  <Router>
    <>
      <Routes>
        <Route path="/loginSuccessful" element={<LoginSuccess />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/onlineLibrary" element={<OnlineLibrary />} />
      </Routes>
    </>
  </Router>
);

export default App;
