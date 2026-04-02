import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Eye, 
  Send, 
  Target, 
  Filter,
  Users,
  MessageSquare,
  MoreHorizontal,
  ExternalLink,
  ChevronRight,
  User,
  CheckCircle2,
  Clock,
  Briefcase,
  Code
} from 'lucide-react';

const RecruiterHub = () => {
  const [activeJobs, setActiveJobs] = React.useState([
    { 
      title: 'Senior Frontend Engineer (React)', 
      category: 'Full-time', 
      location: { city: 'Remote' },
      applicants: 124, 
      views: '1.2k', 
      skills: ['React', 'TypeScript', 'Tailwind'],
      status: 'ACTIVE',
    },
    { 
      title: 'Backend Systems Architect', 
      category: 'Full-time', 
      location: { city: 'On-site (ISB)' },
      applicants: 45, 
      views: 890, 
      skills: ['Node.js', 'PostgreSQL', 'Docker'],
      status: 'ACTIVE',
    }
  ]);

  React.useEffect(() => {
    document.title = "Recruiter Hub | PK IT Jobs";
    const stored = JSON.parse(localStorage.getItem('pkit_posted_jobs') || '[]');
    if (stored.length > 0) {
      setActiveJobs(prev => [...stored, ...prev]);
    }
  }, []);
  
  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6 bg-slate-50 min-h-screen">
      {/* Recruiter Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
             Company Dashboard
           </div>
           <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Recruiter Hub</h1>
           <p className="text-slate-500 font-medium mt-2">Manage your active postings and discover top IT talent.</p>
        </div>
        <Link 
          to="/create-job"
          onClick={() => {
            import('../utils/notifications').then(({ playNotificationSound }) => {
              playNotificationSound();
            });
          }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:shadow-md border border-indigo-700 no-underline"
        >
           <Send size={18} /> Post a New Job
        </Link>
      </header>

      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -z-0 opacity-50 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <span className="text-slate-500 text-xs font-bold tracking-wide uppercase block mb-2">Total Job Views</span>
            <p className="text-4xl font-black text-slate-900">12,482</p>
            <span className="text-xs font-bold text-emerald-500 mt-3 flex items-center gap-1 bg-emerald-50 w-max px-2 py-1 rounded-md border border-emerald-100">
               <Target size={14} className="rotate-[-45deg]" /> +14.2% <span className="text-slate-500 font-medium ml-1">this month</span>
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <span className="text-slate-500 text-xs font-bold tracking-wide uppercase block mb-2">Total Applications</span>
            <p className="text-4xl font-black text-slate-900">842</p>
            <span className="text-xs font-bold text-emerald-500 mt-3 flex items-center gap-1 bg-emerald-50 w-max px-2 py-1 rounded-md border border-emerald-100">
               <Target size={14} className="rotate-[-45deg]" /> +8.4% <span className="text-slate-500 font-medium ml-1">this month</span>
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="relative z-10 w-full">
            <div className="flex justify-between items-center mb-2">
               <span className="text-slate-500 text-xs font-bold tracking-wide uppercase">Conversion Rate</span>
               <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-2 py-1 rounded-md tracking-wider uppercase">Avg: 6.2%</span>
            </div>
            <p className="text-4xl font-black text-slate-900">6.74%</p>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-5 overflow-hidden border border-slate-200">
               <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-2 text-right">Above Average</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8">
        {/* Active Jobs Main Feed */}
        <div className="flex flex-col gap-6">
           <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Briefcase className="text-indigo-600" size={20} /> Active Jobs
              </h3>
              <button className="text-indigo-600 font-bold text-sm hover:underline">View All</button>
           </div>
           
            <div className="flex flex-col gap-5">
              {activeJobs.map((job, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex justify-between items-start text-left">
                     <div className="text-left flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                           <h4 className="text-lg lg:text-xl font-bold text-slate-900">{job.title}</h4>
                           <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                             job.status === 'ACTIVE' 
                               ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                               : 'bg-slate-100 text-slate-600 border-slate-200'
                           }`}>
                             {job.status || 'ACTIVE'}
                           </span>
                        </div>
                        <p className="text-slate-500 font-medium text-sm mt-2">{job.category} • {job.location.city}</p>
                        
                        <div className="flex gap-8 mt-6 items-center">
                           <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                              <Users size={16} className="text-indigo-500" /> {job.applicants || 0} Applicants
                           </div>
                           <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                              <Eye size={16} className="text-indigo-500" /> {job.views || 0} Views
                           </div>
                        </div>

                        {(job.skills || []).length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-6">
                             {job.skills.map(t => (
                               <span key={t} className="bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-[10px] px-3 py-1.5 rounded-lg uppercase tracking-wider">
                                 {t}
                               </span>
                             ))}
                          </div>
                        )}
                     </div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* New Applicants Sidebar */}
        <aside className="flex flex-col gap-6">
           <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <User className="text-indigo-600" size={20} /> New Applicants
              </h3>
              <button className="text-slate-400 hover:text-indigo-600 p-2 hover:bg-white border border-transparent hover:border-slate-200 rounded-lg shadow-sm transition-all"><Filter size={18} /></button>
           </div>

           <div className="flex flex-col gap-5">
              {[
                {
                   name: 'Alex Rivers',
                   uni: 'Stanford University • CS',
                   project: 'AI-Powered Note Taker',
                   img: 'https://ui-avatars.com/api/?name=Alex+Rivers&background=312e81&color=fff',
                   highlight: 'FEATURED PROJECT',
                   highlightColor: 'text-indigo-600',
                   bgCode: 'bg-indigo-50 border-indigo-100'
                },
                {
                   name: 'Maya Chen',
                   uni: 'FAST NUCES • Software Engineering',
                   project: 'Scalable E-Commerce Backend',
                   img: 'https://ui-avatars.com/api/?name=Maya+Chen&background=0284c7&color=fff',
                   highlight: 'HIGH MATCH',
                   highlightColor: 'text-sky-600',
                   bgCode: 'bg-sky-50 border-sky-100'
                }
              ].map((app, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center hover:shadow-md transition-shadow group cursor-pointer">
                   <div className="flex items-center gap-4 w-full border-b border-slate-100 pb-5">
                      <img src={app.img} className="w-14 h-14 rounded-full border-2 border-white shadow-sm ring-2 ring-slate-100" alt={app.name} />
                      <div className="text-left flex-1 border-l pl-4 border-slate-100">
                         <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{app.name}</h4>
                         <p className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wider">{app.uni}</p>
                      </div>
                   </div>
                   
                   <div className="mt-5 w-full text-left">
                      <span className={`text-[10px] ${app.highlightColor} font-black tracking-widest block mb-3 uppercase flex items-center gap-1.5`}>
                        <CheckCircle2 size={12} /> {app.highlight}
                      </span>
                      <div className={`h-28 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-dashed ${app.bgCode} group-hover:bg-slate-50 transition-colors`}>
                         <div className="flex flex-col items-center opacity-60">
                           <Code size={24} className={app.highlightColor} />
                           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Code Snippet</span>
                         </div>
                      </div>
                      <p className="text-sm font-bold text-slate-700 mt-4 leading-tight">{app.project}</p>
                   </div>

                   <div className="w-full flex gap-3 mt-6 pt-6 border-t border-slate-100">
                      <Link to="/profile" className="flex-1 bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 text-xs font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center no-underline">
                        View Profile
                      </Link>
                      <button 
                        onClick={() => {
                          import('../utils/notifications').then(({ playNotificationSound }) => {
                            playNotificationSound();
                          });
                        }}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm"
                      >
                        Message
                      </button>
                   </div>
                </div>
              ))}
           </div>
           <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={18} /> Performance Reviews
                 </h3>
                 <span className="text-[10px] font-black text-slate-400">VIEW ALL</span>
              </div>
              <div className="space-y-4">
                 {[
                   { name: 'Senior Dev Role', score: '94%', trend: '+2%' },
                   { name: 'Interview Quality', score: '8.4/10', trend: 'Stable' }
                 ].map((r, i) => (
                   <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center">
                      <div>
                         <p className="text-xs font-bold text-slate-900">{r.name}</p>
                         <p className="text-[10px] font-semibold text-slate-400 mt-0.5">Automated Insight</p>
                      </div>
                      <div className="text-right">
                         <p className="text-sm font-black text-indigo-600">{r.score}</p>
                         <p className="text-[9px] font-bold text-emerald-500">{r.trend}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </aside>
      </div>

    </div>
  );
};

export default RecruiterHub;
