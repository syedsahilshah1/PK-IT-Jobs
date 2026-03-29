import React from 'react';
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

const Layout = ({ children, userRole, onLogout }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar userRole={userRole} />
      <div className="flex flex-1">
        <Sidebar userRole={userRole} onLogout={onLogout} />
        <main className="flex-1 p-8 overflow-y-auto w-full max-w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

const PlaceholderPage = ({ title }) => (
  <div className="w-full h-[80vh] flex flex-col items-center justify-center animate-fade-in text-center">
    <div className="bg-indigo-50 text-indigo-600 p-4 rounded-full mb-6">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    </div>
    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
    <p className="text-slate-500 mt-4 max-w-md font-medium leading-relaxed">This module is part of the premium PK IT Jobs suite and is currently being connected to the backend API. Check back soon!</p>
  </div>
);

function App() {
  const [userRole, setUserRole] = React.useState(null); 
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
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
                <Route path="applications" element={<PlaceholderPage title="My Applications" />} />
                <Route path="interview" element={<PlaceholderPage title="Interview Prep" />} />
                <Route path="settings" element={<PlaceholderPage title="Account Settings" />} />
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
  