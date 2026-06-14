import React, { useState } from 'react';
import { 
  MonitorSmartphone,
  Palette,
  Layout,
  LayoutTemplate,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';


const templates = [
  {
    id: 0,
    name: 'Professional ATS (Verified)',
    description: 'The industry standard for tech resumes. No images, minimal formatting, optimized for screening systems.',
    tags: ['ATS Verified', 'Minimalist', 'MS Word Compatible'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    color: 'bg-slate-900',
    rating: '5.0',
    path: '/cv-template'
  },
  {
    id: 1,
    name: 'Minimal Developer',
    description: 'Clean, fast, and content-focused. Perfect for backend engineers and data scientists.',
    tags: ['Minimalist', 'High Contrast', 'Text-Heavy'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    color: 'bg-slate-900',
    rating: '4.8'
  },
  {
    id: 2,
    name: 'Creative Portfolio',
    description: 'Highly visual layout with large thumbnail grids. Ideal for UX/UI designers and frontend devs.',
    tags: ['Visual', 'Masoary Grid', 'Animations'],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
    color: 'bg-indigo-600',
    rating: '4.9'
  },
  {
    id: 3,
    name: 'Tech Lead Professional',
    description: 'Corporate aesthetic focusing on experience chronologies and major architectures.',
    tags: ['Professional', 'Corporate', 'Timeline'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    color: 'bg-emerald-600',
    rating: '4.7'
  },
  {
    id: 4,
    name: 'Dark Mode Glassmorphism',
    description: 'Ultra-modern translucent UI elements floating on deep space backgrounds.',
    tags: ['Modern', 'Glassmorphism', 'Neon'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    color: 'bg-purple-600',
    rating: '5.0'
  }
];

const BuildPortfolio = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 lg:p-8 animate-fade-in relative z-10">
      
      {/* Header Section */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 lg:p-12 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50 rounded-bl-full opacity-60"></div>
         <div className="z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-indigo-200">
               <Sparkles size={12} /> Template Engine
            </div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
               Build Your CV
            </h1>
            <p className="text-slate-500 font-medium text-lg max-w-xl">
               Select a professionally designed template to act as the foundation for your CV. You can edit colors, fonts, and blocks later.
            </p>
         </div>
         
         {selectedTemplate && (
            <div className="z-10 bg-indigo-600 text-white p-6 rounded-2xl shadow-xl border border-indigo-500 flex flex-col md:w-80 transition-all animate-bounce-in">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-indigo-200">SELECTED NOW</span>
                  <Check size={18} />
               </div>
               <h3 className="text-xl font-bold mb-1">{templates.find(t => t.id === selectedTemplate)?.name}</h3>
               <p className="text-sm font-medium text-indigo-100 mb-6">Template activated. Proceed to the CV tool.</p>
                <Link 
                  to={templates.find(t => t.id === selectedTemplate)?.path || "/portfolio-editor"} 
                  className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-slate-50 shadow-sm transition-all flex items-center justify-center gap-2 no-underline"
                >
                  Start Editing CV <ChevronRight size={18} />
                </Link>
            </div>
         )}
      </div>

      <div className="flex items-center gap-2 mb-6">
         <LayoutTemplate size={20} className="text-indigo-600" />
         <h2 className="text-xl font-bold text-slate-900">Featured Templates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
         {templates.map(template => (
            <div 
               key={template.id} 
               onClick={() => setSelectedTemplate(template.id)}
               className={`bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col border-2 relative h-full ${
                  selectedTemplate === template.id ? 'border-indigo-600 ring-4 ring-indigo-50 -translate-y-2' : 'border-slate-200 hover:border-indigo-300 hover:-translate-y-1'
               }`}
            >
               {selectedTemplate === template.id && (
                  <div className="absolute top-4 right-4 bg-indigo-600 text-white p-1 rounded-full shadow-lg z-20">
                     <Check size={20} />
                  </div>
               )}

               <div className="h-48 relative overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img 
                     src={template.image} 
                     alt={template.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 text-white text-xs font-bold">
                     <span className="text-amber-300">★</span> {template.rating}
                  </div>
               </div>

               <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                     <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {template.name}
                     </h3>
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed flex-1">
                     {template.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                     {template.tags.map(tag => (
                        <span key={tag} className="bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Edit Overlay (on Hover) */}
               <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${selectedTemplate === template.id ? 'hidden' : ''}`}>
                  <button className="bg-white text-slate-900 font-bold px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                     <Layout size={18} /> Select Template
                  </button>
               </div>
            </div>
         ))}
      </div>

    </div>
  );
};

export default BuildPortfolio;
