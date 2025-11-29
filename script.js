console.log('script.js loaded successfully!');

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
let particleNetworkInstance = null;

function showTab(tabId) {
  console.log('showTab called with:', tabId);

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const cursors = document.querySelectorAll('.cursor');
  cursors.forEach(c => c.style.display = 'none');

  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';

  // Initialize Particle Network when switching to contact tab
  if (tabId === 'contact-me') {
    console.log('Contact tab activated, particleNetworkInstance exists?', !!particleNetworkInstance);
    if (!particleNetworkInstance) {
      console.log('Initializing Particle Network...');
      setTimeout(() => {
        particleNetworkInstance = new ParticleNetwork('matrix-canvas');
      }, 100);
    }
  }
}


// --- Chat window toggle & close ---
const chatWindow = document.getElementById("chatbot-window");
const chatbox = document.getElementById("chatbox");

// --- Chat History State ---
let chatHistory = [];

// --- Contact form elements ---
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const contactForm = document.getElementById("contactForm");

document.getElementById("close-chat").addEventListener("click", () => {
  disintegrate(chatWindow, () => {
    chatbox.innerHTML = "";
    chatWindow.style.display = "none";
    chatWindow.style.visibility = "visible"; // Reset for next time
    chatHistory = []; // Optional: Clear history on close? Or keep it? Let's keep it for now.
  });
});

document.getElementById("chat-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendChat();
  }
});

function toggleChat() {
  if (chatWindow.style.display === "flex") {
    chatWindow.style.display = "none";
  } else {
    // Don't clear chatbox if we want to preserve state visually too, 
    // but the original code cleared it. Let's keep the visual clear but maybe restore history?
    // For now, let's just show the window.
    // chatbox.innerHTML = ""; // Removed clearing to keep visual history if just toggling
    chatWindow.style.display = "flex";
    chatWindow.style.visibility = "visible";
    chatWindow.style.opacity = "1";

    // If chatbox is empty but we have history, maybe re-render? 
    // For simplicity, we assume the user just minimized it.
    if (chatbox.innerHTML === "" && chatHistory.length > 0) {
      chatHistory.forEach(msg => {
        const className = msg.role === 'user' ? 'user-message' : 'bot-message';
        const sender = msg.role === 'user' ? 'User' : 'Maestro-AI';
        chatbox.innerHTML += `<div class="chat-message ${className}"><strong>${sender}:</strong> ${msg.content}</div>`;
      });
    }
  }
}

// --- Send chat messages ---
async function sendChat() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();

  if (!message) return;
  if (message.length > 150) { alert("Your message is too long. Please keep it under 150 characters."); return; }
  if (containsProfanity(message)) { alert("Your message contains inappropriate language."); return; }

  // Add user message to UI
  chatbox.innerHTML += `<div class="chat-message user-message"><strong>User:</strong> ${message}</div>`;
  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;

  try {
    // Production URL
    const response = await fetch("https://mrme77githubio-backend.vercel.app/chat", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: message,
        history: chatHistory // Send previous history
      })
    });

    const data = await response.json();
    const botReply = data.reply || "Sorry, no response received.";

    // Add bot message to UI
    chatbox.innerHTML += `<div class="chat-message bot-message"><strong>Maestro-AI:</strong> ${botReply}</div>`;

    // Update History
    chatHistory.push({ role: "user", content: message });
    chatHistory.push({ role: "assistant", content: botReply });

    // Limit history to last 10 messages (5 turns)
    if (chatHistory.length > 10) {
      chatHistory = chatHistory.slice(chatHistory.length - 10);
    }

  } catch (err) {
    chatbox.innerHTML += `<div class="chat-message bot-message"><strong>Maestro-AI:</strong> Error connecting to server.</div>`;
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

// Close button for contact form
document.getElementById("close-contact-form").addEventListener("click", () => {
  const contactForm = document.getElementById("contactForm");
  contactForm.classList.remove("show");
  setTimeout(() => contactForm.style.display = "none", 400);
});

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

// --- Particle Network Effect for Contact Section ---
class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error('Canvas not found:', canvasId);
      return;
    }

    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();

    this.particles = [];
    this.particleCount = 50; // Number of particles
    this.connectionDistance = 150; // Max distance for connections
    this.mouse = { x: null, y: null, radius: 100 };

    // Create particles
    this.createParticles();

    console.log('Particle Network initialized:', {
      width: this.canvas.width,
      height: this.canvas.height,
      particles: this.particleCount
    });

    // Bind resize handler
    window.addEventListener('resize', () => this.resizeCanvas());

    // Start animation
    this.animate();
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Velocity X
        vy: (Math.random() - 0.5) * 0.5, // Velocity Y
        radius: Math.random() * 2 + 1
      });
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.offsetWidth;
    this.canvas.height = parent.offsetHeight;

    console.log('Canvas resized:', {
      width: this.canvas.width,
      height: this.canvas.height
    });

    // Recreate particles on resize
    this.createParticles();
  }

  draw() {
    // Clear canvas with transparent black
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

      // Keep within bounds
      particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

      // Draw particle
      this.ctx.fillStyle = '#33ff33';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();

      // Draw connections to nearby particles
      for (let j = index + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = 1 - (distance / this.connectionDistance);
          this.ctx.strokeStyle = `rgba(51, 255, 51, ${opacity * 0.5})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      }
    });
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}
