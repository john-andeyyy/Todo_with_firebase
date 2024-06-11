import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/TodoDashBoard/Header';
// import Home from './components/NavBar/Home';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import TodoDashboard from './components/TodoDashBoard/TodoDashboard';
import Landingpage from './components/Landingpage'
import UserChangepass from './components/Login/UserChangepass';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/TodoDashboard" element={<TodoDashboard />} />
        <Route path="/UserChangepass" element={<UserChangepass />} />
      </Routes>
    </Router>
  );
}

export default App;
