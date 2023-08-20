import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
