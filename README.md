# 🗓️ Day Planner

A clean, minimal day planner built with React. Plan your day visually using a timeline with color-coded time blocks, icons, and real-time task tracking.

🔗 **Live Demo** → [https://anjumhere.github.io/Task-Planner-React/](https://anjumhere.github.io/Task-Planner-React/)

---

## ✨ Features

- **Visual Timeline** — Vertical timeline with colored blocks representing each event, synced with task cards
- **Task Cards** — Each card displays event title, time range, duration, and completion state
- **Create Events** — Modal form to add events with custom title, start/end time, icon, and color
- **12-Hour Time Format** — Times are displayed in AM/PM format
- **Duration Display** — Automatically calculates and shows event duration (e.g. `1h 30m`)
- **Completion Toggle** — Check off tasks with a strikethrough and fade effect
- **Color Coding** — Each event has its own color reflected in both the timeline block and task card
- **Icon Support** — Choose from 8 icons per event, rendered inside the timeline block

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI framework |
| Tailwind CSS | Styling and layout |
| Material UI | Checkbox component |
| Remix Icons | Timeline and UI icons |
| Vite | Build tool |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ModalComponents/
│   │   └── Modal.jsx          # Event creation form
│   ├── TaskComponents/
│   │   ├── Tasks.jsx          # Individual task card
│   │   └── RenderTasks.jsx    # Task list renderer
│   └── TimeLineComponent/
│       └── TimeLine.jsx       # Vertical timeline with colored blocks
├── App.jsx                    # Root component, state management
└── main.jsx                   # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anjumhere/Task-Planner-React.git

# Navigate into the project
cd Task-Planner-React

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎮 How to Use

1. Open the app — you'll see a vertical timeline and an empty task area
2. Click **+ Create Event** at the bottom
3. Fill in:
   - **Event Name** — e.g. "Deep Work Session"
   - **Start Time** and **End Time**
   - **Icon** — choose from 8 options
   - **Color** — pick from 8 color swatches
4. Click **Add Event** — the event appears as a card with a matching colored block on the timeline
5. Check the checkbox to mark an event as done — the card fades and the title gets a strikethrough

---

## 🎨 Design System

The app uses CSS custom properties for consistent theming:

```css
--color-bg              /* main background */
--color-card            /* card and block background */
--color-border          /* borders and dividers */
--color-text-primary    /* white text */
--color-text-secondary  /* muted grey text */
--color-text-muted      /* very subtle text */
```

---

## 📌 Roadmap

- [ ] Time draining animation on timeline blocks
- [ ] Persist events with localStorage
- [ ] Drag to reorder events
- [ ] Delete and edit events
- [ ] Daily summary at end of timeline
- [ ] Mobile responsive layout

---

## 👨‍💻 Author

Built by **Anjum**
[GitHub](https://github.com/anjumhere)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
