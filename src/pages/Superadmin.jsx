import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Bell, 
  MessageSquare, 
  Search, 
  Users, 
  TrendingUp, 
  Briefcase, 
  Clock, 
  Activity,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  XCircle,
  HelpCircle,
  LogOut,
  LayoutDashboard,
  DollarSign,
  Lock,
  Unlock,
  ShieldAlert,
  Send,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { playNotificationSound } from '../utils/notifications';

const Superadmin = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const activeTab = queryParams.get('tab') || 'overview';

  const [logs, setLogs] = useState([]);
  const [lockedUsers, setLockedUsers] = useState([]);
  const [smtpLogs, setSmtpLogs] = useState([
    { to: 'admin@pkit.jobs', subject: 'Security Alert: Account #821 Locked', status: 'SENT', time: '12m ago' },
    { to: 'student@example.com', subject: 'Your Job Application Received', status: 'SENT', time: '1h ago' }
  ]);

  useEffect(() => {
    document.title = "Platform Administration | PK IT Jobs";
    loadData();
  }, [activeTab]);

  const loadData = () => {
    const storedLogs = JSON.parse(localStorage.getItem('pkit_system_logs') || '[]');
    setLogs(storedLogs);

    const locked = [];
    for (let i = 0; i < localStorage.length; i++) {
       const key = localStorage.key(i);
       if (key && key.startsWith('lockout_')) {
          const data = JSON.parse(localStorage.getItem(key));
          if (data.until && data.until > new Date().getTime()) {
             locked.push({ 
                email: key.replace('lockout_', ''), 
                until: new Date(data.until).toLocaleTimeString(),
                attempts: '3'
             });
          }
       }
    }
    setLockedUsers(locked);
  };

  const handleUnlock = (email) => {
    localStorage.removeItem(`lockout_${email}`);
    localStorage.removeItem(`attempts_${email}`);
    const newLog = { id: Date.now(), type: 'SECURITY', event: 'MANUAL_UNLOCK', user: email, time: new Date().toISOString(), status: 'UNLOCKED' };
    const updatedLogs = [newLog, ...logs];
    localStorage.setItem('pkit_system_logs', JSON.stringify(updatedLogs.slice(0, 50)));
    setLogs(updatedLogs);
    loadData();
    playNotificationSound();
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6 min-h-screen">
      
      {/* Superadmin Header */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-xl border border-slate-700">
             <ShieldCheck size={12} className="text-emerald-400" /> Root Access Active
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
            {activeTab === 'overview' && 'Systems Overview'}
            {activeTab === 'users' && 'User Management'}
            {activeTab === 'moderation' && 'Job Moderation'}
            {activeTab === 'logs' && 'System Console'}
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl">
             Managing total system lifecycle across {activeTab} stream.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
           <button onClick={() => { playNotificationSound(); loadData(); }} className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-500 hover:text-indigo-600 shadow-sm"><Activity size={20} /></button>
           <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-2.5 rounded-3xl shadow-sm">
              <div className="text-right">
                 <p className="text-xs font-black text-slate-900">Admin_Root</p>
                 <p className="text-[10px] font-bold text-slate-400 uppercase">System Architect</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Root+Admin&background=0F172A&color=fff" className="w-10 h-10 rounded-full border border-slate-100" alt="" />
           </div>
        </div>
      </header>

      {/* Dynamic Tab Content */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Main Area */}
        <div className="xl:col-span-8 space-y-8">
           
           {(activeTab === 'overview' || activeTab === 'users') && (
              <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-8 lg:p-10 overflow-hidden">
                 <div className="flex justify-between items-center mb-10">
                    <h3 className="text-xl font-black text-slate-900">User Registry</h3>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl w-full max-w-xs">
                       <Search size={16} className="text-slate-400" />
                       <input placeholder="Filter all accounts..." className="bg-transparent border-none outline-none text-sm font-bold w-full" />
                    </div>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">
                             <th className="pb-6">Entity Identity</th>
                             <th className="pb-6">Type</th>
                             <th className="pb-6">Status</th>
                             <th className="pb-6 text-right">Action</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-50">
                          {[
                            { name: 'Sarah Chen', email: 'sarah.c@dev.io', type: 'DEVELOPER', status: 'Active', color: 'emerald' },
                            { name: 'Swift Logic PK', email: 'hr@swiftlogic.pk', type: 'COMPANY', status: 'Verified', color: 'indigo' },
                            { name: 'James Dalton', email: 'j.dalton@gmail.com', type: 'DEVELOPER', status: 'Active', color: 'slate' }
                          ].map((u, i) => (
                            <tr key={i} className="group hover:bg-slate-50/50 transition-all">
                               <td className="py-6 flex items-center gap-4">
                                  <div className={`w-11 h-11 rounded-2xl bg-${u.color}-50 text-${u.color}-600 flex items-center justify-center font-black text-xs border border-${u.color}-100`}>
                                     {u.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                     <p className="text-sm font-bold text-slate-900">{u.name}</p>
                                     <p className="text-xs font-bold text-slate-400">{u.email}</p>
                                  </div>
                               </td>
                               <td className="py-6"><span className="text-[9px] font-black bg-slate-100 text-slate-600 px-3 py-1 rounded-full uppercase tracking-wider">{u.type}</span></td>
                               <td className="py-6 flex items-center gap-2"><div className={`w-2 h-2 rounded-full bg-${u.color}-500`}></div><span className="text-xs font-bold text-slate-600">{u.status}</span></td>
                               <td className="py-6 text-right"><MoreVertical size={16} className="text-slate-300 cursor-pointer" /></td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           )}

           {(activeTab === 'overview' || activeTab === 'moderation') && (
              <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-8 lg:p-10">
                 <h3 className="text-xl font-black text-slate-900 mb-8">Pending Moderation</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'Remote PHP Dev', company: 'DevSync ISB', desc: 'Seeking senior Laravel engineer for high-traffic financial app...' },
                      { title: 'Frontend Intern', company: 'Creative Labs LHR', desc: 'Final year students with React knowledge...' }
                    ].map((m, i) => (
                      <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-[32px] flex flex-col justify-between hover:border-indigo-200 transition-all text-left">
                         <div>
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded uppercase mb-4 inline-block">Review Required</span>
                            <h4 className="text-lg font-black text-slate-900 leading-tight">{m.title}</h4>
                            <p className="text-xs font-bold text-slate-400 mt-1">{m.company}</p>
                            <p className="text-xs text-slate-500 mt-4 leading-relaxed line-clamp-2 italic">"{m.desc}"</p>
                         </div>
                         <div className="mt-8 flex gap-3">
                            <button className="flex-1 bg-white border border-slate-200 text-slate-900 font-bold py-2.5 rounded-xl text-xs hover:bg-emerald-50 hover:border-emerald-200 transition-all">Approve</button>
                            <button className="flex-1 bg-white border border-slate-200 text-rose-600 font-bold py-2.5 rounded-xl text-xs hover:bg-rose-50 hover:border-rose-100 transition-all">Reject</button>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           )}

           {(activeTab === 'overview' || activeTab === 'logs') && (
              <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-8 lg:p-10 overflow-hidden">
                 <h3 className="text-xl font-black text-slate-900 mb-8">System Console Activity</h3>
                 <div className="space-y-4">
                    {logs.map((l, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                          <div className="flex items-center gap-4">
                             <div className={`w-2 h-2 rounded-full ${l.status === 'LOCKED' ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                             <div>
                                <p className="text-xs font-black text-slate-900 uppercase">{l.event}</p>
                                <p className="text-[10px] font-bold text-slate-400">{l.user}</p>
                             </div>
                          </div>
                          <span className="text-[10px] font-black text-slate-300">{new Date(l.time).toLocaleTimeString()}</span>
                       </div>
                    ))}
                 </div>
              </div>
           )}

        </div>

        {/* Right Sidebar Area */}
        <aside className="xl:col-span-4 space-y-8">
           
           {/* Quick Security Actions */}
           <div className="bg-white rounded-[40px] border border-slate-200 shadow-sm p-8 lg:p-10">
              <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-3"><ShieldAlert className="text-rose-500" size={20} /> Security Gate</h3>
              {lockedUsers.length === 0 ? (
                 <div className="py-6 text-center text-slate-300 font-bold text-xs uppercase tracking-widest">No Active Lockouts</div>
              ) : (
                 <div className="space-y-4">
                    {lockedUsers.map((u, i) => (
                       <div key={i} className="p-4 bg-rose-50 border border-rose-100 rounded-3xl text-left">
                          <p className="text-[10px] font-black text-rose-500 uppercase mb-2">Locked Account</p>
                          <p className="text-xs font-bold text-slate-900 mb-1">{u.email}</p>
                          <p className="text-[10px] text-slate-400 font-medium mb-4">Until {u.until}</p>
                          <button onClick={() => handleUnlock(u.email)} className="w-full py-2.5 bg-rose-600 text-white font-bold rounded-xl text-xs hover:bg-rose-700 transition-all">Force Unlock</button>
                       </div>
                    ))}
                 </div>
              )}
           </div>

           {/* Platform Growth */}
           <div className="bg-indigo-900 rounded-[40px] p-10 text-white shadow-2xl shadow-indigo-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="relative z-10 text-left">
                 <p className="text-[10px] font-black tracking-widest uppercase opacity-70 mb-4 flex items-center gap-2"><TrendingUp size={14} /> Performance</p>
                 <h4 className="text-2xl font-black mb-1">94.8%</h4>
                 <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-8">Uptime Integrity</p>
                 
                 <div className="flex gap-4">
                    <button className="flex-1 bg-white text-indigo-900 font-black py-3 rounded-2xl text-[10px] uppercase hover:scale-105 transition-all">Audit Logs</button>
                    <button className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10"><Send size={18} /></button>
                 </div>
              </div>
           </div>

        </aside>

      </div>
    </div>
  );
};

export default Superadmin;
