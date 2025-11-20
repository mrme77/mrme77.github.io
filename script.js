// --- Profanity list & function ---
const PROFANITY_LIST = ["badword1", "badword2", "badword3"];

function containsProfanity(text) {
  const lower = text.toLowerCase();
  return PROFANITY_LIST.some(word => lower.includes(word));
}
const JOKES = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why did the math book look sad? Because it had too many problems.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the bicycle fall over? Because it was two-tired.",
  "What do you call cheese that isn't yours? Nacho cheese.",
  "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent.",
  "What do you call a factory that makes good products? A satisfactory.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the chicken join a band? Because it had the drumsticks.",
  "Why did the coffee file a police report? It got mugged.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why was the math lecture so long? The professor kept going off on a tangent.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why did the bicycle stand up by itself? It was two-tired.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "Why did the cow win an award? Because he was outstanding in his field.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why did the bicycle stand up by itself? It was two-tired.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "Why did the cow win an award? Because he was outstanding in his field.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why did the bicycle stand up by itself? It was two-tired.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "Why did the cow win an award? Because he was outstanding in his field.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why did the bicycle stand up by itself? It was two-tired.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "Why did the cow win an award? Because he was outstanding in his field.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake.",
  "Why did the bicycle stand up by itself? It was two-tired.",
  "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the chicken cross the playground? To get to the other slide.",
  "Why did the cow win an award? Because he was outstanding in his field.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "Why did the computer go to the doctor? It had a virus.",
  "Why did the cookie go to the hospital? Because it felt crummy.",
  "Why did the stadium get hot after the game? All the fans left.",
  "Why did the banana go to the doctor? Because it wasn’t peeling well.",
  "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
  "Why did the picture go to jail? Because it was framed.",
  "Why did the student eat his homework? Because his teacher told him it was a piece of cake."
];

// --- Clock updater ---
function updateClocks() {
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  document.getElementById('clock-pt').textContent =
    new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Los_Angeles' }).format(now);
  document.getElementById('clock-ct').textContent =
    new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Chicago' }).format(now);
  document.getElementById('clock-et').textContent =
    new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(now);
  document.getElementById('clock-rome').textContent =
    new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Rome' }).format(now);
}

setInterval(updateClocks, 1000);
updateClocks();

// --- Tab switching ---
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const cursors = document.querySelectorAll('.cursor');
  cursors.forEach(c => c.style.display = 'none');

  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';
}

// --- Chat window toggle & close ---
const chatWindow = document.getElementById("chatbot-window");
const chatbox = document.getElementById("chatbox");

// --- Contact form elements ---
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const contactForm = document.getElementById("contactForm");

document.getElementById("close-chat").addEventListener("click", () => {
  disintegrate(chatWindow, () => {
    chatbox.innerHTML = "";
    chatWindow.style.display = "none";
    chatWindow.style.visibility = "visible"; // Reset for next time
  });
});

function toggleChat() {
  if (chatWindow.style.display === "flex") {
    chatWindow.style.display = "none";
  } else {
    chatbox.innerHTML = "";
    chatWindow.style.display = "flex";
    chatWindow.style.visibility = "visible"; // Ensure visible if previously disintegrated
    chatWindow.style.opacity = "1";
  }
}

// --- Send chat messages ---
async function sendChat() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();

  if (!message) return;
  if (message.length > 150) { alert("Your message is too long. Please keep it under 150 characters."); return; }
  if (containsProfanity(message)) { alert("Your message contains inappropriate language."); return; }

  chatbox.innerHTML += `<div class="chat-message user-message"><strong>User:</strong> ${message}</div>`;
  input.value = '';
  //"https://mrme77githubio-backend.vercel.app/chat",
  try {
    // Production URL
    const response = await fetch("https://mrme77githubio-backend.vercel.app/chat", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message })
    });

    const data = await response.json();
    chatbox.innerHTML += `<div class="chat-message bot-message"><strong>Pasquale-AI:</strong> ${data.reply || "Sorry, no response received."}</div>`;
  } catch (err) {
    chatbox.innerHTML += `<div class="chat-message bot-message"><strong>Pasquale-AI:</strong> Error connecting to server.</div>`;
  }

  chatbox.scrollTop = chatbox.scrollHeight;
}

// --- Contact form handling ---
// Show contact form function (called by card onclick)
function toggleContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm.style.display === "none" || contactForm.style.display === "") {
    contactForm.style.display = "flex";
    setTimeout(() => contactForm.classList.add("show"), 50);
    contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    contactForm.classList.remove("show");
    setTimeout(() => contactForm.style.display = "none", 400);
  }
}

