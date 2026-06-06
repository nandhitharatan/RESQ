<div align="center">

<img src="assets/logo.png" alt="RESQ Logo" width="110" height="110" style="border-radius:20px"/>

# RESQ — Interactive Digital First-Aid Assistant

### *"In an emergency, every second counts."*

[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)](.)
[![SDG 3](https://img.shields.io/badge/SDG%203-Good%20Health%20%26%20Well--being-4C9F38?style=for-the-badge)](.)
[![SDG 4](https://img.shields.io/badge/SDG%204-Quality%20Education-C5192D?style=for-the-badge)](.)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](.)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](.)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](.)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](.)

**Team Phoenix** | EPL '26 | Stanley College of Engineering | Med Mavericks Track | Problem Code: MM-01-S2

[Nandhitha Ratan](.) · [Shikha Maity](.) · [Sree Vidhya](.)

</div>

---
<div align="center">
<a href="#">🚀 Live Demo</a> · <a href="#final-gallery">📸 Screenshots</a> · <a href="#installation-guide">🛠 Installation</a> · <a href="#visual-architecture">🗺 Architecture</a>
</div>

## 📋 Table of Contents

<a href="#product-overview">Product Overview</a> •
<a href="#un-sdg-global-impact">UN SDG Global Impact</a> •
<a href="#key-features">Key Features</a> •
<a href="#tech-stack">Tech Stack</a> •
<a href="#visual-architecture">Visual Architecture</a> •
<a href="#installation-guide">Installation Guide</a> •
<a href="#module-reference">Module Reference</a> •
<a href="#error-handling--resilience">Error Handling</a> •
<a href="#final-gallery">Final Gallery</a> •
<a href="#4-week-development-journey">4-Week Journey</a> •
<a href="#team">Team</a>

---

## 🩺 Product Overview

**RESQ** is a browser-based, multilingual, interactive first-aid assistant that guides anyone through a medical emergency in real time — with zero installation, zero account, and zero medical background required.

Most people in India freeze during emergencies because nobody ever taught them what to do. The resources that exist are English-only, text-heavy, and assume calm — which is exactly the opposite of what an emergency looks like. In rural areas, the nearest hospital can be an hour away or more, making home-level first response genuinely life-or-death.

RESQ fills that gap:

- **Speaks your language** — full support for English, Telugu, and Hindi
- **Voice-first** — speak your problem instead of typing during a panic
- **Culturally grounded** — Indian home remedies (turmeric, aloe vera, neem) alongside clinical steps
- **Covers 20 emergencies** — from burns and cuts to cardiac arrest, stroke, snake bite, and more
- **Works anywhere** — opens in any browser, no install, no account, no internet required for core guidance

> Built for the general public, rural communities, students, and anyone caught in an emergency with no idea what to do.

---

## 🌍 UN SDG Global Impact

### SDG 3 — Good Health & Well-being

In India, most people freeze during emergencies simply because nobody taught them what to do. Existing resources are English-only and assume calm — the opposite of what an emergency looks like. RESQ gives anyone instant step-by-step first aid in their own language the moment something goes wrong. The severity checker stops panic-driven mistakes, the one-tap 108 call removes friction, and the real-time hospital finder means help is never more than a few seconds away.

### SDG 4 — Quality Education

First aid is one of the most important life skills a person can have, yet Indian schools completely ignore it. For people in remote villages where the nearest hospital can be hours away, knowing first aid isn't a bonus — it's survival. RESQ fills that gap with voice guidance in Telugu and Hindi, Indian home remedies using what's already in their kitchens, and step-by-step instructions anyone can follow without a medical background.
> **RESQ doesn't just respond to emergencies. It educates communities to handle them — bridging the gap between health and knowledge, one user at a time.**

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🩹 **Injury Selector** | Visual menu — pick from 20 emergency types instantly |
| 🎙️ **Voice Input** | Speak in Telugu or Hindi — no typing needed during a panic |
| 🌿 **Indian Home Remedies** | Turmeric, aloe vera, neem-based suggestions alongside standard care |
| 📊 **Severity Checker** | 4-question scoring system — classifies Mild / Moderate / Severe |
| 🏥 **Hospital Finder** | Real-time GPS map, sorted by proximity, with phone numbers |
| 📞 **One-Tap 108 Call** | Direct emergency dial — zero friction |
| 🔊 **Read Aloud (TTS)** | Full voice playback of every step in the selected language |
| 🔍 **Smart NLP Search** | Type or describe symptoms — intelligent keyword matching |
| 🌐 **3-Language UI** | Every screen, label, and message available in EN / TE / HI |

---

## 🛠 Tech Stack

| Technology | Role | Why We Chose It |
|---|---|---|
| **HTML5** | App structure | Universal, runs on any browser, zero installation |
| **CSS3** | Styling & layout | Clean, panic-friendly UI with smooth animations |
| **JavaScript (ES6)** | All app logic | Runs directly in browser — no server needed |
| **Bootstrap 5** | Responsive design | Auto-adjusts for mobile; large tappable buttons |
| **Web Speech API** | Voice input + TTS | Built into modern browsers; supports Telugu & Hindi |
| **Leaflet.js** | Interactive map | Lightweight, open-source, no API key |
| **OpenStreetMap** | Map tiles | Free, community-maintained, zero cost |
| **Overpass API** | Hospital search | Queries real hospitals within 5km — no billing risk |

> **Note on Google Maps:** The original proposal listed Google Maps API. During development we replaced it — Google Maps requires a paid API key and has quota limits that could fail mid-demo. Our open-source stack (Leaflet + OSM + Overpass) is completely free, has no limits, and is actually more customizable.

---

## 🗺 Visual Architecture

### System Block Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        USER DEVICE                          │
│                   (Any Modern Browser)                      │
└───────────────────────────┬─────────────────────────────────┘
                            │
                    ┌───────▼────────┐
                    │   index.html   │  ← Entry point
                    │  (108 lines)   │
                    └───────┬────────┘
                            │  loads in order
          ┌─────────────────┼──────────────────────┐
          │                 │                      │
    ┌─────▼──────┐   ┌──────▼──────┐   ┌──────────▼────────┐
    │  data.js   │   │ severity.js │   │    voice.js        │
    │            │   │             │   │                    │
    │ All injury │   │ 4 questions │   │ Web Speech API     │
    │ data EN/   │   │ per injury  │   │ Voice Input (STT)  │
    │ TE / HI    │   │ Score 0-2   │   │ Read Aloud (TTS)   │
    │ UI strings │   │ Mild/Mod/   │   │ EN / TE / HI       │
    └────────────┘   │ Severe      │   └────────────────────┘
                     └─────────────┘
          ┌─────────────────┼──────────────────────┐
          │                 │                      │
    ┌─────▼──────┐   ┌──────▼──────┐   ┌──────────▼────────┐
    │  search.js │   │   maps.js   │   │     app.js         │
    │            │   │             │   │                    │
    │ NLP filter │   │ GPS locate  │   │ Screen manager     │
    │ 20 groups  │   │ Leaflet map │   │ Language switcher  │
    │ EN/TE/HI   │   │ Overpass    │   │ Step renderer      │
    │ keywords   │   │ Haversine   │   │ Severity trigger   │
    └────────────┘   │ Sort/cards  │   │ 108 call utility   │
                     └──────┬──────┘   └────────────────────┘
                            │
              ┌─────────────┼──────────────┐
              │             │              │
    ┌─────────▼──┐  ┌───────▼──────┐  ┌───▼────────────┐
    │ Device GPS │  │ OpenStreetMap│  │ Overpass API   │
    │ (Browser   │  │ (Map tiles)  │  │ (Hospital data │
    │  Geoloc.)  │  │ Free/no key  │  │  within 5km)   │
    └────────────┘  └──────────────┘  └────────────────┘
```

### App Screen Flow

```
┌──────────────┐     select      ┌──────────────┐     tap injury
│ LANGUAGE     │────────────────►│ HOME SCREEN  │──────────────┐
│ SCREEN       │                 │              │              │
│ EN / TE / HI │◄────────────────│ Injury list  │              ▼
└──────────────┘    goHome()     │ Search bar   │     ┌────────────────┐
        ▲                        │ Voice FAB    │     │  STEP SCREEN   │
        │                        │ 108 button   │     │                │
        │           goHome()     └──────────────┘     │ Progress bar   │
        │◄──────────────────────────────────────────  │ Step N of M    │
        │                                             │ WHAT TO DO     │
        │                                             │ HOME REMEDY    │
        │                                             │ Read Aloud btn │
        │                                             │ Next Step btn  │
        │                                             └───────┬────────┘
        │                                                     │ last step
        │                                                     ▼
        │                                           ┌─────────────────┐
        │                                           │ SEVERITY SCREEN │
        │                                           │                 │
        │                                           │ 4 questions     │
        │                                           │ scored 0–2 each │
        │                                           └────────┬────────┘
        │                                                    │ submit
        │                            ┌───────────────────────┼───────────────┐
        │                            │                       │               │
        │                     ┌──────▼────┐          ┌───────▼────┐  ┌───────▼────┐
        │                     │  MILD 🟢  │          │MODERATE 🟡 │  │ SEVERE 🔴  │
        │◄────────────────────│ Back Home │          │ Back Home  │  │ Call 108   │
                              │ at home   │          │ or doctor  │  └─────┬──────┘
                              └───────────┘          └────────────┘        │
                                                                            ▼
                                                                   ┌────────────────┐
                                                                   │  MAP SCREEN    │
                                                                   │ GPS → Leaflet  │
                                                                   │ Overpass 5km   │
                                                                   │ Sorted by dist │
                                                                   │ ← back arrow   │
                                                                   └────────────────┘
```

### Back Navigation Reference

| Screen | Back Arrow (←) goes to | Notes |
|---|---|---|
| Home | Language screen | via `goHome()` → `showScreen('lang')` |
| Step screen | Home screen | stops TTS, resets step index |
| Severity screen | Step screen (last step) | ← header arrow |
| Map screen | Severity result | ← header arrow |

### Severity Scoring Logic

```
Total Score = Sum of all 4 answers (each 0, 1, or 2)
Max possible = 8

Score ≤ 2  (≤ 25%)  →  🟢 MILD      — Handle at home
Score ≤ 4  (≤ 60%)  →  🟡 MODERATE  — Monitor, visit doctor
Score > 4  (> 60%)  →  🔴 SEVERE    — Hospital / Call 108 now
```

---

## 💻 Installation Guide

RESQ requires **no build tools, no package manager, and no server**. It runs entirely in the browser.

### Prerequisites

- Any modern browser: Chrome (recommended), Firefox, Edge, or Safari
- Git installed on your machine
- For voice features: Chrome browser on desktop or Android

### Step 1 — Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/resq-first-aid.git
```

### Step 2 — Navigate into the Project

```bash
cd resq-first-aid
```

### Step 3 — Open the App

**Option A — Direct file open (simplest)**
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

**Option B — Local server (recommended for full GPS + voice features)**

Using Python (built into macOS/Linux):
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js:
```bash
npx serve .
```

Using VS Code Live Server extension:
```
Right-click index.html → Open with Live Server
```

Then open your browser and go to:
```
http://localhost:8000
```

### Step 4 — Grant Permissions

When prompted by the browser:
- **Allow Location Access** — required for the nearby hospital finder
- **Allow Microphone Access** — required for voice input in Telugu/Hindi

### File Structure

```
resq-first-aid/
│
├── index.html          ← Main entry point (108 lines)
├── style.css           ← All styling and layout
│
├── data.js             ← Injury data (EN/TE/HI) + UI translations
├── severity.js         ← Severity questions + scoring logic
├── voice.js            ← Web Speech API: voice input + Read Aloud
├── search.js           ← NLP keyword filter for injury search
├── maps.js             ← Leaflet map + Overpass hospital finder
├── app.js              ← Screen management + core app logic
│
├── assets/
│   ├── logo.png        ← RESQ logo
│   └── screenshots    
│
└── README.md           ← This file
```

### Browser Compatibility

| Browser | Voice Input | Read Aloud | Maps | Recommended |
|---|---|---|---|---|
| Chrome (desktop) | ✅ | ✅ | ✅ | ⭐ Best |
| Chrome (Android) | ✅ | ✅ | ✅ | ⭐ Best mobile |
| Firefox | ❌ | ✅ | ✅ | Good |
| Safari (iOS 16+) | ⚠️ Limited | ✅ | ✅ | Partial |
| Edge | ✅ | ✅ | ✅ | Good |

> Voice input requires Chrome. All other features work across all modern browsers.

---


## 🛡 Error Handling & Resilience

Five critical failure points identified and fixed during Week 3:

| # | Error | File | Type | Fix |
|---|---|---|---|---|
| 1 | Invalid injury index from voice match | `app.js` | Out-of-bounds | Boundary check in `startInjury()` — logs warning and stops instead of crashing |
| 2 | Browser popup blocker prevents hospital finder | `app.js` | Null window ref | Falls back to same-tab redirect — always opens |
| 3 | Microphone denied or network error during voice | `voice.js` | `onerror` | Shows "Mic blocked" / "Network error" on button; auto-resets after 2s |
| 4 | Text-to-speech not supported by browser | `voice.js` | Missing API | Null check on `window.speechSynthesis` + `currentInjury` guard |
| 5 | TTS voices not loaded on first call | `voice.js` | Race condition | `onvoiceschanged` callback waits for browser to finish loading voices |

---

## 📸 Final Gallery

### Language Selection Screen
*First screen — choose English, Telugu, or Hindi to continue.*

![Language Screen](assets/choose_lang.png)

---

### Home Screen — Injury Selector
*20 emergencies listed with icons. Search bar and voice FAB (red mic button) visible. Language switcher at the bottom.*

![Home Screen](assets/home.png)

---

### Voice Input Button
*Red floating mic button — tap to speak your emergency in Telugu, Hindi, or English.*

![Voice Button](assets/tap_to_speak.png)

---

### Step-by-Step First Aid — Full View
*Step 1 of 5 for Cardiac Arrest. Progress bar at top. "WHAT TO DO" and "INDIAN HOME REMEDY" cards. Read Aloud button. "Done → Next Step" bar at bottom.*

![Step Screen](assets/step_screen.png)



### Severity Checker — Questions
*4 targeted questions per injury type, each scored 0–2. Scroll to answer all before submitting.*

![Severity Screen](assets/severity_ques.png)

---

### Severity Result — Severe
*Score > 4/8 → 🔴 Severe. "Find Nearest Hospital" button opens the live map. "Back to Home" available.*

![Severity Result](assets/result.png)

---

### Nearby Hospital Map
*234 hospitals found in Hyderabad. Leaflet map with red markers. Sorted list below by distance — closest first. 108 button top-right.*

![Map Screen](assets/hospital_map.png)

---



## 🌿 20 Emergencies Covered

| # | Injury | # | Injury |
|---|---|---|---|
| 1 | 🔥 Burns | 11 | 🧠 Stroke |
| 2 | 🩸 Cuts | 12 | 💉 Anaphylaxis |
| 3 | 🦴 Fracture | 13 | 💔 Heart Attack |
| 4 | 😮 Choking | 14 | ⚡ Seizure |
| 5 | 🌡️ Fever | 15 | 🐍 Snake Bite |
| 6 | 🐝 Insect Sting | 16 | 🌞 Heat Stroke |
| 7 | 💧 Nosebleed | 17 | 🤰 Pregnancy Emergency |
| 8 | 🤕 Head Injury | 18 | 👶 Child Febrile Seizure |
| 9 | ❤️ Cardiac Arrest | 19 | ☠️ Poisoning |
| 10 | 🩸 Severe Bleeding | 20 | 😵 Fainting |

---

## 👩‍💻 Team

| Name | Role |
|---|---|
| **Nandhitha Ratan** | Team Lead |
| **Shikha Maity** | Developer |
| **Sree Vidhya** | Developer |

**Team Phoenix** | EPL '26 | Stanley College of Engineering | Med Mavericks Track | Code Crypt

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

*Built with ❤️ for EPL '26 | Stanley College of Engineering | Code Crypt*

*Dedicated to every person who has ever frozen in an emergency and wished they knew what to do.*

</div>
