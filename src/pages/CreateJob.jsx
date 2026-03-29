import React from 'react';
import { 
  Plus, 
  ChevronDown, 
  Info, 
  Trash2, 
  Save, 
  ArrowRight,
  Layout,
  Code2,
  DollarSign,
  FileText,
  CheckCircle2,
  Bold,
  Italic,
  List,
  Code
} from 'lucide-react';

const CreateJob = () => {
  return (
    <div className="create-job-page p-10 bg-gray-50/50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl text-left mb-10">
         <h1 className="text-3xl font-800">Create Opportunity</h1>
         <p className="text-muted mt-2">Draft your next engineering role with precision.</p>
      </div>

      <div className="form-container card w-full max-w-4xl p-12 border-none shadow-xl">
        {/* Step Progress */}
        <div className="step-header flex justify-between items-center bg-primary/5 p-6 rounded-2xl mb-12">
           <div className="flex gap-4 items-center">
              <span className="text-[10px] font-800 tracking-widest text-primary uppercase">STEP 01 / 04</span>
           </div>
           <div className="step-dots flex gap-2">
              <div className="h-1 w-12 rounded bg-primary"></div>
              <div className="h-1 w-12 rounded bg-gray-200"></div>
              <div className="h-1 w-12 rounded bg-gray-200"></div>
              <div className="h-1 w-12 rounded bg-gray-200"></div>
           </div>
        </div>

        <div className="grid grid-cols-12 gap-10">
           {/* Left Sidebar Steps */}
           <aside className="col-span-3 flex flex-col gap-8">
              <div className="nav-step active">
                 <div className="icon-wrap-sm"><FileText size={18} /></div>
                 <span>Role Details</span>
              </div>
              <div className="nav-step">
                 <div className="icon-wrap-sm"><Code2 size={18} /></div>
                 <span>Stack & Skills</span>
              </div>
              <div className="nav-step">
                 <div className="icon-wrap-sm"><DollarSign size={18} /></div>
                 <span>Compensation</span>
              </div>
              <div className="nav-step">
                 <div className="icon-wrap-sm"><CheckCircle2 size={18} /></div>
                 <span>Review & Post</span>
              </div>

              <div className="pro-tip bg-blue-50/50 p-6 rounded-2xl border border-blue-50 mt-10">
                 <p className="text-[10px] font-800 text-primary tracking-widest uppercase mb-4">PRO TIP</p>
                 <p className="text-xs italic text-muted-600 leading-relaxed">"Developer-centric descriptions with clear tech stacks receive 40% more qualified applications."</p>
              </div>
           </aside>

           {/* Main Form Fields */}
           <div className="col-span-9 flex flex-col gap-10">
              <div className="grid grid-cols-2 gap-8">
                 <div className="input-group">
                    <label>JOB TITLE</label>
                    <input type="text" placeholder="e.g. Senior Frontend Engineer" defaultValue="Senior Frontend Engineer" className="form-input" />
                 </div>
                 <div className="input-group">
                    <label>CATEGORY</label>
                    <div className="relative">
                       <select className="form-select w-full">
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Internship</option>
                          <option>Contract</option>
                       </select>
                       <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted" />
                    </div>
                 </div>
              </div>

              <div className="input-group">
                 <label>REQUIRED SKILLS</label>
                 <div className="skills-input-field flex flex-wrap gap-2 p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    {['React.js', 'TailwindCSS', 'TypeScript'].map(s => (
                      <span key={s} className="skill-pill-edit">{s} <Trash2 size={12} className="cursor-pointer opacity-50 hover:opacity-100" /></span>
                    ))}
                    <input type="text" placeholder="Add skills..." className="bg-transparent border-none outline-none text-sm ml-2 flex-1" />
                 </div>
                 <div className="flex gap-2 mt-4 items-center">
                    <span className="text-[9px] font-800 text-muted-400 uppercase tracking-widest">POPULAR TAGS:</span>
                    {['Python', 'Docker', 'AWS'].map(t => (
                      <span key={t} className="text-[10px] text-primary/60 hover:text-primary cursor-pointer font-600 transition-all">{t}</span>
                    ))}
                 </div>
              </div>

              <div className="compensation-section">
                 <label className="block mb-6 uppercase text-[10px] font-800 text-muted tracking-widest">COMPENSATION (ANNUAL USD)</label>
                 <div className="grid grid-cols-3 gap-6 items-start">
                    <div className="input-group">
                       <span className="text-xs font-600 text-muted mb-2 block">MIN SALARY</span>
                       <div className="price-input-wrap relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-300 font-700">$</span>
                          <input type="number" defaultValue="120000" className="form-input pl-8" />
                       </div>
                    </div>
                    <div className="input-group">
                       <span className="text-xs font-600 text-muted mb-2 block">MAX SALARY</span>
                       <div className="price-input-wrap relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-300 font-700">$</span>
                          <input type="number" defaultValue="160000" className="form-input pl-8" />
                       </div>
                    </div>
                    <div className="market-alert bg-tertiary-light p-5 rounded-2xl border border-tertiary/10 flex items-start gap-3">
                       <div className="p-1 bg-tertiary/10 rounded text-tertiary mt-0.5"><Info size={14} /></div>
                       <div>
                          <p className="text-[10px] font-800 text-tertiary tracking-widest uppercase">MARKET RATE</p>
                          <p className="text-[10px] text-tertiary/70 mt-1 leading-normal">Above average for Senior level in SF/NY.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="input-group">
                 <label>JOB DESCRIPTION</label>
                 <div className="rich-editor-placeholder border border-gray-100 rounded-xl overflow-hidden mt-4">
                    <div className="editor-toolbar flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                       <div className="flex gap-4">
                          <Bold size={16} className="text-muted cursor-pointer hover:text-primary" />
                          <Italic size={16} className="text-muted cursor-pointer hover:text-primary" />
                          <List size={16} className="text-muted cursor-pointer hover:text-primary" />
                          <Code size={16} className="text-muted cursor-pointer hover:text-primary" />
                       </div>
                    </div>
                    <textarea 
                      placeholder="Outline the mission, technical challenges, and growth opportunities..." 
                      className="w-full h-80 p-8 text-sm outline-none resize-none bg-white placeholder:italic placeholder:text-muted-200"
                    ></textarea>
                 </div>
              </div>
           </div>
        </div>

        <div className="footer-actions flex justify-between items-center mt-16 pt-10 border-t border-gray-100">
           <button className="flex items-center gap-2 text-xs font-800 text-muted uppercase tracking-widest hover:text-danger hover:scale-105 transition-all"><Trash2 size={16} /> Discard Draft</button>
           <div className="flex gap-4">
              <button className="btn-outline px-10 py-4 bg-primary/5 border-none text-primary hover:bg-primary/10">Save Draft</button>
              <button className="btn-primary px-12 py-4 rounded-xl flex items-center gap-3">Next Stage <ArrowRight size={18} /></button>
           </div>
        </div>
      </div>

      <style>{`
        .nav-step { display: flex; align-items: center; gap: 12px; color: var(--text-muted); font-size: 13px; font-weight: 600; cursor: pointer; opacity: 0.6; transition: all 0.3s; }
        .nav-step:hover { opacity: 1; color: var(--primary); }
        .nav-step.active { opacity: 1; color: var(--primary); }
        .icon-wrap-sm { width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #fff; border: 1px solid #f1f5f9; }
        .nav-step.active .icon-wrap-sm { background: var(--primary); color: #fff; border-color: var(--primary); box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2); }
        
        .input-group label { display: block; font-size: 10px; font-weight: 800; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 12px; }
        .form-input, .form-select { width: 100%; padding: 16px 20px; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 12px; font-size: 14px; outline: none; transition: all 0.2s; }
        .form-input:focus { border-color: var(--primary); background: #fff; box-shadow: 0 0 0 4px var(--primary-light); }
        .form-select { appearance: none; }
        
        .skill-pill-edit { display: flex; align-items: center; gap: 8px; padding: 6px 12px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 12px; font-weight: 700; color: var(--primary); }
      `}</style>
    </div>
  );
};

export default CreateJob;
