document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('settings-form');
  const closeIcon = document.getElementById('close-icon');
  
  // Load existing settings
  const settings = await window.electronAPI.getSettings();
  if (settings) {
    document.getElementById('wordpress-url').value = settings.wordpressUrl || '';
    document.getElementById('wordpress-username').value = settings.wordpressUsername || '';
    document.getElementById('wordpress-password').value = settings.wordpressPassword || '';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newSettings = {
      wordpressUrl: document.getElementById('wordpress-url').value,
      wordpressUsername: document.getElementById('wordpress-username').value,
      wordpressPassword: document.getElementById('wordpress-password').value,
    };
    await window.electronAPI.saveSettings(newSettings);
    window.electronAPI.closeSettings();
  });

  closeIcon.addEventListener('click', () => {
    window.electronAPI.closeSettings();
  });
});