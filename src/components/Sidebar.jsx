import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  PlusCircle,
  Briefcase,
  Target,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ userRole, onLogout }) => {
  const getMenuItems = () => {
    switch(userRole) {
      case 'admin':
        return [
          { icon: <LayoutDashboard size={18} />, label: 'System Overview', path: '/dashboard' },
          { icon: <Users size={18} />, label: 'User Management', path: '/admin' },
          { icon: <Briefcase size={18} />, label: 'Job Moderation', path: '/admin' },
          { icon: <FileText size={18} />, label: 'System Logs', path: '/admin' },
          { icon: <Settings size={18} />, label: 'Settings', path: '/settings' },
        ];
      case 'recruiter':
        return [
          { icon: <LayoutDashboard size={18} />, label: 'Recruiter Hub', path: '/dashboard' },
          { icon: <Users size={18} />, label: 'Candidates', path: '/recruiter' },
          { icon: <PlusCircle size={18} />, label: 'Post a Job', path: '/create-job' },
          { icon: <Settings size={18} />, label: 'Settings', path: '/settings' },
        ];
      default:
        return [
          { icon: <LayoutDashboard size={18} />, label: 'Dashboard', path: '/dashboard' },
          { icon: <Briefcase size={18} />, label: 'Applications', path: '/applications' },
          { icon: <FileText size={18} />, label: 'My Projects', path: '/portfolio' },
          { icon: <Target size={18} />, label: 'Interview Prep', path: '/interview' },
          { icon: <Settings size={18} />, label: 'Settings', path: '/settings' },
        ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 sticky top-0 h-[calc(100vh-72px)] flex flex-col pt-8 pb-6 px-4">
      <div className="mb-10 px-2">
         <h3 className="text-xl font-bold text-slate-900 tracking-tight">PK IT Jobs</h3>
         <p className="font-semibold text-[10px] text-slate-400 uppercase tracking-widest mt-1">
            {userRole === 'admin' ? 'Superadmin' : userRole === 'recruiter' ? 'Recruiter' : 'Career Roadmap'}
         </p>
      </div>
      
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold text-sm transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="mt-auto">
        <div className="space-y-1 mb-6">
           <button type="button" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors w-full"><HelpCircle size={18} /> Help Center</button>
           <button type="button" onClick={onLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors w-full"><LogOut size={18} /> Logout</button>
        </div>
        {userRole !== 'recruiter' && userRole !== 'admin' && (
          <NavLink to="/build-portfolio" className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors flex items-center justify-center">
            Build CV
          </NavLink>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
