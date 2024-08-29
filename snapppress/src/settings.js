document.getElementById('settings-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const settings = {
    wordpressUrl: document.getElementById('wordpress-url').value,
    wordpressUsername: document.getElementById('wordpress-username').value,
    wordpressPassword: document.getElementById('wordpress-password').value,
  };
  await window.electronAPI.saveSettings(settings);
  alert('Settings saved successfully!');
});

window.addEventListener('DOMContentLoaded', async () => {
  const settings = await window.electronAPI.getSettings();
  if (settings) {
    document.getElementById('wordpress-url').value = settings.wordpressUrl || '';
    document.getElementById('wordpress-username').value = settings.wordpressUsername || '';
    document.getElementById('wordpress-password').value = settings.wordpressPassword || '';
  }
});