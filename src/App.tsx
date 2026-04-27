/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Sidebar, BottomNav } from './components/Navigation';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { WorkoutDetail } from './pages/WorkoutDetail';
import { Progress } from './pages/Progress';
import { Diet } from './pages/Diet';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Schedule } from './pages/Schedule';

function AppContent() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simple auth simulation
  if (!isLoggedIn && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  if (isLoggedIn && location.pathname === '/login') {
    return <Navigate to="/home" replace />;
  }

  if (location.pathname === '/login') {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="flex-1 pb-24 lg:pb-0 lg:pl-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-4 lg:p-8 max-w-5xl mx-auto"
          >
            <Routes location={location}>
              <Route path="/home" element={<Home />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/workouts/:id" element={<WorkoutDetail />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/profile" element={<Profile onLogout={() => setIsLoggedIn(false)} />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

