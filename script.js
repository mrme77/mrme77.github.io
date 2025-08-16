// // --- Profanity list & function ---
// const PROFANITY_LIST = ["badword1", "badword2", "badword3"];

// function containsProfanity(text) {
//   const lower = text.toLowerCase();
//   return PROFANITY_LIST.some(word => lower.includes(word));
// }

// // --- Clock updater ---
// function updateClocks() {
//   const now = new Date();
//   const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

//   document.getElementById('clock-pt').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Los_Angeles' }).format(now);
//   document.getElementById('clock-ct').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Chicago' }).format(now);
//   document.getElementById('clock-et').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(now);
//   document.getElementById('clock-rome').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Rome' }).format(now);
// }

// setInterval(updateClocks, 1000);
// updateClocks();

// // --- Tab switching ---
// function showTab(tabId) {
//   const tabs = document.querySelectorAll('.tab');
//   tabs.forEach(tab => tab.classList.remove('active'));
//   document.getElementById(tabId).classList.add('active');

//   const cursors = document.querySelectorAll('.cursor');
//   cursors.forEach(c => c.style.display = 'none');

//   const activeCursor = document.getElementById('cursor-' + tabId);
//   if (activeCursor) activeCursor.style.display = 'inline-block';
// }

// // --- Chat window toggle & close ---
// const chatWindow = document.getElementById("chatbot-window");
// const chatbox = document.getElementById("chatbox");

// document.getElementById("close-chat").addEventListener("click", () => {
//   chatbox.innerHTML = "";
//   chatWindow.style.display = "none";
// });

// function toggleChat() {
//   if (chatWindow.style.display === "flex") {
//     chatWindow.style.display = "none";
//   } else {
//     chatbox.innerHTML = "";
//     chatWindow.style.display = "flex";
//   }
// }

// // --- Send chat messages ---
// async function sendChat() {
//   const input = document.getElementById("chat-input");
//   const message = input.value.trim();

//   if (!message) return;
//   if (message.length > 150) { alert("Your message is too long. Please keep it under 150 characters."); return; }
//   if (containsProfanity(message)) { alert("Your message contains inappropriate language."); return; }

//   chatbox.innerHTML += `<div><strong>User:</strong> ${message}</div>`;
//   input.value = '';

//   try {
//     const response = await fetch("https://mrme77githubio-backend.vercel.app/chat", {
//       method: "POST",
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ prompt: message })
//     });

//     const data = await response.json();
//     chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> ${data.reply || "Sorry, no response received."}</div>`;
//   } catch (err) {
//     chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> Error connecting to server.</div>`;
//   }

//   chatbox.scrollTop = chatbox.scrollHeight;
// }
// // async function sendChat() {
// //   const input = document.getElementById("chat-input");
// //   const message = input.value.trim();

// //   if (!message) return;
// //   if (message.length > 150) { alert("Your message is too long. Please keep it under 150 characters."); return; }
// //   if (containsProfanity(message)) { alert("Your message contains inappropriate language."); return; }

// //   chatbox.innerHTML += `<div><strong>User:</strong> ${message}</div>`;
// //   input.value = '';

// //   try {
// //     const response = await fetch("https://mrme77githubio-backend.vercel.app/chat", {
// //       method: "POST",
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({ prompt: message })
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Server returned ${response.status}`);
// //     }

// //     const data = await response.json();
// //     chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> ${data.reply || "Sorry, no response received."}</div>`;
// //   } catch (err) {
// //     console.error("Chat fetch error:", err);
// //     chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> Error connecting to server. Check console for details.</div>`;
// //   }

// //   chatbox.scrollTop = chatbox.scrollHeight;
// // }

// // --- Contact form handling ---
// const showFormBtn = document.getElementById("showFormBtn");
// const contactForm = document.getElementById("contactForm");
// const messageBox = document.getElementById("message");
// const charCount = document.getElementById("charCount");

// // Show contact form
// showFormBtn.addEventListener("click", () => {
//   contactForm.style.display = "flex";
//   setTimeout(() => contactForm.classList.add("show"), 50);
//   showFormBtn.style.display = "none";
// });

// // Character counter
// messageBox.addEventListener("input", () => {
//   charCount.textContent = `${messageBox.value.length} / 255`;
// });

// // Handle contact form submit
// contactForm.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const formData = {
//     name: document.getElementById("name").value.trim(),
//     email: document.getElementById("email").value.trim(),
//     message: messageBox.value.trim()
//   };

//   try {
//     const res = await fetch("https://mrme77githubio-backend.vercel.app/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });

//     if (res.ok) {
//       alert("Message sent successfully!");
//       contactForm.reset();
//       charCount.textContent = "0 / 255";
//       contactForm.style.display = "none";
//       showFormBtn.style.display = "inline-block";
//     } else {
//       alert("Error sending message. Please try again.");
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     alert("Could not connect to the server.");
//   }
// });

// // function updateClocks() {
// //   const now = new Date();
// //   const options = {
// //     hour: '2-digit',
// //     minute: '2-digit',
// //     second: '2-digit',
// //     hour12: false,
// //   };
// //   document.getElementById('clock-pt').textContent =
// //     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Los_Angeles' }).format(now);

