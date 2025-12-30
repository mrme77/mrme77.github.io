console.log('script.js loaded successfully!');

// --- Profanity list & function ---
const PROFANITY_LIST = ["badword1", "badword2", "badword3"];

function containsProfanity(text) {
  const lower = text.toLowerCase();
  return PROFANITY_LIST.some(word => lower.includes(word));
}

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
let particleNetworkInstances = {
  'contact-me': null
};

function showTab(tabId) {
  console.log('showTab called with:', tabId);

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  const cursors = document.querySelectorAll('.cursor');
  cursors.forEach(c => c.style.display = 'none');

  const activeCursor = document.getElementById('cursor-' + tabId);
  if (activeCursor) activeCursor.style.display = 'inline-block';

  // Initialize Particle Network ONLY for contact-me section
  const canvasMap = {
    'contact-me': 'matrix-canvas'
  };

  if (canvasMap[tabId] && !particleNetworkInstances[tabId]) {
    console.log(`Initializing Particle Network for ${tabId}...`);
    setTimeout(() => {
      particleNetworkInstances[tabId] = new ParticleNetwork(canvasMap[tabId]);
    }, 100);
  }
}


// --- Chat window toggle & close ---
const chatWindow = document.getElementById("chatbot-window");
const chatbox = document.getElementById("chatbox");

// --- Chat History State ---
let chatHistory = [];

// --- Conversation Logging State ---
let conversationSession = {
  sessionId: null,
  userLocation: null,
  messages: [],
  startTime: null
};

// Generate a random session ID
function generateSessionId() {
  return 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
}

// Get anonymized location data
async function getAnonymizedLocation() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    // Only store city, region, country - NO IP address
    return {
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      timezone: data.timezone || 'Unknown'
    };
  } catch (err) {
    // Silent failure - return unknown location
    return {
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      timezone: 'Unknown'
    };
  }
}

// Initialize conversation session
async function initConversationSession() {
  if (!conversationSession.sessionId) {
    conversationSession.sessionId = generateSessionId();
    conversationSession.startTime = new Date().toISOString();
    conversationSession.userLocation = await getAnonymizedLocation();
  }
}

// Strip PII from text (email addresses, phone numbers, names in common patterns)
function stripPII(text) {
  if (!text) return text;

  let cleaned = text;

  // Remove email addresses
  cleaned = cleaned.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[EMAIL_REMOVED]');

  // Remove phone numbers (various formats)
  cleaned = cleaned.replace(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g, '[PHONE_REMOVED]');

  // Remove SSN-like patterns
  cleaned = cleaned.replace(/\d{3}-\d{2}-\d{4}/g, '[SSN_REMOVED]');

  // Remove credit card-like patterns
  cleaned = cleaned.replace(/\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}/g, '[CC_REMOVED]');

  return cleaned;
}

// Save conversation to backend
async function saveConversation() {
  // Don't save if no messages
  if (conversationSession.messages.length === 0) {
    return;
  }

  try {
    const conversationData = {
      sessionId: conversationSession.sessionId,
      location: conversationSession.userLocation,
      startTime: conversationSession.startTime,
      endTime: new Date().toISOString(),
      messages: conversationSession.messages.map(msg => ({
        role: msg.role,
        content: stripPII(msg.content), // Strip PII from message content
        timestamp: msg.timestamp
      }))
    };

    // Send to backend - silent failure if it doesn't work
    await fetch('https://mrme77githubio-backend.vercel.app/save-conversation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conversationData)
    });
  } catch (err) {
    // Silent failure - don't alert user, just log to console
    console.log('Conversation save failed silently:', err);
  }
}

// --- Contact form elements ---
const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");
const contactForm = document.getElementById("contactForm");

