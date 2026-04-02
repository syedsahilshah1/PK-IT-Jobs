import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Calendar,
  ChevronRight,
  Bookmark,
  ExternalLink,
  Edit2
} from 'lucide-react';
import { quickApply } from '../utils/jobUtils';

const Dashboard = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6">
      {/* Welcome Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, <span className="text-blue-600">Alex!</span></h1>
        <p className="text-slate-500 font-medium mt-2 text-lg">
          Your portfolio strength is up by <span className="text-purple-600 font-bold">12%</span> this week. 
          3 recruiters viewed your React projects yesterday.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Top Cards Section */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 lg:min-w-[300px]">
              <h3 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wide">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                <Link to="/portfolio-editor" className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl transition-colors group no-underline text-inherit">
                  <div className="flex items-center gap-4">
                    <span className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100"><Edit2 size={18} /></span>
                    <span className="font-semibold text-slate-700">Edit Portfolio</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-slate-600" />
                </Link>
                <Link to="/jobs" className="flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-xl transition-colors group no-underline text-inherit">
                  <div className="flex items-center gap-4">
                    <span className="p-2 bg-red-50 text-red-600 rounded-lg group-hover:bg-red-100"><Search size={18} /></span>
                    <span className="font-semibold text-slate-700">Browse All Jobs</span>
                  </div>
                  <ChevronRight size={18} className="text-slate-400 group-hover:text-slate-600" />
                </Link>
              </div>
            </div>

            {/* Application Status */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-[2]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Application Status</h3>
                <button className="text-sm font-bold text-blue-600 hover:underline">View All History</button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 text-blue-600 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">12</div>
                  <div className="text-[10px] font-bold tracking-widest opacity-80 uppercase">PENDING</div>
                </div>
                <div className="bg-green-50 text-green-600 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">4</div>
                  <div className="text-[10px] font-bold tracking-widest opacity-80 uppercase">ACCEPTED</div>
                </div>
                <div className="bg-red-50 text-red-600 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">2</div>
                  <div className="text-[10px] font-bold tracking-widest opacity-80 uppercase">REJECTED</div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl mt-6 relative pl-10 border border-slate-100">
                <span className="absolute left-4 top-5 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"></span>
                <p className="text-sm text-slate-700 font-medium">Interview scheduled for <span className="font-bold text-slate-900">Frontend Developer Intern</span> at TechFlow</p>
                <div className="flex items-center gap-2 mt-2">
                   <Clock size={14} className="text-slate-400" />
                   <span className="text-xs font-bold text-slate-500">Tomorrow at 10:00 AM • Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Section */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Recommended for You</h3>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 font-bold text-xs rounded-full">REACT</button>
                <button className="px-4 py-1.5 bg-slate-100 text-slate-500 font-bold text-xs rounded-full hover:bg-slate-200 transition-colors">TYPESCRIPT</button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {[
                { 
                  title: 'React Developer Intern', 
                  company: 'TechFlow Systems', 
                  tags: ['FULL_TIME', 'REMOTE', '$2.5k - $4k'],
                  logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png'
                },
                { 
                  title: 'Junior UI/UX Engineer', 
                  company: 'Stellar Design Studio', 
                  tags: ['CONTRACT', 'HYBRID', '$3k - $5k'],
                  logo: 'https://cdn-icons-png.flaticon.com/128/900/900667.png'
                }
              ].map((job, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-slate-100 bg-slate-50 rounded-xl p-2">
                       <img src={job.logo} alt="" className="w-full object-contain grayscale opacity-80" />
                    </div>
                    <button className="text-slate-400 hover:text-blue-500 transition-colors"><Bookmark size={20} /></button>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">{job.title}</h4>
                  <p className="text-sm font-semibold text-slate-500 mt-1">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mt-4 mb-6">
                    {job.tags.map(t => <span key={t} className="px-2 py-1 bg-slate-100 text-slate-500 text-[9px] font-bold rounded uppercase tracking-wider">{t}</span>)}
                  </div>
                  <button onClick={() => quickApply(job)} className="w-full py-3 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-bold text-sm transition-colors border border-blue-100 hover:border-blue-600">Quick Apply</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar - Events */}
        <aside className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
          <div className="flex justify-between items-center mb-8">
             <h3 className="text-lg font-bold">Upcoming Events</h3>
             <Calendar size={20} className="text-slate-400" />
          </div>
          
          <div className="flex flex-col gap-8">
            {[
              { 
                date: 'SEP 14 • 2:00 PM', 
                title: 'Mock Interview Session with Microsoft Mentors',
                color: 'bg-purple-500' 
              },
              { 
                date: 'SEP 16 • 10:00 AM', 
                title: 'Career Fair: Fintech Startups 2024',
                color: 'bg-slate-400' 
              },
              { 
                date: 'SEP 20 • 4:00 PM', 
                title: 'Portfolio Review Workshop',
                color: 'bg-slate-400' 
              }
            ].map((event, i) => (
              <div key={i} className="flex gap-4 relative">
                {/* Timeline line */}
                {i < 2 && <div className="absolute left-[5px] top-6 bottom-[-32px] w-[1px] bg-white/10"></div>}
                
                <div className="relative z-10 pt-1.5 flex flex-col items-center shrink-0">
                  <div className={`w-3 h-3 rounded-full ${event.color} shadow-lg ring-4 ring-slate-900`}></div>
                </div>
                
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{event.date}</span>
                  <p className="font-semibold mt-1.5 leading-snug">{event.title}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-12 py-3 border border-white/20 hover:bg-white/10 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors">
            View Calendar
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;
