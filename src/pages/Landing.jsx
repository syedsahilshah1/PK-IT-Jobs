import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Users, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg shadow-sm shadow-indigo-200">
               <Code2 size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">PK IT Jobs</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Platform</a>
            <a href="#employers" className="hover:text-indigo-600 transition-colors">For Employers</a>
            <Link to="/jobs" className="hover:text-indigo-600 transition-colors">Find Details</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors">Sign In</Link>
            <Link to="/login" className="hidden sm:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-100 rounded-full blur-[120px] opacity-60 pointer-events-none -z-10"></div>
        <div className="absolute top-40 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none -z-10"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold tracking-wide uppercase mb-10 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Pakistan's Premium IT Network
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Land your next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
              Tech Role.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
            PK IT Jobs connects top-tier developers, designers, and engineers directly with the most innovative companies. Skip the generic boards and join the curated IT network.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Link to="/login" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-1">
              Create Developer Profile <ArrowRight size={20} />
            </Link>
            <Link to="/login" className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-bold text-lg px-8 py-4 rounded-full transition-all hover:bg-indigo-50">
              Post an IT Job
            </Link>
          </div>
        </div>

        {/* Floating UI Elements Mockup */}
        <div className="max-w-6xl mx-auto mt-24 relative animate-fade-in" style={{animationDelay: '0.5s'}}>
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 h-[80%] bottom-0 z-20"></div>
           <div className="bg-white p-4 md:p-8 rounded-t-3xl border border-slate-200 border-b-0 shadow-2xl relative z-10 mx-4 md:mx-0 overflow-hidden">
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                <div className="w-3 h-3 rounded-full bg-slate-200"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60">
                {[
                  { role: 'Senior React Developer', company: 'TechNova', salary: 'Rs 250k - 400k' },
                  { role: 'Backend Engineer (Node)', company: 'Systematic', salary: 'Rs 180k - 300k' },
                  { role: 'UI/UX Lead Designer', company: 'CreativeStack', salary: 'Rs 200k - 350k' }
                ].map((job, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
                    <div className="h-10 w-10 bg-indigo-100 rounded-xl mb-4"></div>
                    <div className="font-bold text-slate-800 text-lg">{job.role}</div>
                    <div className="text-slate-500 font-medium text-sm mt-1">{job.company}</div>
                    <div className="mt-4 inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{job.salary}</div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </main>

      {/* Value Proposition */}
      <section id="features" className="py-24 bg-white border-t border-slate-100 relative z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">Why PK IT Jobs?</h2>
            <p className="text-slate-600 text-lg font-medium">We built this platform entirely for the Pakistani IT sector. Intelligent matching, verified skills, no noise.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Briefcase size={32} className="text-indigo-600" />,
                title: 'Exclusive IT Roles',
                desc: 'Access remote and on-site opportunities that are actually relevant to your tech stack.'
              },
              { 
                icon: <Code2 size={32} className="text-indigo-600" />,
                title: 'Skill-Based Matching',
                desc: 'Your Github repos and tech stack tell your story better than a resume ever could.'
              },
              { 
                icon: <Users size={32} className="text-indigo-600" />,
                title: 'Direct HR Access',
                desc: 'Skip external recruiters. Talk directly to engineering managers and founders.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-2xl mb-6">
                   {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-2 rounded-lg">
               <Code2 size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-white">PK IT Jobs</span>
          </div>
          
          <div className="flex gap-8 text-sm font-semibold text-slate-400">
             <a href="#" className="hover:text-white transition-colors">Platform</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-slate-500 text-sm font-medium">
             © 2024 PK IT Jobs. Proudly built in PK.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