document.getElementById("close-chat").addEventListener("click", async () => {
  // Save conversation before closing
  await saveConversation();

  disintegrate(chatWindow, () => {
    chatbox.innerHTML = "";
    chatWindow.style.display = "none";
    chatWindow.style.visibility = "visible"; // Reset for next time
    chatHistory = []; // Clear history on close

    // Reset conversation session for next chat
    conversationSession = {
      sessionId: null,
      userLocation: null,
      messages: [],
      startTime: null
    };
  });
});

document.getElementById("chat-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendChat();
  }
});

async function toggleChat() {
  if (chatWindow.style.display === "flex") {
    chatWindow.style.display = "none";
  } else {
    // Initialize conversation session when chat is opened
    await initConversationSession();

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

  // Ensure session is initialized
  await initConversationSession();

  // Add user message to UI
  chatbox.innerHTML += `<div class="chat-message user-message"><strong>User:</strong> ${message}</div>`;
  input.value = '';
  chatbox.scrollTop = chatbox.scrollHeight;

  // Track user message in conversation session
  conversationSession.messages.push({
    role: "user",
    content: message,
    timestamp: new Date().toISOString()
  });

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

    // Track bot message in conversation session
    conversationSession.messages.push({
      role: "assistant",
      content: botReply,
      timestamp: new Date().toISOString()
    });

    // Update History
    chatHistory.push({ role: "user", content: message });
    chatHistory.push({ role: "assistant", content: botReply });

    // Limit history to last 10 messages (5 turns)
    if (chatHistory.length > 10) {
      chatHistory = chatHistory.slice(chatHistory.length - 10);
    }

  } catch (err) {
    const errorMsg = "Error connecting to server.";
    chatbox.innerHTML += `<div class="chat-message bot-message"><strong>Maestro-AI:</strong> ${errorMsg}</div>`;

    // Track error message too
    conversationSession.messages.push({
      role: "assistant",
      content: errorMsg,
      timestamp: new Date().toISOString()
    });
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
  disintegrate(contactForm, () => {
    contactForm.classList.remove("show");
    contactForm.style.display = "none";
    contactForm.style.visibility = "visible"; // Reset for next time
    contactForm.reset(); // Clear the form
    charCount.textContent = "0 / 255"; // Reset character counter
  });
});



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
    } else {
      alert("Error sending message. Please try again.");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Could not connect to the server.");
  }
});

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
        vx: (Math.random() - 0.5) * 0.5, // Velocity X (slowed down further)
        vy: (Math.random() - 0.5) * 0.5, // Velocity Y (slowed down further)
        radius: Math.random() * 2 + 1
      });
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;

    // Ensure canvas fills the entire parent section
    this.canvas.width = parent.offsetWidth || window.innerWidth;
    this.canvas.height = parent.offsetHeight || window.innerHeight;

    console.log('Canvas resized:', {
      width: this.canvas.width,
      height: this.canvas.height,
      parentWidth: parent.offsetWidth,
      parentHeight: parent.offsetHeight
    });

    // Recreate particles on resize
    this.createParticles();
  }

  draw() {
    // Less blur - faster fade for cleaner particles
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
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
      this.ctx.fillStyle = '#e0e0e0';
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
          this.ctx.strokeStyle = `rgba(224, 224, 224, ${opacity * 0.5})`;
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


// --- Generic Pagination Logic ---
function setupPagination(listId, controlsId, itemsPerPage = 3) {
  const listContainer = document.getElementById(listId);
  const controlsContainer = document.getElementById(controlsId);

  if (!listContainer || !controlsContainer) return;

  const items = Array.from(listContainer.getElementsByClassName('blog-entry'));
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;

    // Calculate range
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Show/Hide items
    items.forEach((item, index) => {
      if (index >= start && index < end) {
        item.style.display = 'flex'; // Use flex as per CSS
      } else {
        item.style.display = 'none';
      }
    });

    // Update active button
    updateControls();
  }

  function updateControls() {
    controlsContainer.innerHTML = '';

    // Previous Button
    if (totalPages > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.textContent = '<';
      prevBtn.className = 'pagination-btn';
      if (currentPage === 1) prevBtn.disabled = true;
      prevBtn.onclick = () => showPage(currentPage - 1);
      controlsContainer.appendChild(prevBtn);
    }

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = 'pagination-btn';
      if (i === currentPage) btn.classList.add('active');
      btn.onclick = () => showPage(i);
      controlsContainer.appendChild(btn);
    }

    // Next Button
    if (totalPages > 1) {
      const nextBtn = document.createElement('button');
      nextBtn.textContent = '>';
      nextBtn.className = 'pagination-btn';
      if (currentPage === totalPages) nextBtn.disabled = true;
      nextBtn.onclick = () => showPage(currentPage + 1);
      controlsContainer.appendChild(nextBtn);
    }
  }

  // Initial render
  if (items.length > 0) {
    showPage(1);
  }
}

