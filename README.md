# 🌐 mrme77.github.io

Welcome to my personal portfolio website — a terminal-inspired, responsive portfolio showcasing my work in **AI, Data Science, and Web Development**.

🔗 **Live Site:** [mrme77.github.io](https://mrme77.github.io)

---

## ✨ Features

- 🖥️ **Terminal Aesthetic** — Cyberpunk-inspired green-on-black design with monospace fonts
- 📑 **Tabbed Navigation** — Bio, Blog, Projects, and Contact sections with smooth transitions
- 🎨 **Dynamic Backgrounds** — Particle network animation on Contact page
- 🤖 **AI Chatbot** — Interactive chatbot powered by OpenRouter AI with conversation history
- 💬 **Contact Form** — Integrated message system with character counter and validation
- ⏰ **World Clocks** — Real-time display for PT, CT, ET, and Rome timezones
- 🎭 **Disintegration Effects** — Particle-based close animations for modals
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- ✨ **Polished Interactions** — Hover effects, smooth animations, and fade-in transitions

---

## 🚀 Why This Project Exists  

I wanted a home base online — a place that reflects both my **web dev experiments** and my **AI/Data Science journey**.  
This site is part portfolio, part playground. It keeps me hands-on with front-end dev while telling my story in tech.  

---

## 📂 Repo Structure

```bash
.
├── index.html      # Main HTML structure
├── style.css       # Terminal-themed styling and animations
├── script.js       # Interactive features (chatbot, particle network, tabs)
├── assets/         # Images and banners
│   ├── bioimage.jpg
│   └── neon_world_map.png
└── README.md       # You're reading it!
```

---

## 🛠️ How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/mrme77/mrme77.github.io.git
   cd mrme77.github.io
   ```

2. Open `index.html` in your browser — that's it! 🚀

3. Click the navigation tabs to explore different sections

4. Try the chatbot (👽 icon in bottom right) to ask questions about me

---

## 🎨 Technical Highlights

### Particle Network Animation
- Canvas-based particle system with dynamic connections
- 50 floating nodes that form/break links based on proximity
- Optimized for smooth 60fps performance

### AI Chatbot Integration
- Powered by OpenRouter API
- Maintains conversation history (last 10 messages)
- Profanity filtering and character limits
- Custom disintegration close animation

### Typography & Design
- IBM Plex Mono font for authentic terminal feel
- Optimized line-height (1.7) for readability
- Responsive font sizing (15px-19px across devices)
- Smooth hover effects with glow and underline animations

---

## 🌱 What's Next

- ✅ ~~Polish design with animations and transitions~~ (Completed!)
- ✅ ~~Add interactive features~~ (Chatbot & particle effects added!)
- 🔄 Expand blog with more technical articles
- 🔄 Add more AI/ML project showcases
- 🔄 Implement theme switcher (alternative color schemes)

---

## 🛠️ Customization

### For Your Own Portfolio

1. **Content**: Edit `index.html` to update bio, projects, and blog entries
2. **Styling**: Modify `style.css` to change colors, fonts, or layout
3. **Animations**: Adjust particle count, speed, and connection distance in `script.js`
4. **Assets**: Replace images in `assets/` folder with your own banners
5. **Backend**: Update API endpoints in `script.js` for your own chatbot/contact form

### Key Configuration Variables

```javascript
// Particle Network (script.js)
this.particleCount = 50;              // Number of particles
this.connectionDistance = 150;         // Max connection distance
this.particles[i].vx = 0.5;           // Particle speed

// Chatbot (script.js)
const PROFANITY_LIST = [...];         // Custom filter words
history.length > 10                   // Message history limit
```

---

## 📚 Credits

**Created by:** [Pasquale Salomone](https://www.linkedin.com/in/pasquale-salomone/)
**Inspired by:** [@ericmjl](https://github.com/ericmjl)
**Font:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) by IBM
**AI Integration:** OpenRouter API

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
