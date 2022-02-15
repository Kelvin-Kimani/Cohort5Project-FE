import './App.css';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRegistration from './pages/UserRegistration';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/forgot_password" element={<ForgotPassword/>}/>
            <Route path="/user_registration" element={<UserRegistration/>}/>
            <Route path="/dashboard/*" element={<Dashboard/>}/>
        </Routes>
    </Router>
  );
}

export default App;
