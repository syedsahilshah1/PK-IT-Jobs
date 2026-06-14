import React, { useMemo, useState } from 'react';
import { CheckCircle2, Clock, XCircle, Filter, Briefcase, Mail } from 'lucide-react';

const STORAGE_KEY = 'pkit_applications';


const loadApplications = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const saveApplications = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const Applications = () => {
  const [applications, setApplications] = useState(() => loadApplications());
  const [statusFilter, setStatusFilter] = useState('All');
  const userRole = localStorage.getItem('pkit_user_role') || 'student';

  const filtered = useMemo(() => {
    if (statusFilter === 'All') return applications;
    return applications.filter((app) => app.status === statusFilter);
  }, [applications, statusFilter]);

  const updateStatus = (id, status) => {
    const next = applications.map((app) => (app.id === id ? { ...app, status } : app));
    setApplications(next);
    saveApplications(next);
  };

  const removeApplication = (id) => {
    const next = applications.filter((app) => app.id !== id);
    setApplications(next);
    saveApplications(next);
  };

  if (userRole === 'recruiter') {
    return (
      <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
              New Applications
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Applicant Pipeline</h1>
            <p className="text-slate-500 font-medium mt-2">Review candidates and move them through your hiring stages.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 font-semibold shadow-sm">
            <Filter size={16} /> Filter
          </button>
        </header>

        {applications.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-500 font-medium">
            No applications yet. Once candidates apply, they will appear here.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applications.map((app) => (
              <div key={app.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{app.title}</h3>
                    <p className="text-sm text-slate-500 font-semibold mt-1">{app.company}</p>
                    <p className="text-xs text-slate-400 mt-2">Applied on {app.appliedOn}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${
                    app.status === 'Pending'
                      ? 'bg-amber-50 text-amber-600'
                      : app.status === 'Interview'
                      ? 'bg-indigo-50 text-indigo-600'
                      : app.status === 'Hired'
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-rose-50 text-rose-600'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <div className="flex gap-2 mt-6 flex-wrap">
                  {(app.tags || []).map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {['Pending', 'Interview', 'Hired', 'Rejected'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => updateStatus(app.id, status)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        status === app.status
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <button className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold">Message</button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 py-2.5 rounded-xl text-xs font-bold">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
            My Applications
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Application Tracker</h1>
          <p className="text-slate-500 font-medium mt-2">Keep track of every job you applied for.</p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-3 py-2">
          <Filter size={16} className="text-slate-500" />
          {['All', 'Pending', 'Interview', 'Hired', 'Rejected'].map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                statusFilter === status ? 'bg-indigo-600 text-white' : 'text-slate-500'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center text-slate-500 font-medium">
          No applications yet. Use the Quick Apply button to start.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((app) => (
            <div key={app.id} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{app.title}</h3>
                  <p className="text-sm text-slate-500 font-semibold mt-1">{app.company}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${
                  app.status === 'Pending'
                    ? 'bg-amber-50 text-amber-600'
                    : app.status === 'Interview'
                    ? 'bg-indigo-50 text-indigo-600'
                    : app.status === 'Hired'
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'bg-rose-50 text-rose-600'
                }`}>
                  {app.status}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm text-slate-500 font-medium">
                <Clock size={14} /> Applied on {app.appliedOn}
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                {(app.tags || []).map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => updateStatus(app.id, 'Interview')}
                  className="flex-1 bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold"
                >
                  Mark Interview
                </button>
                <button
                  type="button"
                  onClick={() => removeApplication(app.id)}
                  className="flex-1 bg-white border border-slate-200 text-slate-600 py-2.5 rounded-xl text-xs font-bold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
            <Briefcase size={18} /> Active
          </div>
          <p className="text-3xl font-black text-slate-900 mt-3">{applications.length}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
            <CheckCircle2 size={18} /> Interviews
          </div>
          <p className="text-3xl font-black text-slate-900 mt-3">
            {applications.filter((app) => app.status === 'Interview').length}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
            <Mail size={18} /> Offers
          </div>
          <p className="text-3xl font-black text-slate-900 mt-3">
            {applications.filter((app) => app.status === 'Hired').length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
