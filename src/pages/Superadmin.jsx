import React from 'react';
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
  LayoutDashboard
} from 'lucide-react';

const Superadmin = () => {
  return (
    <div className="superadmin-page animate-fade-in p-10 bg-gray-50/50 min-h-screen">
      <header className="flex justify-between items-center mb-10">
        <div className="search-wrap glass px-4 py-2 rounded-xl flex items-center gap-3 w-96">
           <Search size={18} className="text-muted" />
           <input type="text" placeholder="Search systems, logs, or users..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
        <div className="header-actions flex gap-6 items-center">
           <div className="icon-badge relative"><Bell size={20} /><span className="dot red"></span></div>
           <MessageSquare size={20} />
           <img src="https://ui-avatars.com/api/?name=Admin&background=0F172A&color=fff" className="w-10 h-10 rounded-full" alt="" />
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8 mb-10">
        <div className="col-span-6 card revenue-card bg-primary text-white p-10 flex flex-col justify-between overflow-hidden relative">
           <div className="flex justify-between items-center mb-10 z-10">
              <span className="text-xs font-800 tracking-widest opacity-70">PLATFORM REVENUE (Q3)</span>
              <span className="badge-live px-3 py-1 bg-white/20 rounded font-800 text-[10px]">LIVE</span>
           </div>
           
           <div className="z-10">
              <p className="text-5xl font-800">$1,284,500.00</p>
              <p className="text-sm mt-4 flex items-center gap-2 font-600 opacity-80">
                 <TrendingUp size={16} /> +12.4% <span className="font-400 opacity-60">from last quarter</span>
              </p>
           </div>

           <div className="revenue-bars flex items-end gap-2 h-40 mt-10 z-10">
              {[30, 45, 35, 60, 50, 80, 55, 100].map((h, i) => (
                <div key={i} className="bar flex-1 bg-white/20 rounded-t" style={{height: `${h}%`}}></div>
              ))}
           </div>
        </div>

        <div className="col-span-3 card flex flex-col justify-between p-8">
           <div>
              <span className="text-xs font-800 text-muted tracking-widest uppercase">User Ecosystem</span>
              <p className="text-4xl font-800 mt-2">42.8k</p>
           </div>
           
           <div className="ecosystem-stats mt-10">
              <div className="flex justify-between items-center mb-2">
                 <span className="text-xs font-600">Students</span>
                 <span className="text-xs font-800 text-primary">38.2k</span>
              </div>
              <div className="h-1 bg-gray-100 rounded overflow-hidden"><div className="h-full bg-primary w-[85%]"></div></div>
              
              <div className="flex justify-between items-center mt-6 mb-2">
                 <span className="text-xs font-600">Companies</span>
                 <span className="text-xs font-800 text-tertiary">4.6k</span>
              </div>
              <div className="h-1 bg-gray-100 rounded overflow-hidden"><div className="h-full bg-tertiary w-[15%]"></div></div>
           </div>
        </div>

        <div className="col-span-3 card flex flex-col justify-between p-8">
           <div>
              <span className="text-xs font-800 text-muted tracking-widest uppercase">Active Pipelines</span>
              <p className="text-4xl font-800 mt-2">1,402</p>
           </div>
           
           <div className="mod-alert bg-red-50 p-6 rounded-xl flex items-center gap-4 border border-red-100 mt-10">
              <div className="icon-wrap-red bg-red-100 p-2 rounded text-red-600"><Briefcase size={20} /></div>
              <div>
                 <p className="text-[10px] font-800 text-red-600 tracking-wide">JOB MODERATION</p>
                 <p className="text-xs font-700 text-red-900 mt-1">42 Pending Approval</p>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 card">
           <div className="flex justify-between items-center mb-10">
              <div className="text-left">
                 <h3>User Management</h3>
                 <p className="text-xs text-muted mt-1 font-600 uppercase tracking-widest">RECENTLY ACTIVE ACCOUNTS</p>
              </div>
              <button className="btn-primary py-2 px-6 rounded-lg text-sm">Manage All Users</button>
           </div>
           
           <table className="user-table w-full text-left">
              <thead>
                 <tr className="text-xs font-800 text-muted tracking-widest uppercase border-b border-gray-100">
                    <th className="pb-4">USER ENTITY</th>
                    <th className="pb-4">TYPE</th>
                    <th className="pb-4">STATUS</th>
                    <th className="pb-4 text-right">ACTION</th>
                 </tr>
              </thead>
              <tbody>
                 {[
                   { name: 'Sarah Chen', email: 'sarah.c@student.edu', type: 'STUDENT', status: 'Active', color: '#10b981' },
                   { name: 'NeuroLogic AI', email: 'hiring@neurologic.io', type: 'COMPANY', status: 'Verified', color: '#3b82f6' },
                   { name: 'James Dalton', email: 'j.dalton@gmail.com', type: 'STUDENT', status: 'Flagged', color: '#ef4444' }
                 ].map((u, i) => (
                   <tr key={i} className="border-b border-gray-50 last:border-none">
                      <td className="py-6 flex items-center gap-4">
                         <div className="user-initials bg-primary/10 text-primary w-10 h-10 rounded-lg flex items-center justify-center font-800 text-xs">{u.name.split(' ').map(n => n[0]).join('')}</div>
                         <div><p className="text-sm font-700">{u.name}</p><p className="text-xs text-muted font-500">{u.email}</p></div>
                      </td>
                      <td className="py-6"><span className="text-[10px] font-800 bg-secondary/10 text-secondary px-3 py-1 rounded-sm">{u.type}</span></td>
                      <td className="py-6 flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{background: u.color}}></div><span className="text-xs font-600">{u.status}</span></td>
                      <td className="py-6 text-right"><MoreVertical size={18} className="text-muted cursor-pointer" /></td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>

        <aside className="col-span-4 card flex flex-col p-8 bg-gray-50/50 border-none">
           <div className="flex justify-between items-center mb-8">
              <h3>System Logs</h3>
              <Clock size={18} className="text-muted" />
           </div>
           
           <div className="logs-feed flex flex-col gap-6">
              {[
                { time: '14:22:15 • SYSTEM', event: 'Stripe Payment Successful', detail: 'Transaction ID: #TRX-9821-A', color: '#7C3AED' },
                { time: '13:05:42 • SECURITY', event: 'Failed Login Attempt', detail: 'IP: 192.168.1.45 (Bangkok, TH)', color: '#ef4444' },
                { time: '12:44:01 • JOB_BOARD', event: 'New Job Posted: "Senior Dev"', detail: 'By: Google Cloud Recruitment', color: '#2563EB' },
                { time: '11:15:20 • USER', event: 'Sarah Chen updated Profile', detail: '', color: '#10b981' }
              ].map((log, i) => (
                <div key={i} className="log-item flex gap-4">
                   <div className="log-bar w-1 rounded bg-gray-200" style={{background: log.color}}></div>
                   <div className="text-left">
                      <p className="text-[10px] font-800 text-muted opacity-60 uppercase">{log.time}</p>
                      <p className="text-sm font-700 mt-1">{log.event}</p>
                      {log.detail && <p className="text-[11px] text-muted italic mt-1">{log.detail}</p>}
                   </div>
                </div>
              ))}
           </div>
           
           <button className="btn-outline w-full mt-12 py-3 text-[10px] font-800 tracking-widest uppercase">DOWNLOAD FULL HISTORY</button>
        </aside>
      </div>

      <section className="moderation-queue mt-10">
         <div className="flex justify-between items-center mb-8">
            <h2>Job Moderation Queue</h2>
            <button className="icon-btn"><TrendingUp size={18} /></button>
         </div>
         
         <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Full Stack Engineer', company: 'TechNexus Solutions • Remote', desc: 'Seeking a junior developer with experience in React and Rust for our edge infrastructure...' },
              { title: 'Data Science Intern', company: 'DataLabs Analytics • London', desc: 'Focus on Python and scikit-learn. Must be currently enrolled in a BS or graduate program...' },
              { title: 'Product Designer', company: 'Creativ Co • Tokyo', desc: 'Strong Figma skills and a portfolio showcasing user-centric mobile applications...' }
            ].map((job, i) => (
              <div key={i} className="card mod-card p-10 flex flex-col justify-between">
                 <div className="flex gap-6 mb-10 items-start">
                    <div className="icon-box bg-gray-50 border w-12 h-12 rounded-xl flex items-center justify-center"><Briefcase size={20} className="text-primary" /></div>
                    <div className="text-left w-full">
                       <div className="flex justify-between">
                          <h4>{job.title}</h4>
                          <span className="text-[10px] font-800 bg-primary/10 text-primary px-2 py-0.5 rounded uppercase">PENDING</span>
                       </div>
                       <p className="text-xs text-muted mt-1">{job.company}</p>
                    </div>
                 </div>
                 <div className="p-6 bg-gray-50/50 rounded-xl mb-10 text-left">
                    <p className="text-xs italic text-muted-600">"{job.desc}"</p>
                 </div>
                 <div className="flex gap-4">
                    <button className="btn-primary flex-1 py-3 text-sm rounded-lg">Approve</button>
                    <button className="btn-outline flex-1 py-3 text-sm rounded-lg text-red-600 border-red-100 hover:bg-red-50">Decline</button>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <style>{`
        .revenue-card::after {
           content: '';
           position: absolute;
           top: -50px;
           right: -50px;
           width: 300px;
           height: 300px;
           background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
           border-radius: 50%;
        }
        .dot.red { background: var(--danger); position: absolute; top: -2px; right: -2px; border: 2px solid white; width: 8px; height: 8px; border-radius: 50%; }
        .text-5xl { font-size: 48px; }
        .font-800 { font-weight: 800; }
        
        .mod-card { border: none; box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
      `}</style>
    </div>
  );
};

export default Superadmin;
