import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  Plus, 
  ChevronDown, 
  Info, 
  Trash2, 
  Save, 
  ArrowRight,
  ArrowLeft,
  Layout,
  Code2,
  DollarSign,
  FileText,
  CheckCircle2,
  Bold,
  Italic,
  List,
  Code,
  MapPin,
  Globe,
  Briefcase
} from 'lucide-react';
import { playNotificationSound } from '../utils/notifications';

const CreateJob = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isPosting, setIsPosting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Full-time',
    location: { state: 'Punjab', city: 'Lahore' },
    skills: ['React.js', 'TailwindCSS'],
    minSalary: '120000',
    maxSalary: '160000',
    description: '',
    experience: 'Senior',
    stack: 'MERN Stack'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const removeSkill = (skill) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }));
  };

  const handlePostJob = () => {
    setIsPosting(true);
    playNotificationSound();
    
    // Save to localStorage (mock backend)
    const existingJobs = JSON.parse(localStorage.getItem('pkit_posted_jobs') || '[]');
    const newJob = {
      ...formData,
      id: `job-${Date.now()}`,
      postedAt: new Date().toLocaleDateString(),
      applications: 0,
      status: 'Active'
    };
    localStorage.setItem('pkit_posted_jobs', JSON.stringify([newJob, ...existingJobs]));

    setTimeout(() => {
      setIsPosting(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 lg:p-10 bg-slate-50 min-h-screen animate-fade-in">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        <header className="w-full flex justify-between items-end mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
              Recruiter Hub / Create
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Create Opportunity</h1>
            <p className="text-slate-500 mt-2 font-medium">Draft your next engineering role with precision.</p>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-white px-4 py-2 rounded-full border border-slate-200">
            <span className={step >= 1 ? 'text-indigo-600' : ''}>Details</span>
             <ChevronDown size={12} className="-rotate-90" />
            <span className={step >= 2 ? 'text-indigo-600' : ''}>Stack</span>
             <ChevronDown size={12} className="-rotate-90" />
            <span className={step >= 3 ? 'text-indigo-600' : ''}>Compensation</span>
             <ChevronDown size={12} className="-rotate-90" />
            <span className={step >= 4 ? 'text-indigo-600' : ''}>Review</span>
          </div>
        </header>

        <div className="bg-white w-full rounded-[40px] shadow-xl border border-slate-200/60 overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            
            {/* Sidebar Navigation */}
            <aside className="bg-slate-50/50 border-r border-slate-100 p-8 flex flex-col gap-6">
               {[
                 { id: 1, label: 'Role Details', icon: FileText },
                 { id: 2, label: 'Stack & Skills', icon: Code2 },
                 { id: 3, label: 'Compensation', icon: DollarSign },
                 { id: 4, label: 'Review & Post', icon: CheckCircle2 }
               ].map((s) => (
                 <button 
                  key={s.id}
                  onClick={() => setStep(s.id)}
                  className={`flex items-center gap-4 transition-all text-left ${step === s.id ? 'translate-x-2' : 'opacity-50 grayscale hover:opacity-100 hover:grayscale-0'}`}
                 >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm border transition-all ${step === s.id ? 'bg-indigo-600 border-indigo-700 text-white shadow-indigo-200' : 'bg-white border-slate-200 text-slate-400'}`}>
                       <s.icon size={20} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Step 0{s.id}</span>
                       <span className="text-sm font-bold text-slate-900">{s.label}</span>
                    </div>
                 </button>
               ))}

               <div className="mt-12 p-6 bg-indigo-900 rounded-[24px] text-indigo-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
                  <p className="text-[9px] font-black tracking-widest uppercase mb-4 opacity-70">PRO TIP</p>
                  <p className="text-xs font-semibold leading-relaxed relative z-10 italic">"Developer-centric descriptions with clear tech stacks receive 40% more qualified applications."</p>
               </div>
            </aside>

            {/* Content Area */}
            <div className="p-8 lg:p-12">
               
               {step === 1 && (
                 <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Job Title</label>
                          <input 
                            placeholder="e.g. Senior Backend Engineer" 
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all"
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                          />
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Category</label>
                          <select 
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all appearance-none"
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                          >
                             <option>Full-time</option>
                             <option>Part-time</option>
                             <option>Internship</option>
                             <option>Contract</option>
                          </select>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Experience Level</label>
                          <select 
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all appearance-none"
                            value={formData.experience}
                            onChange={(e) => handleInputChange('experience', e.target.value)}
                          >
                             <option>Junior (0-2 years)</option>
                             <option>Mid (3-5 years)</option>
                             <option>Senior (6+ years)</option>
                             <option>Lead / Architect</option>
                          </select>
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Location (City)</label>
                          <input 
                            placeholder="e.g. Lahore, Pakistan" 
                            className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all"
                            value={formData.location.city}
                            onChange={(e) => handleInputChange('location', { ...formData.location, city: e.target.value })}
                          />
                       </div>
                    </div>
                 </div>
               )}

               {step === 2 && (
                 <div className="space-y-8 animate-fade-in">
                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Tech Stack Focus</label>
                       <select 
                         className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all appearance-none"
                         value={formData.stack}
                         onChange={(e) => handleInputChange('stack', e.target.value)}
                       >
                          <option>MERN Stack</option>
                          <option>MEAN Stack</option>
                          <option>PHP / Laravel</option>
                          <option>Python / Django</option>
                          <option>Java / Spring</option>
                          <option>.NET / C#</option>
                       </select>
                    </div>

                    <div className="flex flex-col gap-4">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Required Skills</label>
                       <div className="flex flex-wrap gap-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[60px]">
                          {formData.skills.map(s => (
                            <span key={s} className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-600 flex items-center gap-2 shadow-sm">
                               {s}
                               <Trash2 size={12} className="cursor-pointer text-slate-400 hover:text-rose-500" onClick={() => removeSkill(s)} />
                            </span>
                          ))}
                          <input 
                            type="text" 
                            placeholder="Type skill & press enter..." 
                            className="bg-transparent border-none outline-none text-sm font-medium ml-2 flex-1 min-w-[150px]"
                            onKeyDown={(e) => {
                               if (e.key === 'Enter') {
                                  addSkill(e.target.value);
                                  e.target.value = '';
                               }
                            }}
                          />
                       </div>
                       <div className="flex gap-2 items-center">
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SUGGESTED:</span>
                          {['TypeScript', 'Docker', 'AWS', 'Next.js'].map(t => (
                            <button key={t} onClick={() => addSkill(t)} className="text-[10px] text-indigo-600/60 hover:text-indigo-600 font-bold transition-all underline decoration-dotted underline-offset-4">{t}</button>
                          ))}
                       </div>
                    </div>
                 </div>
               )}

               {step === 3 && (
                 <div className="space-y-8 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Min Annual Salary (PRK/month)</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rs.</span>
                             <input 
                                type="number" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all"
                                value={formData.minSalary}
                                onChange={(e) => handleInputChange('minSalary', e.target.value)}
                             />
                          </div>
                       </div>
                       <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Max Annual Salary (PRK/month)</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">Rs.</span>
                             <input 
                                type="number" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm font-semibold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all"
                                value={formData.maxSalary}
                                onChange={(e) => handleInputChange('maxSalary', e.target.value)}
                             />
                          </div>
                       </div>
                    </div>

                    <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-[24px] flex items-start gap-4">
                       <div className="p-2 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-200"><Info size={16} /></div>
                       <div>
                          <h4 className="text-sm font-bold text-indigo-900 mb-1">Market Insight</h4>
                          <p className="text-xs text-indigo-700/70 font-medium leading-relaxed">This range is competitive for {formData.experience} roles in {formData.location.city}. Roles with clear salary ranges get 60% more applications.</p>
                       </div>
                    </div>
                 </div>
               )}

               {step === 4 && (
                 <div className="space-y-8 animate-fade-in">
                    <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-8">
                       <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
                             <Briefcase size={28} />
                          </div>
                          <div>
                             <h3 className="text-2xl font-black text-slate-900">{formData.title || 'Untitled Role'}</h3>
                             <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{formData.category} • {formData.experience} • {formData.location.city}</p>
                          </div>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-8 mt-8 py-8 border-t border-slate-200/60">
                          <div>
                             <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Stack Focus</label>
                             <p className="text-sm font-bold text-slate-700 bg-white px-4 py-2 rounded-xl border border-slate-200 w-max">{formData.stack}</p>
                          </div>
                          <div>
                             <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Salary Range</label>
                             <p className="text-sm font-bold text-emerald-600">Rs. {formData.minSalary} - {formData.maxSalary}</p>
                          </div>
                       </div>

                       <div className="pt-8 border-t border-slate-200/60">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Required Skills</label>
                          <div className="flex flex-wrap gap-2">
                             {formData.skills.map(s => <span key={s} className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-600 shadow-sm">{s}</span>)}
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Final Instructions / Description</label>
                       <textarea 
                        rows="4"
                        placeholder="Any additional details or mission statement for the candidates..." 
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all resize-none"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                       />
                    </div>
                 </div>
               )}

               {/* Footer Buttons */}
               <div className="flex justify-between items-center mt-12 pt-10 border-t border-slate-100">
                  <button 
                   onClick={() => step > 1 ? setStep(step - 1) : navigate('/dashboard')}
                   className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest hover:text-indigo-600 transition-all no-underline"
                  >
                    <ArrowLeft size={16} /> {step === 1 ? 'Cancel Draft' : 'Back Stage'}
                  </button>
                  <div className="flex gap-4">
                     {step < 4 ? (
                       <button 
                        onClick={() => setStep(step + 1)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-10 py-4 rounded-2xl flex items-center gap-3 transition-all shadow-lg shadow-indigo-100 border border-indigo-700"
                       >
                         Next Stage <ArrowRight size={18} />
                       </button>
                     ) : (
                       <button 
                        onClick={handlePostJob}
                        disabled={isPosting}
                        className={`bg-indigo-900 hover:bg-slate-900 text-white font-bold px-12 py-4 rounded-2xl flex items-center gap-3 transition-all shadow-xl border border-slate-900 ${isPosting ? 'opacity-50 pointer-events-none' : ''}`}
                       >
                         {isPosting ? 'Posting Opportunity...' : 'Post Opportunity'} <CheckCircle2 size={18} />
                       </button>
                     ) }
                  </div>
               </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CreateJob;
