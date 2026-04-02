import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Download, Printer, Edit3, Check } from 'lucide-react';

const CVTemplate = ({ data }) => {
  const defaultData = {
    name: 'Syed Sahil Shah',
    title: 'Senior MERN stack Developer',
    email: 'sahil@example.com',
    phone: '+92 345 6789012',
    location: 'Islamabad, Pakistan',
    linkedin: 'linkedin.com/in/sahilshah',
    website: 'sahilshah.dev',
    summary: 'Highly motivated and results-driven Senior MERN Stack Developer with over 5 years of experience in building scalable web applications. Proven track record of delivering high-quality software solutions and leading development teams.',
    experience: [
      {
        company: 'Tech Solutions Inc.',
        role: 'Senior Full Stack Developer',
        period: '2021 - Present',
        bullets: [
          'Architected and implemented a microservices-based e-commerce platform using React and Node.js.',
          'Reduced API response times by 40% through implementation of Redis caching and query optimization.',
          'Led a team of 5 developers, conducting code reviews and mentoring junior engineers.'
        ]
      },
      {
        company: 'Digital Innovations Ltd.',
        role: 'Full Stack Developer',
        period: '2018 - 2021',
        bullets: [
          'Developed and maintained multiple enterprise-level web applications using the MERN stack.',
          'Implemented real-time features using WebSockets, improving user engagement by 25%.',
          'Collaborated with UX/UI designers to create responsive and intuitive user interfaces.'
        ]
      }
    ],
    education: [
      {
        school: 'National University of Sciences and Technology (NUST)',
        degree: 'Bachelor of Science in Computer Science',
        period: '2014 - 2018'
      }
    ],
    skills: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Redux', 'Tailwind CSS', 'AWS', 'Docker', 'Git']
  };

  const cvData = data || defaultData;

  return (
    <div className="bg-slate-100 min-h-screen py-12 px-4">
      <div className="max-w-[850px] mx-auto bg-white shadow-2xl p-12 print:shadow-none print:p-0 flex flex-col gap-8 font-serif leading-relaxed text-slate-900 border-t-[8px] border-slate-900 animate-fade-in" id="cv-content">
        
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-widest mb-2">{cvData.name}</h1>
          <p className="text-lg font-bold text-slate-700 uppercase tracking-wide">{cvData.title}</p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm font-medium text-slate-600">
             <div className="flex items-center gap-1"><Mail size={14} /> {cvData.email}</div>
             <div className="flex items-center gap-1"><Phone size={14} /> {cvData.phone}</div>
             <div className="flex items-center gap-1"><MapPin size={14} /> {cvData.location}</div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2 text-sm font-medium text-slate-500 underline underline-offset-4 decoration-slate-300">
             <div className="flex items-center gap-1"><Linkedin size={14} /> {cvData.linkedin}</div>
             <div className="flex items-center gap-1"><Globe size={14} /> {cvData.website}</div>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] border-b border-slate-200 pb-1 mb-4 text-slate-900">Professional Summary</h2>
          <p className="text-[15px] text-justify">{cvData.summary}</p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] border-b border-slate-200 pb-1 mb-4 text-slate-900">Experience</h2>
          <div className="flex flex-col gap-6">
            {cvData.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[16px] text-slate-900">{exp.company}</h3>
                  <span className="text-sm font-bold text-slate-600 italic uppercase tracking-tighter">{exp.period}</span>
                </div>
                <p className="text-[15px] font-bold text-slate-700 italic border-l-4 border-slate-100 pl-3 mb-2">{exp.role}</p>
                <ul className="list-disc ml-4 space-y-1.5 marker:text-slate-400">
                   {exp.bullets.map((bullet, idx) => (
                     <li key={idx} className="text-[14px] text-slate-700 leading-snug">{bullet}</li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] border-b border-slate-200 pb-1 mb-4 text-slate-900">Education</h2>
          <div className="flex flex-col gap-4">
             {cvData.education.map((edu, i) => (
                <div key={i} className="flex justify-between items-baseline">
                   <div>
                      <h3 className="font-bold text-[16px] text-slate-900">{edu.school}</h3>
                      <p className="text-[14px] italic text-slate-600">{edu.degree}</p>
                   </div>
                   <span className="text-sm font-bold text-slate-600 italic uppercase tracking-tighter">{edu.period}</span>
                </div>
             ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-sm font-black uppercase tracking-[0.25em] border-b border-slate-200 pb-1 mb-4 text-slate-900">Technical Skills</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
             {cvData.skills.map((skill, i) => (
                <span key={i} className="text-[14px] text-slate-700 font-medium">
                   {skill}{i < cvData.skills.length - 1 ? ' •' : ''}
                </span>
             ))}
          </div>
        </section>

        {/* Footer for UI only - hidden in print */}
        <div className="mt-12 flex justify-center gap-4 print:hidden">
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all border border-slate-700 shadow-md">
              <Download size={18} /> Download ATS Resume
            </button>
            <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
              <Printer size={18} /> Print to PDF
            </button>
        </div>
      </div>

      {/* Floating Action for selection in UI */}
      {!data && (
        <div className="fixed bottom-10 right-10 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 animate-fade-in print:hidden max-w-[280px]">
           <h4 className="font-bold text-slate-900 mb-2">Template Active</h4>
           <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed line-clamp-2">This MS-Word style template is optimized for ATS software (Applicant Tracking Systems).</p>
           <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-2xl text-xs uppercase tracking-widest shadow-lg shadow-blue-200 transition-transform active:scale-95">Use This Template</button>
        </div>
      )}

      <style>{`
        @media print {
          body { background: white; }
          .bg-slate-100 { background: white; padding: 0; }
          .max-w-[850px] { max-width: 100%; border: none; padding: 0; }
          #cv-content { box-shadow: none !important; margin: 0 !important; width: 100% !important; border-top: none !important; }
        }
      `}</style>
    </div>
  );
};

export default CVTemplate;
