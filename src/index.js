import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Calendar from './components/Calendar/Calendar';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate replace to={`/${currentYear}/${currentMonth}`} />} />
      <Route path="/:year/:month" element={<Calendar />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </Router>
  );