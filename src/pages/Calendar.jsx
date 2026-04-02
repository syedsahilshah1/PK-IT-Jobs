import React, { useMemo, useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'pkit_calendar_events';

const defaultEvents = [
  {
    id: 'evt-1',
    title: 'Mock Interview Session',
    date: '2026-04-10',
    time: '14:00',
    type: 'Interview'
  },
  {
    id: 'evt-2',
    title: 'Career Fair - Fintech Startups',
    date: '2026-04-14',
    time: '10:00',
    type: 'Career'
  },
  {
    id: 'evt-3',
    title: 'Portfolio Review Workshop',
    date: '2026-04-18',
    time: '16:00',
    type: 'Workshop'
  }
];

const loadEvents = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultEvents;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaultEvents;
  } catch (error) {
    return defaultEvents;
  }
};

const saveEvents = (events) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

const formatMonthLabel = (date) =>
  date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [events, setEvents] = useState(() => loadEvents());
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [form, setForm] = useState({ title: '', date: '', time: '', type: 'Workshop' });
  const [saved, setSaved] = useState(false);

  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startWeekday = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const grid = [];
    for (let i = 0; i < startWeekday; i += 1) {
      grid.push(null);
    }
    for (let d = 1; d <= daysInMonth; d += 1) {
      const date = new Date(year, month, d).toISOString().slice(0, 10);
      grid.push(date);
    }
    return grid;
  }, [currentDate]);

  const eventsForDay = events.filter((event) => event.date === selectedDate);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.time) return;

    const next = [
      ...events,
      {
        id: `evt-${Date.now()}`,
        title: form.title,
        date: form.date,
        time: form.time,
        type: form.type
      }
    ];
    setEvents(next);
    saveEvents(next);
    setSaved(true);
    setForm({ title: '', date: '', time: '', type: form.type });
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto animate-fade-in p-2 lg:p-6">
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 pb-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold tracking-widest uppercase mb-3 shadow-sm border border-indigo-200">
            Schedule Center
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Calendar</h1>
          <p className="text-slate-500 font-medium mt-2">Track interviews, deadlines, and career events in one place.</p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm">
          <button
            type="button"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
            className="p-2 rounded-lg hover:bg-slate-50 text-slate-500"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-bold text-slate-800 min-w-[160px] text-center">{formatMonthLabel(currentDate)}</span>
          <button
            type="button"
            onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
            className="p-2 rounded-lg hover:bg-slate-50 text-slate-500"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <div className="grid grid-cols-7 gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 mt-2">
            {days.map((date, idx) => {
              const isSelected = date === selectedDate;
              const hasEvent = date && events.some((event) => event.date === date);
              return (
                <button
                  key={`${date || 'empty'}-${idx}`}
                  type="button"
                  disabled={!date}
                  onClick={() => date && setSelectedDate(date)}
                  className={`h-16 rounded-2xl border text-sm font-semibold transition-all flex flex-col items-center justify-center gap-2 ${
                    date
                      ? isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  {date && <span>{new Date(date).getDate()}</span>}
                  {hasEvent && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                </button>
              );
            })}
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <CalendarIcon size={18} /> Events on {selectedDate}
              </div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                {eventsForDay.length} Scheduled
              </span>
            </div>

            {eventsForDay.length === 0 ? (
              <p className="text-sm text-slate-500 font-medium">No events scheduled for this day.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {eventsForDay.map((event) => (
                  <div key={event.id} className="border border-slate-200 rounded-2xl p-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{event.type}</div>
                    <h4 className="text-base font-bold text-slate-900 mt-2">{event.title}</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">{event.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Add Event</h3>
              <Plus size={18} className="text-indigo-600" />
            </div>
            {saved && (
              <div className="mb-4 p-3 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl flex items-center gap-2">
                <CheckCircle2 size={16} /> Event saved
              </div>
            )}
            <form onSubmit={handleAddEvent} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">
                  Title
                </label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                  placeholder="Portfolio review"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-2">
                  Type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  {['Interview', 'Career', 'Workshop', 'Deadline'].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-sm"
              >
                Save Event
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Calendar;
