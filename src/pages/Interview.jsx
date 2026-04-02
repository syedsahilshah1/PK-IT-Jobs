import React from 'react';
import { 
  Target, 
  MessageSquare, 
  Brain, 
  Code, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const Interview = () => {
  React.useEffect(() => {
    document.title = "Interview Prep | PK IT Jobs";
  }, []);

  const scenarios = [
    {
      title: 'MERN Stack Architecture',
      desc: 'Explain the data flow from React to Node/Express and how MongoDB persists it.',
      difficulty: 'Advanced',
      category: 'Tech'
    },
    {
      title: 'Conflict Resolution',
      desc: 'Tell me about a time you had a disagreement with a team member. How did you handle it?',
      difficulty: 'Intermediate',
      category: 'Behavioral'
    },
    {
      title: 'System Scalability',
      desc: 'How would you design a load-balanced API for 1M concurrent users?',
      difficulty: 'Expert',
      category: 'Architecture'
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6 min-h-screen">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm border border-indigo-200">
            <Sparkles size={12} /> Prep Engine v2.0
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Interview Mastery
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-xl">
             Our AI-driven simulator helps you master the technical and behavioral nuances of top-tier IT companies.
          </p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white p-4 rounded-[20px] border border-slate-200 shadow-sm text-center min-w-[120px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Score</p>
              <p className="text-2xl font-black text-indigo-600">84%</p>
           </div>
           <div className="bg-white p-4 rounded-[20px] border border-slate-200 shadow-sm text-center min-w-[120px]">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Session</p>
              <p className="text-2xl font-black text-emerald-600">Active</p>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left - Resources & Progress */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Main Simulation Card */}
          <div className="bg-slate-900 text-white rounded-[32px] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
             
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-10 h-10 bg-indigo-500 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-500/20">
                      <Brain size={20} className="text-white" />
                   </div>
                   <h3 className="text-xl font-bold">Active Simulation: Full-Stack Architect</h3>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-md">
                   <p className="text-indigo-300 font-bold text-xs uppercase tracking-widest mb-4">CURRENT QUESTION</p>
                   <h2 className="text-2xl lg:text-3xl font-bold leading-tight">"Explain why you would choose a Microservices architecture over a Monolith for a high-growth startup."</h2>
                   
                   <div className="flex items-center gap-8 mt-10">
                      <div className="flex items-center gap-2">
                         <Clock size={16} className="text-slate-400" />
                         <span className="text-sm font-bold text-slate-400">Time remaining: 01:24</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <Target size={16} className="text-emerald-400" />
                         <span className="text-sm font-bold text-emerald-400">High Impact Question</span>
                      </div>
                   </div>
                </div>

                <div className="flex gap-4">
                   <button className="flex-1 bg-white text-slate-900 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                      <MessageSquare size={18} /> Record Answer
                   </button>
                   <button className="flex-1 bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 border border-indigo-500 transition-all">
                      Skip Question
                   </button>
                </div>
             </div>
          </div>

          {/* Practice Scenarios Grid */}
          <section>
             <div className="flex justify-between items-center mb-6 px-2">
                <h3 className="text-xl font-bold text-slate-900">Popular Scenarios</h3>
                <button className="text-indigo-600 font-bold text-sm hover:underline">View All Roadmap</button>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {scenarios.map((s, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group">
                     <div className="flex justify-between items-start mb-4">
                        <span className={`text-[9px] font-black tracking-widest px-2 py-0.5 rounded border ${
                          s.difficulty === 'Expert' ? 'bg-red-50 text-red-600 border-red-100' : 
                          s.difficulty === 'Advanced' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                          'bg-emerald-50 text-emerald-600 border-emerald-100'
                        }`}>
                          {s.difficulty.toUpperCase()}
                        </span>
                        <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                     </div>
                     <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                     <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">{s.desc}</p>
                     
                     <div className="flex items-center gap-2 mt-6">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                           <Code size={12} className="text-slate-500" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.category} Focused</span>
                     </div>
                  </div>
                ))}
             </div>
          </section>
        </div>

        {/* Right - Insights & Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
           <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-8">
                 <TrendingUp size={20} className="text-indigo-600" />
                 <h3 className="text-lg font-bold text-slate-900">Prep Insights</h3>
              </div>
              
              <div className="space-y-6">
                 <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-600">Communication Skills</span>
                    <span className="text-sm font-black text-slate-900">76%</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[76%] rounded-full shadow-sm shadow-indigo-200"></div>
                 </div>

                 <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-semibold text-slate-600">Technical Depth</span>
                    <span className="text-sm font-black text-slate-900">89%</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[89%] rounded-full shadow-sm shadow-emerald-200"></div>
                 </div>

                 <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-semibold text-slate-600">Behavioral IQ</span>
                    <span className="text-sm font-black text-slate-900">62%</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[62%] rounded-full shadow-sm shadow-amber-200"></div>
                 </div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-6 mt-10 border border-indigo-100">
                 <h4 className="text-indigo-900 font-bold text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} /> Tip of the Week
                 </h4>
                 <p className="text-indigo-700/80 text-xs font-medium leading-relaxed">
                    When answering architectural questions, always mention trade-offs. It shows you understand that no solution is perfect.
                 </p>
              </div>
           </div>

           <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Mocks</h3>
              <div className="space-y-4">
                 {[
                   { date: 'SEP 22', time: '10:00 AM', title: 'Senior Dev Interview' },
                   { date: 'SEP 25', time: '02:30 PM', title: 'Google Mock Series' }
                 ].map((m, i) => (
                   <div key={i} className="flex items-center justify-between group cursor-pointer">
                      <div className="flex gap-4">
                         <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black text-slate-400">{m.date.split(' ')[0]}</span>
                            <span className="text-lg font-black text-slate-900 -mt-1">{m.date.split(' ')[1]}</span>
                         </div>
                         <div className="border-l border-slate-100 pl-4">
                            <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{m.title}</h4>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase">{m.time}</p>
                         </div>
                      </div>
                      <ChevronRight size={14} className="text-slate-300" />
                   </div>
                 ))}
                 <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold py-3 mt-4 rounded-xl text-xs transition-colors border border-slate-200">
                    Schedule Session
                 </button>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default Interview;
