// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentLayout from './layouts/StudentLayout';
import ExamInstructions from './pages/Student/ExamInstructions';
import ExamPage from './pages/Student/ExamPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path={"/student"} element={<StudentLayout />} >
          <Route path="instrunctions" element={<ExamInstructions />} />
          <Route path="exam-page" element={<ExamPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
