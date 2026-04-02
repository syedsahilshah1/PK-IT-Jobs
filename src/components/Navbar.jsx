import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Bell, 
  Settings, 
  Search, 
  LayoutDashboard, 
  Briefcase,
  UserCircle,
  MessageSquare,
  PlusCircle,
  Menu,
  X
} from 'lucide-react';

const Navbar = ({ userRole, toggleSidebar }) => {
  const getNavLinks = () => {
    switch(userRole) {
      case 'admin': return [{ to: '/dashboard', label: 'Admin', icon: <LayoutDashboard size={18} /> }];
      case 'recruiter': return [{ to: '/dashboard', label: 'Hub', icon: <LayoutDashboard size={18} /> }];
      default: return [{ to: '/jobs', label: 'Opportunities', icon: <Briefcase size={18} /> }];
    }
  };

  return (
    <header className="h-[72px] bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8">
       <div className="flex items-center gap-4 lg:gap-10">
          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            onClick={toggleSidebar}
            className="lg:hidden p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-500"
          >
             <Menu size={24} />
          </button>

          <Link to="/" className="flex items-center gap-2 no-underline">
             <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
             <span className="text-xl font-bold tracking-tight text-slate-900">PK IT Jobs</span>
          </Link>
          
          <div className="hidden lg:flex gap-1">
             {getNavLinks().map((link, idx) => (
                <NavLink 
                  key={idx} to={link.to} 
                  className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-slate-100 text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                   {link.label}
                </NavLink>
             ))}
          </div>
       </div>

       <div className="flex items-center gap-3 lg:gap-6">
          <div className="hidden md:flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-slate-500 text-[10px] font-black uppercase">
             <Search size={14} /> 
             <span className="opacity-60">⌘K</span>
          </div>

          <div className="flex items-center gap-3 lg:gap-5 text-slate-400 border-l border-slate-100 pl-4 lg:pl-6">
             <button type="button" className="hover:text-indigo-600 transition-colors relative">
                <Bell size={18} />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
             </button>
             <div className="hidden sm:block">
                <button type="button" className="hover:text-indigo-600 transition-colors"><MessageSquare size={18} /></button>
             </div>
          </div>

          <NavLink to="/profile" className="flex items-center gap-2 ml-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-all no-underline shrink-0 group">
             <div className="hidden xs:block bg-indigo-900 text-white text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-widest transition-transform group-hover:scale-95">
                {userRole?.toUpperCase() || 'USER'}
             </div>
             <UserCircle size={22} className="text-slate-500" />
          </NavLink>
       </div>
    </header>
  );
};

export default Navbar;
