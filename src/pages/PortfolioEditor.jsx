import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Settings, 
  LayoutTemplate, 
  Eye, 
  Image as ImageIcon,
  Type,
  Link as LinkIcon,
  Palette
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PortfolioEditor = () => {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate('/portfolio');
    }, 1500);
  };

  return (
    <div className="flex bg-slate-100 min-h-[calc(100vh-72px)] overflow-hidden">
       {/* Left - Workspace & Preview */}
       <div className="flex-1 flex flex-col items-center overflow-y-auto p-8 border-r border-slate-200 shadow-inner w-full">
          <div className="w-full max-w-4xl bg-white shadow-xl rounded-b-2xl rounded-t-lg overflow-hidden border border-slate-200 ring-1 ring-slate-900/5 transition-all">
             <div className="w-full h-8 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
             </div>
             
             {/* Mock Live Preview Site */}
             <div className="p-16 text-center select-none opacity-80 pointer-events-none min-h-[600px] flex flex-col justify-center items-center bg-slate-50">
                <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg mx-auto">
                   <ImageIcon size={40} />
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Your Name Here</h1>
                <p className="text-slate-500 font-medium max-w-lg mb-8 text-lg">Your selected professional CV template is active! Use the CV editor panel on the right to customize sections, typography, and colors.</p>
                
                <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
                   <div className="h-32 bg-slate-200/50 rounded-2xl border-2 border-dashed border-slate-300"></div>
                   <div className="h-32 bg-slate-200/50 rounded-2xl border-2 border-dashed border-slate-300"></div>
                </div>
             </div>
          </div>
       </div>

       {/* Right - Editor Controls */}
       <aside className="w-80 bg-white flex flex-col shrink-0 shadow-[-10px_0_15px_-3px_rgba(0,0,0,0.05)] z-20 overflow-y-auto">
          <div className="p-6 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-20 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <Link to="/build-portfolio" className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
                  <ArrowLeft size={18} />
                </Link>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">CV Editor</h2>
             </div>
             <button className="text-slate-400 hover:text-indigo-600 transition-colors p-2 hover:bg-slate-50 rounded-md">
                <Eye size={18} />
             </button>
          </div>

          <div className="p-6 flex-1 flex flex-col gap-8">
             {/* Editor Section */}
             <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 px-2">Design Settings</h3>
                <div className="space-y-2">
                   <button className="w-full flex items-center gap-3 p-3 text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-all border border-transparent hover:border-indigo-100 group">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover:text-indigo-600 border border-slate-100"><Palette size={16} /></div>
                      Theme & Colors
                   </button>
                   <button className="w-full flex items-center gap-3 p-3 text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-all border border-transparent hover:border-indigo-100 group">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover:text-indigo-600 border border-slate-100"><Type size={16} /></div>
                      Typography
                   </button>
                   <button className="w-full flex items-center gap-3 p-3 text-sm font-semibold text-slate-700 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-all border border-transparent hover:border-indigo-100 group">
                      <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center shadow-sm text-slate-400 group-hover:text-indigo-600 border border-slate-100"><LayoutTemplate size={16} /></div>
                      Layout Blocks
                   </button>
                </div>
             </div>

             {/* Content Section */}
             <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 px-2">CV Content & Links</h3>
                <div className="space-y-5 px-2">
                   
                   {/* Personal Info */}
                   <div>
                      <label className="text-xs font-bold text-slate-600 uppercase mb-1.5 block">Hero Headline</label>
                      <input type="text" defaultValue="Alex Rivers" className="w-full p-2.5 text-sm font-semibold text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all" />
                   </div>
                   <div>
                      <label className="text-xs font-bold text-slate-600 uppercase mb-1.5 block">Subheadline / Bio</label>
                      <textarea rows="2" defaultValue="Full-Stack Developer | UX Enthusiast" className="w-full p-2.5 text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all resize-none" />
                   </div>

                   {/* Contact & URLs */}
                   <div className="pt-4 border-t border-slate-100">
                      <label className="text-xs font-bold text-slate-600 uppercase mb-1.5 block">Contact Email</label>
                      <input type="email" placeholder="hello@example.com" className="w-full p-2.5 text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all mb-4" />
                      
                      <div className="flex items-center gap-2 mb-2">
                         <input type="checkbox" id="checkPortfolio" defaultChecked className="w-4 h-4 text-indigo-600 rounded bg-slate-100 border-slate-300 focus:ring-indigo-500 focus:ring-2" />
                         <label htmlFor="checkPortfolio" className="text-xs font-bold text-slate-600 uppercase">Check/Link Live Portfolio</label>
                      </div>
                      <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <LinkIcon size={14} />
                         </div>
                         <input type="url" placeholder="https://your-domain.com" className="w-full pl-9 p-2.5 text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 transition-all" />
                      </div>
                   </div>

                   {/* Dynamic Sections */}
                   <div className="pt-4 border-t border-slate-100 space-y-3">
                      <h4 className="text-xs font-bold text-slate-600 uppercase mb-2">CV Sections</h4>
                      
                      <button className="w-full flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group">
                         <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Experience</span>
                         <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600">+ Add</span>
                      </button>

                      <button className="w-full flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group">
                         <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Education</span>
                         <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600">+ Add</span>
                      </button>

                      <button className="w-full flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group">
                         <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">Projects Showcase</span>
                         <span className="bg-slate-100 text-slate-500 text-xs font-bold px-2 py-1 rounded-md group-hover:bg-indigo-50 group-hover:text-indigo-600">+ Link Project</span>
                      </button>
                   </div>
                </div>
             </div>

             <div className="mt-auto pt-6 border-t border-slate-100">
                <button 
                   onClick={handleSave}
                   className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isSaving ? 'bg-indigo-400 outline-none text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-md'
                   }`}
                >
                   {isSaving ? (
                      <>Saving Template...</>
                   ) : (
                      <><Save size={18} /> Save & Publish</>
                   )}
                </button>
             </div>
          </div>
       </aside>
    </div>
  );
};

export default PortfolioEditor;
