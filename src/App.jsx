// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './pages/Intro.jsx';
import TankOverview from './pages/TankOverview.jsx';
import Controls from './pages/MainControl.jsx';
import Safety from './pages/safetyProcedure.jsx';
import Quiz from './pages/Quiz.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/overview" element={<TankOverview />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;