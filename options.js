const DEBUG_FLAG_KEY = 'zmw_debug_mode_enabled';

document.addEventListener('DOMContentLoaded', () => {
  const debugToggle = document.getElementById('debugToggle');

  chrome.storage.local.get([DEBUG_FLAG_KEY]).then(result => {
    debugToggle.checked = Boolean(result[DEBUG_FLAG_KEY]);
  });

  debugToggle.addEventListener('change', () => {
    chrome.storage.local.set({ [DEBUG_FLAG_KEY]: debugToggle.checked });
  });
});
