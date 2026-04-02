import { playNotificationSound } from './notifications';

const STORAGE_KEY = 'pkit_applications';

export const quickApply = (job) => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const applications = raw ? JSON.parse(raw) : [];
    
    // Check if already applied
    if (applications.find(app => app.jobId === job.id)) {
      alert("You have already applied for this job!");
      return false;
    }

    const newApp = {
      id: `app-${Date.now()}`,
      jobId: job.id,
      title: job.title,
      company: job.company,
      appliedOn: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Pending',
      tags: job.tags || []
    };

    const next = [newApp, ...applications];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

    // Log SMTP notification for Superadmin
    const logs = JSON.parse(localStorage.getItem('pkit_system_logs') || '[]');
    logs.unshift({
      id: `smtp-${Date.now()}`,
      type: 'SMTP_OUTBOX',
      event: 'JOB_APPLICATION_SENT',
      user: job.company,
      time: new Date().toISOString(),
      status: 'SENT'
    });
    localStorage.setItem('pkit_system_logs', JSON.stringify(logs.slice(0, 50)));
    
    playNotificationSound();
    alert(`Success! Your application for ${job.title} at ${job.company} has been sent.`);
    return true;
  } catch (error) {
    console.error("Failed to apply:", error);
    return false;
  }
};
