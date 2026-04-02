import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Download, 
  Linkedin, 
  Github, 
  ExternalLink,
  BookOpen,
  Trophy,
  Code2,
  Cloud,
  Layers,
  Layout,
  Cpu,
  User,
  ChevronRight,
  ShieldCheck,
  Building2,
  Briefcase,
  Users,
  Activity,
  CheckCircle2,
  Send
} from 'lucide-react';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userRole = localStorage.getItem('pkit_user_role') || 'student';

  useEffect(() => {
    // Check for logged in user data from Login system
    const authData = localStorage.getItem('pkit_user_auth');
    if (authData) {
      setCurrentUser(JSON.parse(authData));
    }
  }, []);

  const profiles = {
    admin: {
      name: currentUser?.name || 'Root Administrator',
      title: 'Systems Architect & Compliance Lead',
      avatar: currentUser?.avatar || 'https://ui-avatars.com/api/?name=Root+Admin&background=0F172A&color=fff&size=128',
      bio: 'Responsible for platform integrity, security protocols, and high-level infrastructure scaling. Managing over 40k+ user entities and maintaining 99.9% uptime for the PK IT ecosystem.',
      tags: ['Security', 'Infrastructure', 'Node.js', 'PostgreSQL', 'K8s'],
      stats: [
        { label: 'Platform Access', value: 'Root / Level 5' },
        { label: 'Security Clearance', value: 'High' }
      ]
    },
    recruiter: {
      name: currentUser?.name || 'Sarah Khan',
      title: 'Senior Talent Acquisition @ TechNexus',
      avatar: currentUser?.avatar || 'https://ui-avatars.com/api/?name=Sarah+Khan&background=4f46e5&color=fff&size=128',
      bio: 'Dedicated to finding the top 1% of engineering talent in Pakistan. Focused on building diverse, high-performing teams for global tech enterprises.',
      tags: ['Recruitment', 'HR Strategy', 'Technical Sourcing', 'Team Building'],
      stats: [
        { label: 'Active Postings', value: '12 Roles' },
        { label: 'Avg Feedback Rank', value: '4.8/5' }
      ]
    },
    student: {
      name: currentUser?.name || 'Alex Rivera',
      title: 'Full-Stack Developer & Aspiring Cloud Architect',
      avatar: currentUser?.avatar || 'https://ui-avatars.com/api/?name=Alex+Rivera&background=1e293b&color=fff&size=128',
      bio: 'I am a final-year Computer Science student passionate about building scalable web applications. Master of the MERN stack and currently mastering AWS serverless deployments.',
      tags: ['React', 'Laravel', 'Python', 'TypeScript', 'AWS'],
      stats: [
        { label: 'Focus', value: 'System Architecture' },
        { label: 'Goal', value: 'SaaS Development' }
      ]
    }
  };

  const active = profiles[userRole] || profiles.student;

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-4 lg:p-10 bg-white min-h-screen">
      
      {/* Profile Banner */}
      <div className="bg-slate-900 rounded-[40px] shadow-2xl p-10 lg:p-16 mb-12 relative overflow-hidden text-center lg:text-left">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
             <div className="relative group">
                <img src={active.avatar} className="w-40 h-40 rounded-[48px] border-4 border-slate-800 shadow-2xl group-hover:scale-105 transition-transform duration-500" alt={active.name} />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg">
                   {userRole === 'admin' ? <ShieldCheck size={18} className="text-white" /> : userRole === 'recruiter' ? <Building2 size={18} className="text-white" /> : <User size={18} className="text-white" />}
                </div>
             </div>
             
             <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                   <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight">{active.name}</h1>
                   {currentUser && <CheckCircle2 className="text-emerald-400" size={24} />}
                </div>
                <p className="text-xl font-bold text-slate-400 max-w-2xl">{active.title}</p>
                <div className="flex flex-wrap gap-2 mt-8 justify-center lg:justify-start">
                   {active.tags.map(t => (
                      <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em]">{t}</span>
                   ))}
                </div>
             </div>

             <div className="flex gap-4 w-full lg:w-auto">
                <button className="flex-1 lg:flex-none bg-white text-slate-900 font-black px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all text-xs uppercase tracking-widest">Update Terminal</button>
             </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
         
         {/* Main Narrative */}
         <div className="space-y-12">
            <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-10 lg:p-12 text-left">
               <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Activity className="text-indigo-600" size={24} /> Professional Background
               </h3>
               <p className="text-xl leading-relaxed text-slate-500 font-medium">
                  {currentUser ? `Hello, I'm ${currentUser.name}. ` : ''}{active.bio}
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                  {active.stats.map((s, i) => (
                    <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm relative group overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 opacity-50 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>
                       <div className="relative z-10">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{s.label}</p>
                          <p className="text-xl font-black text-slate-900">{s.value}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            {userRole === 'student' && (
              <div className="group bg-indigo-600 rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48 transition-transform group-hover:scale-125 duration-1000"></div>
                 <div className="relative z-10 text-left">
                    <h3 className="text-3xl font-black mb-6">Mastering Scalable Systems.</h3>
                    <p className="text-indigo-100 font-bold opacity-80 max-w-xl leading-relaxed mb-10">Current research focus on Microservices Architecture and Serverless computing using the AWS global infrastructure.</p>
                    <div className="flex gap-4">
                       <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                          <p className="text-xs font-black text-indigo-200 uppercase tracking-widest mb-1">Stack Proficiency</p>
                          <p className="text-2xl font-black">MERN + AWS</p>
                       </div>
                       <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/20">
                          <p className="text-xs font-black text-indigo-200 uppercase tracking-widest mb-1">Projects</p>
                          <p className="text-2xl font-black">14 Total</p>
                       </div>
                    </div>
                 </div>
              </div>
            )}
         </div>

         {/* Sidebar Tools */}
         <aside className="space-y-8">
            <div className="bg-white rounded-[40px] border border-slate-200 p-10 shadow-sm text-left">
               <h3 className="text-lg font-black text-slate-900 mb-8 flex items-center gap-3">
                  <Trophy className="text-amber-500" size={20} /> Verified Badges
               </h3>
               <div className="space-y-6">
                  {['Expert Level Access', 'Security Verified', 'Platform Contributor'].map((b, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                       <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all border border-transparent group-hover:border-indigo-100">
                          <CheckCircle2 size={18} />
                       </div>
                       <span className="text-sm font-black text-slate-600 group-hover:text-indigo-900 transition-colors">{b}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-200 text-left">
               <h3 className="text-lg font-black text-slate-900 mb-8">Digital Footprint</h3>
               <div className="space-y-4">
                  {[
                    { icon: <Mail size={18} />, label: 'Secure Email' },
                    { icon: <Linkedin size={18} />, label: 'Professional Network' },
                    { icon: <Github size={18} />, label: 'Code Terminal' }
                  ].map((link, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
                       <div className="flex items-center gap-4">
                          <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                             {link.icon}
                          </div>
                          <span className="text-xs font-black text-slate-500 group-hover:text-slate-900 uppercase tracking-widest">{link.label}</span>
                       </div>
                       <ChevronRight size={14} className="text-slate-300 group-hover:text-indigo-600" />
                    </div>
                  ))}
               </div>
            </div>
         </aside>

      </div>
    </div>
  );
};

export default Profile;
