import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowPage from './components/ShowPage';
import BookingForm from './pages/BookingForm';

import ShowContextProvider from './context/ShowContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const App = () => {
  return (
    <Router>
      <ShowContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shows/:id" element={<ShowPage />} />
          <Route path="/shows/:id/booking" element={<BookingForm />} />
          

        </Routes>
      </ShowContextProvider>
    </Router>
  );
};

export default App;
