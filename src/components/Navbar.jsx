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
  PlusCircle
} from 'lucide-react';

const Navbar = ({ userRole }) => {
  const getNavLinks = () => {
    switch(userRole) {
      case 'admin':
        return [
          { to: '/dashboard', label: 'Admin Panel', icon: <LayoutDashboard size={18} /> },
          { to: '/admin', label: 'Moderation', icon: <Briefcase size={18} /> },
          { to: '/settings', label: 'Systems', icon: <Settings size={18} /> },
        ];
      case 'recruiter':
        return [
          { to: '/dashboard', label: 'Hub', icon: <LayoutDashboard size={18} /> },
          { to: '/recruiter', label: 'Talent', icon: <Search size={18} /> },
          { to: '/create-job', label: 'Hiring', icon: <PlusCircle size={18} /> },
        ];
      default:
        return [
          { to: '/jobs', label: 'Opportunities', icon: <Briefcase size={18} /> },
          { to: '/portfolio', label: 'Portfolio', icon: <UserCircle size={18} /> },
          { to: '/dashboard', label: 'Metrics', icon: <LayoutDashboard size={18} /> },
        ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <header className="h-[72px] bg-white border-b border-slate-200 sticky top-0 z-50 flex items-center justify-between px-8">
       <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2 no-underline">
             <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
             <span className="text-xl font-bold tracking-tight text-slate-900">PK IT Jobs</span>
          </Link>
          
          <div className="hidden lg:flex gap-1">
             {navLinks.map((link, idx) => (
                <NavLink 
                  key={idx} 
                  to={link.to} 
                  className={({ isActive }) => 
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-slate-100 text-blue-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`
                  }
                >
                   {link.label}
                </NavLink>
             ))}
          </div>
       </div>

       <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-slate-500 text-xs font-semibold">
             <Search size={14} /> 
             <span>Search Platform...</span>
             <span className="text-slate-400 ml-4 font-bold border border-slate-200 rounded px-1.5 py-0.5">⌘K</span>
          </div>

          <div className="flex items-center gap-5 text-slate-500 border-l border-slate-200 pl-6">
             <button type="button" className="hover:text-blue-600 transition-colors relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
             </button>
             <button type="button" className="hover:text-blue-600 transition-colors">
                <MessageSquare size={20} />
             </button>
          </div>

          <div className="flex items-center gap-3 ml-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
             <div className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                {userRole === 'admin' ? 'Admin' : userRole === 'recruiter' ? 'Recruiter' : 'Student'}
             </div>
             <UserCircle size={24} className="text-slate-600" />
          </div>
       </div>
    </header>
  );
};

export default Navbar;
