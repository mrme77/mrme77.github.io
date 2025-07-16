// script.js
function showTab(tabId) {
  // Show selected content tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  // Move the blinking cursor
  const cursorSpans = document.querySelectorAll('.cursor');
  cursorSpans.forEach(span => span.style.display = 'none');

  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';
}
