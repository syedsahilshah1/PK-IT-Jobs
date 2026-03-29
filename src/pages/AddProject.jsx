import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  UploadCloud, 
  Github, 
  Globe, 
  Code,
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';

const AddProject = () => {
  const [isHoveringDrop, setIsHoveringDrop] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
     e.preventDefault();
     // Mock submit
     setSuccess(true);
     setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-2 lg:p-6 animate-fade-in relative z-10">
      
      <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
        <ArrowLeft size={18} /> Back to Portfolio
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
         <div className="p-8 lg:p-10 border-b border-slate-100 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-bl-[100px] opacity-50"></div>
            <div className="relative z-10">
               <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Add New Project</h1>
               <p className="text-slate-500 mt-2 font-medium">Showcase your latest work. Add details, links, and media to build your portfolio.</p>
            </div>
         </div>

         {success && (
            <div className="m-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-700 font-bold">
               <CheckCircle2 size={24} className="text-emerald-500" />
               Project added successfully! It is now visible on your portfolio.
            </div>
         )}

         <form onSubmit={handleSubmit} className="p-8 lg:p-10 flex flex-col gap-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900">Project Title *</label>
                  <input required placeholder="e.g. E-Commerce Dashboard" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all" />
               </div>
               
               <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900">Tech Stack / Tools</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Code size={18} />
                     </div>
                     <input placeholder="React, Node.js, Tailwind (comma separated)" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all" />
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-slate-900">Project Description *</label>
               <textarea required rows="4" placeholder="Describe what the project does, the problem it solves, and your role..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900">GitHub Repository Link</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Github size={18} />
                     </div>
                     <input type="url" placeholder="https://github.com/username/repo" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all" />
                  </div>
               </div>

               <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-900">Live Demo URL</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Globe size={18} />
                     </div>
                     <input type="url" placeholder="https://myproject.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all" />
                  </div>
               </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
               <label className="text-sm font-bold text-slate-900">Project Thumbnail Media</label>
               <div 
                  className={`w-full border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all ${
                     isHoveringDrop ? 'border-indigo-600 bg-indigo-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100 hover:border-slate-400'
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setIsHoveringDrop(true); }}
                  onDragLeave={() => setIsHoveringDrop(false)}
                  onDrop={(e) => { e.preventDefault(); setIsHoveringDrop(false); }}
               >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-500 mb-4 border border-indigo-100">
                     <UploadCloud size={32} />
                  </div>
                  <p className="font-bold text-slate-900 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">SVG, PNG, JPG or GIF (MAX. 5MB)</p>
               </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-8 border-t border-slate-100">
               <Link to="/portfolio" className="px-8 py-3.5 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                 Cancel
               </Link>
               <button type="submit" className="px-10 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-indigo-700">
                 Publish Project
               </button>
            </div>
         </form>
      </div>

    </div>
  );
};

export default AddProject;
