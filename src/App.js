import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Routes/SignUp";
import Login from "./Routes/Login";
import Success from "./Routes/Success";
import LoginSuccess from "./components/loginSucess";
import OnlineLibrary from "./components/onlineLib";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const App = () => (
  <Router>
    <AlertProvider template={AlertTemplate} {...options}>
      <>
        <Routes>
          <Route path="/loginSuccessful" element={<LoginSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/onlineLibrary" element={<OnlineLibrary />} />
        </Routes>
      </>
    </AlertProvider>
  </Router>
);

export default App;
