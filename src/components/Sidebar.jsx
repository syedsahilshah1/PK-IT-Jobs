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
  LogOut,
  X
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ userRole, onLogout, isOpen, closeSidebar }) => {
  const getMenuItems = () => {
    switch(userRole) {
      case 'admin':
        return [
          { icon: <LayoutDashboard size={18} />, label: 'Systems Overview', path: '/dashboard' },
          { icon: <Users size={18} />, label: 'User Management', path: '/dashboard?tab=users' },
          { icon: <Briefcase size={18} />, label: 'Job Moderation', path: '/dashboard?tab=moderation' },
          { icon: <FileText size={18} />, label: 'System Logs', path: '/dashboard?tab=logs' },
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
    <>
      <aside className={`
        fixed inset-y-0 left-0 z-[100] w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header in Sidebar */}
        <div className="lg:hidden flex justify-between items-center px-6 py-6 border-b border-slate-50 mb-4 bg-slate-50">
           <h3 className="font-black text-slate-900 tracking-tight text-lg">Menu</h3>
           <button onClick={closeSidebar} className="p-2 hover:bg-white rounded-xl text-slate-400 transition-colors">
              <X size={22} />
           </button>
        </div>

        <div className="pt-10 pb-6 px-6 lg:pt-8 flex flex-col h-full overflow-y-auto">
          <div className="mb-10 px-2 text-left">
             <h3 className="text-xl font-black text-indigo-900 tracking-tighter">PK IT Jobs</h3>
             <p className="font-bold text-[10px] text-slate-400 uppercase tracking-[0.2em] mt-1">
                {userRole === 'admin' ? 'Root Terminal' : userRole === 'recruiter' ? 'Hiring Ops' : 'Career Ecosystem'}
             </p>
          </div>
          
          <nav className="flex-1 space-y-1.5 text-left">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all shadow-sm tracking-tight ${isActive ? 'bg-indigo-600 text-white shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          
          <div className="mt-auto pt-8 border-t border-slate-50">
            <div className="space-y-1 mb-6 text-left">
               <button type="button" className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-indigo-600 transition-all w-full tracking-tight"><HelpCircle size={18} /> Protocol Help</button>
               <button type="button" onClick={() => { onLogout(); closeSidebar(); }} className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-black text-rose-500 hover:bg-rose-50 hover:text-rose-700 transition-all w-full tracking-tight uppercase"><LogOut size={18} /> Logout Term</button>
            </div>
            
            {userRole === 'student' && (
              <NavLink to="/build-portfolio" onClick={closeSidebar} className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl shadow-xl hover:bg-indigo-600 transition-all flex items-center justify-center text-xs uppercase tracking-widest no-underline">
                Generate CV
              </NavLink>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
