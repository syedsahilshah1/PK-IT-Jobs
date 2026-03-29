import React from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Briefcase, 
  Filter,
  ChevronDown,
  Bookmark,
  Building2,
  Globe,
  Monitor,
  Zap
} from 'lucide-react';

const Jobs = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in relative z-10 p-2 lg:p-6">
      {/* Top Search Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 pl-6 flex items-center mb-10 w-full max-w-4xl">
        <Search size={20} className="text-slate-400" />
        <input type="text" placeholder="Search job titles or roles..." className="w-full bg-transparent border-none outline-none px-4 py-3 text-slate-800 font-medium placeholder-slate-400" />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Filters */}
        <aside className="w-full lg:w-64 shrink-0">
          <div>
            <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-6">FILTERS</h3>
            
            <div className="mb-8">
              <label className="text-sm font-bold text-slate-900 block mb-4">Job Type</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                   <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                   <span className="text-sm font-semibold text-slate-700">Full-time</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                   <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                   <span className="text-sm font-semibold text-slate-700">Internship</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                   <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                   <span className="text-sm font-semibold text-slate-500">Freelance</span>
                </label>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="text-sm font-bold text-slate-900 block mb-4">Work Mode</label>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-900 cursor-pointer">
                   <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span> Remote
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-700">
                   <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> Onsite
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-500 cursor-pointer hover:text-slate-700">
                   <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span> Hybrid
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-900 block mb-4">Skill Stack</label>
              <div className="flex flex-wrap gap-2">
                 {['REACT', 'NODE.JS', 'PYTHON', 'AWS'].map(skill => (
                   <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-md">{skill}</span>
                 ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main List */}
        <div className="flex-1">
          <header className="flex justify-between items-end mb-8 border-b border-slate-100 pb-4">
            <div>
               <h2 className="text-2xl font-bold text-slate-900">Open Positions</h2>
               <p className="text-slate-500 font-medium mt-1 text-sm">Found 42 opportunities matching your stack.</p>
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-1">
               Sort by: <span className="font-bold cursor-pointer flex items-center gap-1 text-slate-700 hover:text-slate-900">Newest First <ChevronDown size={14} /></span>
            </div>
          </header>

          <div className="flex flex-col xl:flex-row gap-8 items-start">
            <div className="flex-1 flex flex-col gap-6 w-full">
              {[
                {
                   logo: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
                   title: 'Frontend Developer Intern',
                   company: 'PixelFlow Studios',
                   location: 'Vancouver (Remote)',
                   tags: ['React', 'Tailwind', 'TypeScript'],
                   salary: '$3k - $5k',
                   isFeatured: true
                },
                {
                   logo: 'https://cdn-icons-png.flaticon.com/128/888/888879.png',
                   title: 'Backend Engineering Fellow',
                   company: 'OpenSource Foundation',
                   location: 'Distributed',
                   tags: ['Go', 'Docker', 'K8s'],
                   salary: 'Stipend Available',
                   isFeatured: false
                },
                {
                   logo: 'https://cdn-icons-png.flaticon.com/128/919/919851.png',
                   title: 'Mobile Dev (React Native)',
                   company: 'SwiftApp Inc',
                   location: 'San Francisco, CA',
                   tags: ['React Native', 'Firebase'],
                   salary: '$110k - $140k',
                   isFeatured: false
                }
              ].map((job, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 shrink-0 flex items-center justify-center p-2 border border-slate-100 rounded-xl relative">
                          <img src={job.logo} alt="" className="w-full object-contain grayscale opacity-80" />
                       </div>
                       <div>
                          <div className="flex items-center flex-wrap gap-2">
                             <h4 className="font-bold text-slate-900">{job.title}</h4>
                             {job.isFeatured && <span className="text-[9px] bg-red-50 text-red-500 px-2 py-0.5 rounded font-extrabold uppercase tracking-widest">FEATURED</span>}
                          </div>
                          <p className="text-sm font-semibold text-slate-600 mt-1">{job.company} <span className="opacity-50 mx-1">•</span> {job.location}</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                             {job.tags.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 border border-slate-200 rounded-full text-slate-500">{t}</span>)}
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:items-end justify-between sm:h-full gap-4 mt-2 sm:mt-0 items-center">
                       <span className="font-bold text-slate-900 text-sm whitespace-nowrap">{job.salary} <span className="text-slate-400 font-medium">/ mo</span></span>
                       <button className="px-8 py-2.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-bold text-sm transition-colors border border-indigo-100 hover:border-indigo-600">Apply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 w-full">
               <div className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-lg group">
                  <div className="h-64 overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800" alt="Work Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                     <h2 className="text-2xl font-bold text-slate-900">Junior Cloud Architect</h2>
                     <p className="text-slate-600 font-semibold mt-1">CloudStratus Systems <span className="opacity-50 mx-1">•</span> Austin, TX</p>
                     <p className="text-slate-500 font-medium mt-4 leading-relaxed">Join our elite infrastructure team building the next generation of serverless deployments. You'll work directly with senior architects on AWS and GCP stacks.</p>
                     
                     <div className="flex gap-2 mt-6">
                        {['AWS', 'Terraform', 'Python'].map(t => <span key={t} className="text-[10px] font-bold px-4 py-1.5 border border-slate-200 rounded-full text-slate-500">{t}</span>)}
                     </div>

                     <div className="flex justify-between items-center mt-12 bg-slate-50 -mx-8 -mb-8 px-8 py-6 border-t border-slate-100">
                        <span className="text-xl font-bold text-slate-900">$90k - $120k <span className="text-sm tracking-wide text-slate-500 font-medium">/ yr</span></span>
                        <button className="px-8 py-3.5 bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 transition-all">Apply Now</button>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mt-8">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-slate-100 rounded-xl bg-indigo-50 overflow-hidden">
                          <Zap size={24} className="text-indigo-600" />
                       </div>
                       <div>
                          <div className="flex items-center gap-2">
                             <h4 className="font-bold text-slate-900">Security Analyst Intern</h4>
                             <span className="text-[9px] bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded font-extrabold uppercase tracking-widest">NEW</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-600 mt-1">ShieldCore Defense <span className="opacity-50 mx-1">•</span> Arlington, VA</p>
                          <div className="flex flex-wrap gap-2 mt-4">
                             {['Linux', 'Nmap'].map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 border border-slate-200 rounded-full text-slate-500">{t}</span>)}
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-row sm:flex-col sm:items-end justify-between sm:h-full gap-4 mt-2 sm:mt-0">
                       <span className="font-bold text-slate-900 text-sm whitespace-nowrap">$25 - $35 <span className="text-slate-400 font-medium">/ hr</span></span>
                       <button className="px-6 py-2 bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-md font-bold text-xs transition-colors">Save</button>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