// Initialize pagination for both sections
function initPaginations() {
  setupPagination('project-list', 'pagination-controls', 3);
  setupPagination('medium-list', 'medium-pagination-controls', 3);
}

document.addEventListener('DOMContentLoaded', initPaginations);
// Hot module replacement support
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initPaginations();
  startFloatingAlien();
} else {
  // If we hook into DOMContentLoaded elsewhere, ensure this is called too
  document.addEventListener('DOMContentLoaded', startFloatingAlien);
}

// --- Floating Alien Logic ---
function startFloatingAlien() {
  const icon = document.getElementById('chatbot-icon');
  const chatWindow = document.getElementById("chatbot-window");

  if (!icon) return;

  let floatInterval;
  let isHovering = false;

  // Function to move the alien to a random position
  function moveAlien() {
    // If chat is open or user is hovering, don't move
    if (isHovering || (chatWindow && chatWindow.style.display === 'flex')) return;

    const pad = 25; // padding from edges
    const iconWidth = icon.offsetWidth || 50;
    const iconHeight = icon.offsetHeight || 50;

    // Bounds
    const maxX = window.innerWidth - iconWidth - pad;
    const maxY = window.innerHeight - iconHeight - pad;

    // Random coord within safe bounds
    const newX = Math.max(pad, Math.floor(Math.random() * maxX));
    const newY = Math.max(pad, Math.floor(Math.random() * maxY));

    icon.style.left = `${newX}px`;
    icon.style.top = `${newY}px`;
    // Ensure bottom/right are auto so left/top take precedence
    icon.style.bottom = 'auto';
    icon.style.right = 'auto';
  }

  // Initialize position from CSS (bottom-right) to JS (top-left absolute)
  // This allows us to transition smoothly from the initial CSS position
  const rect = icon.getBoundingClientRect();
  icon.style.left = `${rect.left}px`;
  icon.style.top = `${rect.top}px`;
  icon.style.bottom = 'auto';
  icon.style.right = 'auto';

  // Start the loop
  // First move after a delay to let user see it in the corner initially
  setTimeout(() => {
    moveAlien(); // First move
    // Set interval for subsequent moves (4s matches CSS transition)
    floatInterval = setInterval(moveAlien, 5000);
  }, 2000);

  // Interaction handlers
  icon.addEventListener('mouseenter', () => {
    isHovering = true;
    // Scale up slightly to indicate interactivity
    icon.style.transform = "scale(1.1)";
  });

  icon.addEventListener('mouseleave', () => {
    isHovering = false;
    icon.style.transform = "scale(1)";
    // Optionally resume immediately or just wait for next tick
  });

  // Handle window resize to keep alien on screen
  window.addEventListener('resize', () => {
    const r = icon.getBoundingClientRect();
    if (r.right > window.innerWidth) {
      icon.style.left = `${window.innerWidth - r.width - 25}px`;
    }
    if (r.bottom > window.innerHeight) {
      icon.style.top = `${window.innerHeight - r.height - 25}px`;
    }
  });
}
