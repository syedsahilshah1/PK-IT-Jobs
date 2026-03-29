import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, Building2, Github, Code2 } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Panel - Hero Branding */}
      <div className="hidden lg:flex flex-col flex-1 relative bg-indigo-950 text-white p-12 overflow-hidden justify-between" style={{
        backgroundImage: 'linear-gradient(rgba(30, 27, 75, 0.85), rgba(30, 27, 75, 0.95)), url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Top Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-10 w-max">
          <div className="bg-indigo-600 text-white p-2 rounded-lg">
             <Code2 size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">PK IT Jobs</span>
        </Link>

        {/* Hero Content */}
        <div className="relative z-10 max-w-md mt-12">
          <h1 className="text-5xl font-bold tracking-tight leading-tight mb-8">
            The Hub for<br />
            <span className="text-indigo-400">IT Professionals.</span>
          </h1>
          <p className="text-indigo-200 text-lg leading-relaxed mb-12">
            A curated ecosystem where ambitious tech talent meets visionary companies. Build your portfolio, find your team, and land your next IT role.
          </p>

          <div className="space-y-8">
             <div className="flex gap-4">
                <GraduationCap className="text-indigo-300 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white">For Tech Talent</h3>
                  <p className="text-indigo-200 text-sm mt-1 leading-relaxed">Showcase your skills and real-world projects. Get directly noticed by IT recruiters.</p>
                </div>
             </div>
             
             <div className="flex gap-4">
                <Building2 className="text-indigo-300 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white">For Companies</h3>
                  <p className="text-indigo-200 text-sm mt-1 leading-relaxed">Source verified IT talent that understands systems, scalability, and modern stacks.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-indigo-300 font-medium">
          © 2024 PK IT Jobs. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col p-8 bg-white text-slate-900 relative h-screen overflow-y-auto">
         
         <div className="w-full max-w-[420px] mx-auto flex-1 flex flex-col justify-center animate-fade-in py-12">
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Welcome back</h2>
            <p className="text-slate-500 mb-8">Choose your entry point to continue.</p>

            {/* Role Toggle Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl mb-8 border border-slate-200">
               <button
                  type="button"
                  onClick={() => setRole('student')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === 'student' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  Student / Developer
               </button>
               <button
                  type="button"
                  onClick={() => setRole('recruiter')}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === 'recruiter' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
               >
                  Company Login
               </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-600 uppercase mb-2">
                     Work or Student Email
                  </label>
                  <input 
                     type="email" 
                     className="w-full bg-slate-50 border border-slate-200 outline-none text-slate-900 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium"
                     placeholder="name@company.com"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     required
                  />
               </div>

               <div>
                  <div className="flex justify-between items-center mb-2">
                     <label className="text-xs font-bold tracking-wider text-slate-600 uppercase">
                        Password
                     </label>
                     <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">Forgot?</a>
                  </div>
                  <input 
                     type="password" 
                     className="w-full bg-slate-50 border border-slate-200 outline-none text-slate-900 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all font-medium text-lg leading-none"
                     placeholder="••••••••"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     required
                  />
               </div>

               <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-lg shadow-sm transition-all mt-4 border border-indigo-700 hover:shadow-md hover:-translate-y-0.5">
                  Sign In
               </button>
            </form>

            <div className="mt-8 relative">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
               </div>
               <div className="relative flex justify-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span className="bg-white px-4">Or continue with</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
               <button type="button" className="flex items-center justify-center gap-2 py-3 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-700 hover:bg-slate-100 transition-all">
                  <Github size={18} /> GitHub
               </button>
               <button type="button" className="flex items-center justify-center gap-2 py-3 bg-slate-50 border border-slate-200 rounded-lg font-bold text-slate-700 hover:bg-slate-100 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  Google
               </button>
            </div>

            <p className="text-center text-slate-600 font-medium text-sm mt-10">
               Don't have an account? <Link to="#" className="text-indigo-600 font-bold hover:underline">Create an account</Link>
            </p>
         </div>

         {/* Bottom Nav - using mt-auto to naturally push it to the bottom without overlapping */}
         <div className="w-full mt-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-semibold text-slate-500 gap-4 border-t border-slate-100">
            <div className="flex items-center gap-6">
               <span className="text-slate-900 font-bold">PK IT Jobs</span>
               <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
            <div>© 2024 PK IT Jobs. All rights reserved.</div>
         </div>

      </div>
    </div>
  );
};

export default Login;
