import React from 'react';
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
  Cpu
} from 'lucide-react';

const Profile = () => {
  return (
    <div className="profile-container animate-fade-in">
      {/* Profile Header Card */}
      <div className="card profile-header-card glass">
        <div className="header-top flex justify-between items-start">
          <div className="user-info-main flex gap-8">
            <div className="profile-img-wrap">
              <img src="https://ui-avatars.com/api/?name=Alex+Rivera&background=1e293b&color=fff&size=128" alt="Alex Rivera" />
              <div className="online-status"></div>
            </div>
            <div className="user-details">
              <h1>Alex Rivera</h1>
              <p className="user-title">Full-Stack Developer & Aspiring Cloud Architect</p>
              <div className="skill-tags flex gap-2 mt-4">
                {['React', 'Laravel', 'Python', 'TypeScript', 'AWS'].map(skill => (
                  <span key={skill} className="skill-tag-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="header-actions flex gap-4">
            <button className="btn-primary contact-btn">Contact Me</button>
            <button className="btn-outline cv-btn flex items-center gap-2">
              <Download size={16} /> Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="profile-grid mt-10">
        <div className="left-pan">
          <div className="card bio-card">
            <h3 className="section-title"><User size={20} /> Personal Bio</h3>
            <p className="bio-text mt-4">
              I am a final-year Computer Science student passionate about building scalable web applications that solve real-world problems. My journey started with a fascination for how data moves across the web, leading me to master the full stack from elegant UI design to robust backend architecture.
            </p>
            <div className="focus-goals flex gap-6 mt-8">
              <div className="info-box">
                <span className="label">FOCUS</span>
                <p>System Architecture</p>
              </div>
              <div className="info-box">
                <span className="label">GOAL</span>
                <p>SaaS Development</p>
              </div>
            </div>
          </div>

          <section className="featured-projects mt-10">
            <div className="flex justify-between items-center mb-6">
              <h3>Featured Projects</h3>
              <button className="link-btn">View all projects <ChevronRight size={16} /></button>
            </div>
            
            <div className="projects-grid flex gap-6">
              {[
                {
                  title: 'Quantum Metrics Dashboard',
                  desc: 'A high-performance analytics engine capable of processing 1M+ data points in real-time with...',
                  tags: ['REACT', 'D3.JS', 'TAILWIND'],
                  date: 'Released Nov 2023',
                  lang: ['JS', 'TS'],
                  image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=400'
                },
                {
                  title: 'Nexus API Gateway',
                  desc: 'Secure, rate-limited microservices gateway designed for fintech applications, featuring JWT...',
                  tags: ['LARAVEL', 'POSTGRESQL', 'REDIS'],
                  date: 'Released Jan 2024',
                  lang: ['PHP', 'SQL'],
                  image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400'
                }
              ].map((proj, i) => (
                <div key={i} className="card project-card flex-1">
                  <div className="project-image">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                  <div className="project-body p-6">
                    <div className="proj-tags flex gap-2 mb-3">
                      {proj.tags.map(t => <span key={t} className="p-tag">{t}</span>)}
                    </div>
                    <h4>{proj.title}</h4>
                    <p className="proj-desc mt-2">{proj.desc}</p>
                    <div className="proj-footer flex justify-between items-center mt-6">
                      <span className="proj-date">{proj.date}</span>
                      <div className="proj-lang-icons flex gap-2">
                        {proj.lang.map(l => <span key={l} className="lang-icon">{l}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="right-pan">
          <div className="card edu-card">
             <h3 className="section-title"><BookOpen size={20} /> Education</h3>
             <div className="edu-item mt-4">
                <h4>B.Sc. Computer Science</h4>
                <p className="edu-sub">University of Technology</p>
                <span className="edu-date">2021 — 2025 (Expected)</span>
             </div>
             
             <div className="exp-level mt-8">
                <div className="flex justify-between mb-2">
                  <span className="label">Experience Level</span>
                </div>
                <div className="progress-bar">
                   <div className="progress-fill" style={{width: '65%'}}></div>
                </div>
                <p className="label mt-2">Intermediate • 3+ Years Coding</p>
             </div>
          </div>

          <div className="card arsenal-card mt-10 dark-blue-card">
            <h3 className="text-white">Technical Arsenal</h3>
            <p className="text-muted-white mt-2 mb-8">Beyond the key highlights, I've cultivated a diverse set of tools to ensure I can tackle any technical challenge from inception to deployment.</p>
            
            <div className="arsenal-grid">
               <div className="arsenal-item">
                  <span className="dot purple"></span> Docker & K8s
               </div>
               <div className="arsenal-item">
                  <span className="dot purple"></span> GraphQL
               </div>
               <div className="arsenal-item">
                  <span className="dot purple"></span> Unit Testing
               </div>
               <div className="arsenal-item">
                  <span className="dot purple"></span> CI/CD Pipelines
               </div>
            </div>

            <div className="highlight-boxes flex gap-4 mt-8">
               <div className="arsenal-box">
                  <Cloud size={24} />
                  <p>Cloud Native</p>
               </div>
               <div className="arsenal-box">
                  <Layers size={24} />
                  <p>System Design</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .profile-container { padding: 40px; }
        .profile-header-card { padding: 40px; border-radius: var(--radius-xl); border: none; }
        .profile-img-wrap { position: relative; }
        .profile-img-wrap img { width: 128px; height: 128px; border-radius: 24px; object-fit: cover; }
        .online-status {
          position: absolute;
          bottom: -4px;
          right: -4px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #3b82f6;
          border: 4px solid white;
        }
        .user-details h1 { font-size: 32px; letter-spacing: -0.5px; }
        .user-title { color: var(--text-muted); font-size: 18px; margin-top: 4px; }
        .skill-tag-pill {
           padding: 6px 14px;
           background: #eff6ff;
           color: #3b82f6;
           border-radius: 20px;
           font-size: 12px;
           font-weight: 600;
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 40px;
        }

        .section-title { display: flex; align-items: center; gap: 8px; font-size: 18px; }
        .bio-text { line-height: 1.8; color: var(--text-muted); }
        .info-box {
          background: #f8fafc;
          padding: 16px 24px;
          border-radius: 12px;
          flex: 1;
        }
        .label { font-size: 10px; font-weight: 700; color: var(--text-light); letter-spacing: 1px; display: block; margin-bottom: 4px; }
        .info-box p { font-weight: 600; font-size: 14px; }

        .link-btn { color: var(--primary); font-weight: 600; display: flex; align-items: center; gap: 4px; }
        
        .project-card { overflow: hidden; padding: 0; }
        .project-image img { width: 100%; height: 200px; object-fit: cover; border-bottom: 1px solid var(--border); }
        .p-tag { font-size: 10px; color: var(--text-light); border: 1px solid var(--border); padding: 4px 8px; border-radius: 4px; }
        .proj-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; }
        .proj-date { font-size: 12px; color: var(--text-light); }
        .lang-icon { font-size: 10px; font-weight: 700; background: #f1f5f9; padding: 4px 8px; border-radius: 4px; }

        .edu-sub { font-weight: 500; margin: 4px 0; }
        .edu-date { font-size: 12px; color: var(--primary); font-weight: 600; }

        .progress-bar { height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; margin-top: 12px; }
        .progress-fill { height: 100%; background: var(--primary); border-radius: 4px; }

        .dark-blue-card { background: #1e293b; color: white; }
        .text-muted-white { color: #94a3b8; font-size: 14px; line-height: 1.6; }
        .arsenal-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .arsenal-item { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 500; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.purple { background: #6366f1; }
        
        .arsenal-box {
           flex: 1;
           background: rgba(255,255,255,0.05);
           padding: 24px 16px;
           border-radius: 16px;
           text-align: center;
           border: 1px solid rgba(255,255,255,0.1);
        }
        .arsenal-box p { font-size: 13px; font-weight: 600; margin-top: 12px; }
      `}</style>
    </div>
  );
};

// Internal sub-components helper
const User = ({size}) => <Layout size={size} />;
const ChevronRight = ({size}) => <ExternalLink size={size} style={{transform: 'rotate(45deg)'}} />;

export default Profile;
