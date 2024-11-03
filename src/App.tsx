import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import FarmVisits from './pages/FarmVisits';
import DataCollection from './pages/DataCollection';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/farm-visits" element={<FarmVisits />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;