// //   document.getElementById('clock-ct').textContent =
// //     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Chicago' }).format(now);

// //   document.getElementById('clock-et').textContent =
// //     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(now);

// //   document.getElementById('clock-rome').textContent =
// //     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Rome' }).format(now);

// //   }

// // setInterval(updateClocks, 1000);
// // updateClocks();

// // function showTab(tabId) {
// //   // Show the correct tab content
// //   const tabs = document.querySelectorAll('.tab');
// //   tabs.forEach(tab => tab.classList.remove('active'));
// //   document.getElementById(tabId).classList.add('active');

// //   // Move the blinking cursor to the selected tab
// //   const cursors = document.querySelectorAll('.cursor');
// //   cursors.forEach(c => c.style.display = 'none');

// //   const activeCursor = document.getElementById('cursor-' + tabId);
// //   if (activeCursor) activeCursor.style.display = 'inline-block';
// // }
// // function toggleChat() {
// //   const chatWindow = document.getElementById("chatbot-window");
// //   chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
// // }

// // async function sendChat() {
// //   const input = document.getElementById("chat-input");
// //   const message = input.value.trim();
// //   if (!message) return;

// //   const chatbox = document.getElementById("chatbox");
// //   chatbox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
// //   input.value = '';

// //   const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
// //     method: "POST",
// //     headers: {
// //       'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
// //       'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify({
// //       model: "openai/gpt-3.5-turbo",
// //       messages: [{ role: "user", content: message }]
// //     })
// //   });

// //   const data = await response.json();
// //   const reply = data.choices[0].message.content;
// //   chatbox.innerHTML += `<div><strong>Bot:</strong> ${reply}</div>`;
// //   chatbox.scrollTop = chatbox.scrollHeight;
// // }


// ----------------------
// Profanity Filter
// ----------------------
const PROFANITY_LIST = ["badword1", "badword2", "badword3"];

function containsProfanity(text) {
  const lower = text.toLowerCase();
  return PROFANITY_LIST.some(word => lower.includes(word));
}

// ----------------------
// Clock Updater
// ----------------------
function updateClocks() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  const clocks = {
    'clock-pt': 'America/Los_Angeles',
    'clock-ct': 'America/Chicago',
    'clock-et': 'America/New_York',
    'clock-rome': 'Europe/Rome'
  };

  Object.entries(clocks).forEach(([id, tz]) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = new Intl.DateTimeFormat('en-US', { ...options, timeZone: tz }).format(now);
    }
  });
}

setInterval(updateClocks, 1000);
updateClocks();

// ----------------------
// Tab Switching
// ----------------------
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  const activeTab = document.getElementById(tabId);
  if (activeTab) activeTab.classList.add('active');

  document.querySelectorAll('.cursor').forEach(c => c.style.display = 'none');
  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';
}

// ----------------------
// Chat Window Toggle & Close
// ----------------------
const chatWindow = document.getElementById("chatbot-window");
const chatbox = document.getElementById("chatbox");

document.getElementById("close-chat")?.addEventListener("click", () => {
  chatbox.innerHTML = "";
  chatWindow.style.display = "none";
});

function toggleChat() {
  if (chatWindow.style.display === "flex") {
    chatWindow.style.display = "none";
  } else {
    chatbox.innerHTML = "";
    chatWindow.style.display = "flex";
  }
}

// ----------------------
// Send Chat Messages
// ----------------------
async function sendChat() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (!message) return;

  if (message.length > 150) {
    alert("Your message is too long. Please keep it under 150 characters.");
    return;
  }
  if (containsProfanity(message)) {
    alert("Your message contains inappropriate language.");
    return;
  }

  chatbox.innerHTML += `<div><strong>User:</strong> ${message}</div>`;
  input.value = '';

  try {
    const response = await fetch("https://mrme77githubio-backend.vercel.app/chat", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();
    chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> ${data.reply || "Sorry, no response received."}</div>`;
  } catch (err) {
    console.error("Chat fetch error:", err);
    chatbox.innerHTML += `<div><strong>Pasquale-AI:</strong> Error connecting to server.</div>`;
  }

  chatbox.scrollTop = chatbox.scrollHeight;
}

// ----------------------
// Contact Form Handling
// ----------------------
const showFormBtn = document.getElementById("showFormBtn");
const contactForm = document.getElementById("contactForm");
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

// Show contact form
showFormBtn?.addEventListener("click", () => {
  contactForm.style.display = "flex";
  setTimeout(() => contactForm.classList.add("show"), 50);
  showFormBtn.style.display = "none";
});

// Character counter
messageBox?.addEventListener("input", () => {
  charCount.textContent = `${messageBox.value.length} / 255`;
});

// Handle contact form submit
contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: messageBox.value.trim()
  };

  try {
    const res = await fetch("https://mrme77githubio-backend.vercel.app/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      contactForm.reset();
      charCount.textContent = "0 / 255";
      contactForm.style.display = "none";
      showFormBtn.style.display = "inline-block";
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Could not connect to the server.");
  }
});
