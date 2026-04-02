import React, { useState } from 'react';
import { User, Bell, Lock, Mail, CheckCircle2 } from 'lucide-react';

const Settings = () => {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    name: 'Alex Rivers',
    email: 'alex@example.com',
    company: 'PK IT Jobs',
    notifications: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('pkit_settings', JSON.stringify(form));
    import('../utils/notifications').then(({ playNotificationSound }) => {
      playNotificationSound();
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto animate-fade-in p-2 lg:p-6">
      <header className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
          Account Settings
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
        <p className="text-slate-500 font-medium mt-2">Manage your profile, notifications, and security preferences.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
            <User size={18} /> Profile
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Company (Optional)</label>
            <input
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold"
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <input
              type="checkbox"
              checked={form.notifications}
              onChange={(e) => setForm({ ...form, notifications: e.target.checked })}
              className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm font-semibold text-slate-600 flex items-center gap-2">
              <Bell size={16} /> Enable notification sounds
            </span>
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-sm">
            Save Changes
          </button>

          {saved && (
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
              <CheckCircle2 size={16} /> Settings saved
            </div>
          )}
        </form>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
            <Lock size={18} /> Security
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Current Password</label>
            <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold" />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">New Password</label>
            <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold" />
          </div>
          <button type="button" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl">Update Password</button>

          <div className="pt-4 border-t border-slate-100 text-sm text-slate-500 flex items-center gap-2">
            <Mail size={16} /> Two-factor authentication coming soon.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
