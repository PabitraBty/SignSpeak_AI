import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import LandingPage from './pages/LandingPage';
import RecognitionPage from './pages/RecognitionPage';
import DashboardPage from './pages/DashboardPage';
import LearningPage from './pages/LearningPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recognize" element={<RecognitionPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
