import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ValidationPage from '../pages/ValidationPage';
import ThanksPage from '../pages/ThanksPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/validation" element={<ValidationPage />} />
      <Route path="/thanks" element={<ThanksPage />} />
    </Routes>
  );
};

export default AppRoutes;
