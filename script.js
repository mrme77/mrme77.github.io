function showTab(tabId) {
  // Show the correct tab content
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  // Move the blinking cursor to the selected tab
  const cursors = document.querySelectorAll('.cursor');
  cursors.forEach(c => c.style.display = 'none');

  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';
}
