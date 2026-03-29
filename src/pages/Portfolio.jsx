import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  BookOpen, 
  Code, 
  Download, 
  ExternalLink, 
  Github, 
  Mail, 
  Plus, 
  Terminal,
  Cpu,
  Globe,
  Linkedin
} from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Profile Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm flex-1 flex flex-col items-center text-center p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-indigo-50"></div>
          
          <div className="relative z-10 bg-indigo-100 text-indigo-700 text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6 shadow-sm border border-indigo-200">
            Student Profile
          </div>
          
          <div className="relative z-10 w-36 h-36 rounded-3xl overflow-hidden border-4 border-white shadow-lg mb-6 bg-slate-100">
             <img src="https://ui-avatars.com/api/?name=Alex+Rivers&background=312e81&color=fff&size=200" alt="Alex Rivers" className="w-full h-full object-cover" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Alex Rivers</h1>
          <p className="text-indigo-600 text-[11px] font-bold tracking-widest uppercase mt-2">
            Full-Stack Developer | UX Enthusiast
          </p>
          <p className="text-slate-500 font-medium text-sm leading-relaxed mt-4 max-w-sm">
            Building human-centric digital experiences with React, Node.js, and a passion for accessible design systems. Senior at Stanford pursuing CS.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-sm">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md border border-indigo-700">
              <Mail size={16} /> Contact Alex
            </button>
            <button className="flex-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
              <Download size={16} /> Resume
            </button>
          </div>
          
          <div className="flex gap-4 mt-6">
             <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 flex items-center justify-center transition-colors">
               <Github size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-500 flex items-center justify-center transition-colors">
               <Linkedin size={18} />
             </a>
          </div>
        </div>

        {/* Right Stats Column */}
        <div className="flex-[1.5] flex flex-col gap-6">
           
           {/* Tech Stack */}
           <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                 <Terminal size={20} className="text-indigo-600" />
                 <h3 className="text-lg font-bold text-slate-900">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                 {['TypeScript', 'React / NextJS', 'NodeJS', 'TailwindCSS', 'PostgreSQL', 'Figma', 'GraphQL', 'Docker'].map(s => (
                   <span key={s} className="bg-slate-50 border border-slate-200 text-slate-600 px-4 py-2 text-xs font-bold rounded-lg shadow-sm">
                     {s}
                   </span>
                 ))}
              </div>
           </div>

           {/* Education */}
           <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                 <BookOpen size={20} className="text-indigo-600" />
                 <h3 className="text-lg font-bold text-slate-900">Education</h3>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                 <h4 className="text-indigo-900 font-extrabold text-lg">Stanford University</h4>
                 <p className="text-indigo-700 font-semibold text-sm mt-1">B.S. Computer Science, 2025</p>
                 <p className="text-indigo-600/80 text-xs font-bold tracking-wide mt-2 uppercase">GPA: 3.92/4.0</p>
              </div>
           </div>

           {/* Activity */}
           <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-lg font-bold text-slate-900">Contribution Activity</h3>
                 <span className="text-xs text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">1,348 Commits this year</span>
              </div>
              <div className="flex items-end gap-1.5 h-32 w-full mt-4">
                 {[40, 60, 45, 90, 30, 70, 55, 85, 40, 60, 45, 90, 75].map((h, i) => (
                   <div key={i} className="flex-1 bg-indigo-100 hover:bg-indigo-500 rounded-t-sm transition-all cursor-pointer" style={{height: `${h}%`}}></div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-8">
           <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Featured Projects</h2>
           <button className="text-indigo-600 font-bold text-sm flex items-center gap-2 hover:underline">
             View GitHub <ExternalLink size={16} />
           </button>
        </div>

        {/* Large Project & Dark Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Normal Project Card */}
           <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex-[1.2] bg-slate-100 overflow-hidden min-h-[240px]">
                 <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" alt="Lumina Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                 <div>
                   <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-slate-900">Lumina Analytics</h3>
                      <div className="flex gap-2 text-slate-400">
                         <Globe size={18} className="hover:text-indigo-600 transition-colors" />
                         <Github size={18} className="hover:text-indigo-600 transition-colors" />
                      </div>
                   </div>
                   <p className="text-sm text-slate-500 font-medium leading-relaxed">Real-time data visualization platform built with D3.js and Next.js, serving over 10,000 requests per minute.</p>
                 </div>
                 <div className="flex gap-2 mt-8">
                    {['REACT', 'D3.JS', 'TAILWIND'].map(t => <span key={t} className="bg-slate-50 border border-slate-200 text-slate-500 text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider">{t}</span>)}
                 </div>
              </div>
           </div>

           {/* Dark Accent Project Card */}
           <div className="lg:col-span-4 bg-indigo-950 text-white p-8 rounded-3xl shadow-lg flex flex-col border border-indigo-900 relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600 rounded-full blur-[80px] opacity-40"></div>
              
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-8 relative z-10 border border-white/5">
                 <Cpu size={24} className="text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold tracking-tight relative z-10">Cryptosync API</h3>
              <p className="text-sm text-indigo-200/80 font-medium mt-4 leading-relaxed relative z-10">
                A robust Node.js backend managing high-frequency crypto market data across 15+ exchanges with 99.9% uptime.
              </p>
              
              <div className="flex gap-10 mt-auto pt-10 relative z-10">
                 <div><p className="text-3xl font-black">150+</p><p className="text-[10px] text-indigo-300 font-bold tracking-widest mt-1">ENDPOINTS</p></div>
                 <div><p className="text-3xl font-black">12k</p><p className="text-[10px] text-indigo-300 font-bold tracking-widest mt-1">DOWNLOADS</p></div>
              </div>
           </div>
        </div>

        {/* Small Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
           <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" alt="Atom UI" />
              </div>
              <div className="p-6">
                 <h4 className="font-bold text-slate-900 text-lg">Atom UI Library</h4>
                 <p className="text-sm text-slate-500 mt-2 font-medium">Lightweight headless UI library for rapid prototyping.</p>
              </div>
           </div>

           <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-shadow">
              <div className="h-40 overflow-hidden bg-slate-100">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" alt="Breathe Native" />
              </div>
              <div className="p-6">
                 <h4 className="font-bold text-slate-900 text-lg">Breathe Native</h4>
                 <p className="text-sm text-slate-500 mt-2 font-medium">Health & Wellness mobile app built with React Native.</p>
              </div>
           </div>

           <Link to="/add-project" className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 flex flex-col items-center justify-center p-8 hover:bg-slate-50 transition-colors hover:border-indigo-300 cursor-pointer group no-underline">
              <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors mb-4 border border-slate-200 group-hover:border-indigo-200">
                 <Plus size={28} />
              </div>
              <p className="font-bold text-slate-900">Your Project?</p>
              <p className="text-sm text-slate-500 text-center mt-2 font-medium max-w-[200px]">Click here to feature a new project on your portfolio.</p>
           </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-20 mb-10">
         <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-10">Work Experience</h2>
         
         <div className="flex flex-col gap-0 max-w-4xl border-l-[3px] border-slate-200 ml-4 pb-4">
            {[
              { 
                date: 'SUMMER 2023', 
                role: 'Software Engineering Intern', 
                company: 'Vercel', 
                desc: 'Optimized edge function cold starts by 14%. Implemented new dashboard features for telemetry analysis using Node.js and Tailwind.' 
              },
              { 
                date: '2022 - 2023', 
                role: 'Open Source Contributor', 
                company: 'Various Projects', 
                desc: 'Regular contributor to Tailwind CSS and Framer Motion. Focused on documentation improvements and accessibility patches.' 
              },
              { 
                date: 'SUMMER 2022', 
                role: 'Frontend Developer Intern', 
                company: 'TechStart Incubator', 
                desc: 'Developed the initial landing pages and user onboarding flow for 3 seed-stage startups.' 
              }
            ].map((exp, i) => (
              <div key={i} className="relative pl-10 pb-12 group">
                 {/* Timeline Marker */}
                 <div className="absolute left-[-11px] top-1 w-5 h-5 bg-white border-[4px] border-indigo-400 rounded-full group-hover:border-indigo-600 transition-colors"></div>
                 
                 <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                    <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase bg-indigo-50 px-2 py-1 rounded inline-block mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-sm font-bold text-slate-500 mt-1 mb-4">{exp.company}</p>
                    <p className="text-slate-600 font-medium leading-relaxed">{exp.desc}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default Portfolio;
