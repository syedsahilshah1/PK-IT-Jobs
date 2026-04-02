export const playNotificationSound = () => {
  const settings = JSON.parse(localStorage.getItem('pkit_settings') || '{}');
  if (settings.notifications === false) return;

  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  audio.play().catch(err => {
    console.warn("Audio playback failed. User interaction might be required first.", err);
  });
};