// Old button listener removed
// showFormBtn.addEventListener("click", ...);

// Character counter
if (messageBox) {
  messageBox.addEventListener("input", () => {
    charCount.textContent = `${messageBox.value.length} / 255`;
  });
}

// Handle contact form submit
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: messageBox ? messageBox.value.trim() : ""
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
      // showFormBtn.style.display = "inline-block"; // Button removed
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Could not connect to the server.");
  }
});

// function updateClocks() {
//   const now = new Date();
//   const options = {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false,
//   };
//   document.getElementById('clock-pt').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Los_Angeles' }).format(now);

//   document.getElementById('clock-ct').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/Chicago' }).format(now);

//   document.getElementById('clock-et').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(now);

//   document.getElementById('clock-rome').textContent =
//     new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'Europe/Rome' }).format(now);

//   }

// setInterval(updateClocks, 1000);
// updateClocks();

// function showTab(tabId) {
//   // Show the correct tab content
//   const tabs = document.querySelectorAll('.tab');
//   tabs.forEach(tab => tab.classList.remove('active'));
//   document.getElementById(tabId).classList.add('active');

//   // Move the blinking cursor to the selected tab
//   const cursors = document.querySelectorAll('.cursor');
//   cursors.forEach(c => c.style.display = 'none');

//   const activeCursor = document.getElementById('cursor-' + tabId);
//   if (activeCursor) activeCursor.style.display = 'inline-block';
// }
// function toggleChat() {
//   const chatWindow = document.getElementById("chatbot-window");
//   chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
// }

// async function sendChat() {
//   const input = document.getElementById("chat-input");
//   const message = input.value.trim();
//   if (!message) return;

//   const chatbox = document.getElementById("chatbox");
//   chatbox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
//   input.value = '';

//   const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       'Authorization': 'Bearer YOUR_OPENROUTER_API_KEY',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: "openai/gpt-3.5-turbo",
//       messages: [{ role: "user", content: message }]
//     })
//   });

//   const data = await response.json();
// --- Disintegration Effect ---
function disintegrate(element, callback) {
  // Use html2canvas to capture the element
  html2canvas(element, {
    backgroundColor: null,
    scale: 1,
    logging: false,
    useCORS: true
  }).then(canvas => {
    const rect = element.getBoundingClientRect();

    // Create a container for particles
    const container = document.createElement('div');
    container.classList.add('dust-container');
    container.style.left = `${rect.left}px`;
    container.style.top = `${rect.top}px`;
    container.style.width = `${rect.width}px`;
    container.style.height = `${rect.height}px`;
    document.body.appendChild(container);

    // Hide the original element
    element.style.visibility = 'hidden';

    // Create particles
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const pixelData = ctx.getImageData(0, 0, width, height).data;

    // Reduction factor for performance (higher = fewer particles)
    const reduction = 10;

    const fragment = document.createDocumentFragment();

    for (let x = 0; x < width; x += reduction) {
      for (let y = 0; y < height; y += reduction) {
        const i = (y * width + x) * 4;
        // Check alpha to skip transparent pixels
        if (pixelData[i + 3] > 0) {
          const particle = document.createElement('div');
          particle.classList.add('dust-particle');

          // Position relative to container
          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          particle.style.width = `${reduction}px`;
          particle.style.height = `${reduction}px`;

          // Color from pixel
          particle.style.backgroundColor = `rgba(${pixelData[i]}, ${pixelData[i + 1]}, ${pixelData[i + 2]}, ${pixelData[i + 3] / 255})`;

          // Random animation values
          // Drift mostly up and right/left
          const tx = (Math.random() - 0.5) * 200;
          const ty = (Math.random() - 1) * 200;
          const r = (Math.random() - 0.5) * 720;

          particle.style.setProperty('--tx', `${tx}px`);
          particle.style.setProperty('--ty', `${ty}px`);
          particle.style.setProperty('--r', `${r}deg`);

          // Random delay for organic feel
          const delay = Math.random() * 0.3;
          particle.style.animation = `disperse 1s cubic-bezier(0.25, 0.8, 0.25, 1) ${delay}s forwards`;

          fragment.appendChild(particle);
        }
      }
    }

    container.appendChild(fragment);

    // Cleanup
    setTimeout(() => {
      container.remove();
      if (callback) callback();
    }, 1500);
  }).catch(err => {
    console.error("Disintegration failed:", err);
    // Fallback if html2canvas fails
    if (callback) callback();
  });
}
