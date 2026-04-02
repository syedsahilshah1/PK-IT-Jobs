import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Github, 
  Chrome, 
  Eye, 
  EyeOff, 
  ShieldAlert, 
  Clock,
  User,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { playNotificationSound } from '../utils/notifications';

const Login = ({ onLogin, initialRole = 'student', hideToggle = false }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimeLeft, setLockTimeLeft] = useState('');

  useEffect(() => {
    const checkLockout = () => {
      const lockoutData = JSON.parse(localStorage.getItem(`lockout_${formData.email}`) || '{}');
      if (lockoutData.until && new Date().getTime() < lockoutData.until) {
        setIsLocked(true);
        const diff = lockoutData.until - new Date().getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setLockTimeLeft(`${hours}h ${minutes}m`);
      } else {
        setIsLocked(false);
      }
    };
    if (formData.email) checkLockout();
  }, [formData.email]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (isLocked) {
      setError(`Account locked. Try again in ${lockTimeLeft} or contact Superadmin.`);
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Mock Universal Key
      const isCorrectKey = (formData.password === 'admin123' || formData.password === 'P@ssword123');

      if (!isSignUp && !isCorrectKey) {
        const attemptsKey = `attempts_${formData.email}`;
        const attempts = (parseInt(localStorage.getItem(attemptsKey)) || 0) + 1;
        localStorage.setItem(attemptsKey, attempts.toString());

        if (attempts >= 3) {
          const unlockTime = new Date().getTime() + (24 * 60 * 60 * 1000);
          localStorage.setItem(`lockout_${formData.email}`, JSON.stringify({ until: unlockTime }));
          setError('Too many failed attempts. Account locked for 24 hours.');
          playNotificationSound();
        } else {
          setError(`Invalid security key. Access denied.`);
        }
        setIsLoading(false);
        return;
      }

      // Successful Auth: Save User Info
      const userData = {
        name: isSignUp ? formData.name : (formData.email.split('@')[0].toUpperCase()),
        email: formData.email,
        role: role,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || formData.email)}&background=random&color=fff`
      };
      
      localStorage.setItem('pkit_user_auth', JSON.stringify(userData));
      localStorage.removeItem(`attempts_${formData.email}`);
      
      onLogin(role);
      playNotificationSound();
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  // Mock Third-Party Auth
  const handleThirdPartyAuth = (provider) => {
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      const mockName = provider === 'Google' ? 'Syed Sahil' : 'Dev Sahil';
      const mockEmail = provider === 'Google' ? 'sahil@google.com' : 'sahil@github.com';
      
      const userData = {
        name: mockName,
        email: mockEmail,
        role: role,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(mockName)}&background=${provider === 'Google' ? 'ea4335' : '24292e'}&color=fff`
      };
      
      localStorage.setItem('pkit_user_auth', JSON.stringify(userData));
      onLogin(role);
      playNotificationSound();
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-200/50 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-200/50 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[40px] shadow-2xl border border-slate-200/60 overflow-hidden relative z-10 text-left">
        
        {/* Left Branding */}
        <div className="hidden lg:flex flex-col justify-between p-20 bg-slate-900 text-white relative">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl font-black tracking-tight leading-tight">Elevating IT Careers <br/> Across Pakistan.</h2>
              <p className="mt-6 text-slate-400 text-lg font-medium max-w-md">Join the most advanced ecosystem connecting top-tier developers with innovative enterprises.</p>
           </div>
           <div className="relative z-10">
              <div className="flex -space-x-4 mb-6">
                 {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center font-bold text-xs">+{i*2}k</div>)}
              </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
               <h1 className="text-3xl font-black text-slate-900">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
               <p className="text-slate-500 font-medium mt-1">{isSignUp ? 'Join the PK IT ecosystem and start your journey.' : 'Enter your credentials to access your terminal.'}</p>
            </div>

            {/* Role Toggle Tabs */}
            {!hideToggle && (
              <div className="flex bg-slate-100 p-1 rounded-xl mb-8 border border-slate-200">
                <button onClick={() => setRole('student')} className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === 'student' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>Student</button>
                <button onClick={() => setRole('recruiter')} className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === 'recruiter' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}>Company</button>
              </div>
            )}

            {hideToggle && (
              <div className="mb-8 p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-center gap-4 text-white shadow-xl">
                 <ShieldAlert size={24} className="text-emerald-400" />
                 <div><p className="text-[10px] font-black uppercase tracking-widest opacity-60">Superadmin Terminal</p><p className="text-xs font-bold">Secure Root Access Required</p></div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-center gap-3 text-rose-600 animate-shake">
                 <ShieldAlert size={20} /><p className="text-xs font-bold">{error}</p>
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-5">
               {isSignUp && (
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <div className="relative group">
                       <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                       <input 
                          required
                          className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-sans"
                          placeholder="Syed Sahil"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                       />
                    </div>
                 </div>
               )}

               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                  <div className="relative group">
                     <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                     <input 
                        type="email" required
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-sans"
                        placeholder={role === 'student' ? "student@career.pk" : "hr@company.pk"}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-end mb-1">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Security Key</label>
                  </div>
                  <div className="relative group">
                     <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                     <input 
                        type={showPassword ? "text" : "password"} required
                        className="w-full bg-slate-50 border border-slate-200 p-4 pl-12 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 transition-all font-mono"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                     />
                     <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button>
                  </div>
               </div>

               {isLocked ? (
                 <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl text-left shadow-2xl animate-fade-in relative overflow-hidden group">
                    <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-3 flex items-center gap-2"><Clock size={12} /> Recovery Protocol</p>
                    <h4 className="text-sm font-bold text-white mb-2">Account Locked</h4>
                    <p className="text-[11px] font-medium text-slate-400 leading-relaxed mb-6">Security protocol has suspended access for {lockTimeLeft}.</p>
                    <button type="button" onClick={() => alert("Forwarding recovery request...")} className="w-full py-3 bg-white text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest">Request Priority Unlock</button>
                 </div>
               ) : (
                 <button disabled={isLoading} className={`w-full bg-indigo-900 hover:bg-slate-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-slate-200 mt-6 ${isLoading ? 'opacity-50' : ''}`}>
                    {isLoading ? 'Decrypting...' : isSignUp ? 'Create System Account' : 'Initialize Terminal'} {!isLoading && <ArrowRight size={20} />}
                 </button>
               )}
            </form>

            <div className="mt-8 flex items-center gap-4">
               <div className="h-px bg-slate-100 flex-1"></div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect with Identity</span>
               <div className="h-px bg-slate-100 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
               <button onClick={() => handleThirdPartyAuth('GitHub')} className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 font-bold text-xs"><Github size={16} /> GitHub</button>
               <button onClick={() => handleThirdPartyAuth('Google')} className="flex items-center justify-center gap-2 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 font-bold text-xs"><Chrome size={16} /> Google</button>
            </div>
            
            <p className="text-center mt-10 text-sm font-bold text-slate-500">
               {isSignUp ? 'Already have a terminal?' : "Don't have a system account?"} 
               <button onClick={() => setIsSignUp(!isSignUp)} className="text-indigo-600 ml-2 hover:underline bg-transparent border-none p-0">
                  {isSignUp ? 'Sign In Instead' : 'Create One Now'}
               </button>
            </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
