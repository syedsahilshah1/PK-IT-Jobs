import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Jobs from './pages/Jobs';
import RecruiterHub from './pages/RecruiterHub';
import Superadmin from './pages/Superadmin';
import CreateJob from './pages/CreateJob';
import Login from './pages/Login';
import AddProject from './pages/AddProject';
import BuildPortfolio from './pages/BuildPortfolio';
import PortfolioEditor from './pages/PortfolioEditor';
import Interview from './pages/Interview';
import Calendar from './pages/Calendar';
import Applications from './pages/Applications';
import SettingsPage from './pages/Settings';
import CVTemplate from './pages/CVTemplate';

const Layout = ({ children, userRole, onLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans overflow-x-hidden">
      <Navbar 
        userRole={userRole} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <div className="flex flex-1 relative">
        <Sidebar 
          userRole={userRole} 
          onLogout={onLogout} 
          isOpen={isSidebarOpen} 
          closeSidebar={() => setIsSidebarOpen(false)}
        />
        
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <main className={`flex-1 p-4 lg:p-8 overflow-y-auto w-full transition-all duration-300`}>
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  const [userRole, setUserRole] = useState(() => localStorage.getItem('pkit_user_role'));
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!localStorage.getItem('pkit_user_role'));

  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
    localStorage.setItem('pkit_user_role', role);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('pkit_user_role');
    localStorage.removeItem('pkit_user_auth');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/superadmin" element={<Login onLogin={handleLogin} initialRole="admin" hideToggle={true} />} />
        
        <Route path="/*" element={
          isAuthenticated ? (
            <Layout userRole={userRole} onLogout={handleLogout}>
              <Routes>
                <Route path="dashboard" element={
                  userRole === 'admin' ? <Superadmin /> : 
                  userRole === 'recruiter' ? <RecruiterHub /> : <Dashboard />
                } />
                <Route path="jobs" element={<Jobs />} />
                <Route path="profile" element={<Profile />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="add-project" element={<AddProject />} />
                <Route path="build-portfolio" element={<BuildPortfolio />} />
                <Route path="portfolio-editor" element={<PortfolioEditor />} />
                <Route path="admin" element={<Superadmin />} />
                <Route path="recruiter" element={<RecruiterHub />} />
                <Route path="create-job" element={<CreateJob />} />
                <Route path="applications" element={<Applications />} />
                <Route path="interview" element={<Interview />} />
                <Route path="calendar" element={<Calendar />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="cv-template" element={<CVTemplate />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
