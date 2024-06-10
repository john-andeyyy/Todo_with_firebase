import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/TodoDashBoard/Header';
// import Home from './components/NavBar/Home';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import TodoDashboard from './components/TodoDashBoard/TodoDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TodoDashboard />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
