# 📝 React Noter

A clean, minimal, and fully functional notes application built with **React.js**. Supports adding, deleting, and persisting notes across browser sessions using localStorage.

---

## 👨‍💻 Author

**Adnan Anjum**

---

## 🚀 Live Features

- ✅ Add notes with a title and details
- ✅ Delete individual notes
- ✅ Notes persist on page refresh via **localStorage**
- ✅ Responsive layout — works on mobile and desktop
- ✅ Clean dark UI with a modern design

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | UI & Component Architecture |
| useState | Local state management |
| useEffect | Side effects (localStorage sync) |
| localStorage | Data persistence |
| Tailwind CSS | Styling |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component — state, logic, and layout
└── components/
    ├── InputData.jsx        # Left panel — form to add notes
    └── Notes.jsx            # Right panel — displays all notes
```

---

## ⚙️ How It Works

### State Management
All state lives in `App.jsx` and is passed down to child components via **props**. This keeps the app predictable with a single source of truth.

```jsx
const [title, setTitle] = useState("");
const [details, setDetails] = useState("");
const [notes, setNotes] = useState([]);
```

### Adding a Note
When the user fills in the form and clicks **Add Note**, the `formHandler` function runs, pushes the new note into the array, and resets the inputs.

```jsx
const formHandler = (e) => {
  e.preventDefault();
  if (!title.trim()) return;
  setNotes([...notes, { title, details }]);
  setTitle("");
  setDetails("");
};
```

### Deleting a Note
Each note card has a **Delete** button that calls `deleteNote(index)`, which removes that specific note from the array.

```jsx
const deleteNote = (index) => {
  const copyTask = [...notes];
  copyTask.splice(index, 1);
  setNotes(copyTask);
};
```

### localStorage Persistence
Notes are saved to the browser's localStorage on every change using `useEffect`, and loaded back on app startup inside the `useState` initializer.

```jsx
// Load on startup
const [notes, setNotes] = useState(() => {
  const saved = localStorage.getItem("notes");
  return saved ? JSON.parse(saved) : [];
});

// Save on every change
useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes));
}, [notes]);
```

---

## 🧩 Component Breakdown

### `App.jsx`
The brain of the app. Owns all state and logic, and passes everything down as props.

**Passes to `InputData`:** `title`, `setTitle`, `details`, `setDetails`, `formHandler`

**Passes to `Notes`:** `notes`, `deleteNote`

---

### `InputData.jsx`
Renders the left panel with the input form. Receives all form-related props from `App.jsx` and has no state of its own.

---

### `Notes.jsx`
Renders the right panel with all note cards. Maps over the `notes` array and displays each note with a delete button.

---

## 🏃 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/adnananjum/react-noter.git
cd notes-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📸 App Preview

```
┌─────────────────────┬──────────────────────────────┐
│    React Noter      │        Your Notes             │
│                     │                               │
│  [Note title...]    │  ┌─────────┐  ┌─────────┐   │
│                     │  │  NOTE   │  │  NOTE   │   │
│  [What's on your   │  │ Title 1 │  │ Title 2 │   │
│   mind?         ]  │  │ details │  │ details │   │
│                     │  │[Delete] │  │[Delete] │   │
│  [  Add Note  ]     │  └─────────┘  └─────────┘   │
└─────────────────────┴──────────────────────────────┘
```

---

## 📚 Concepts Covered

This project was built to practice and solidify the following React concepts:

- **Component-based architecture** — breaking UI into reusable pieces
- **Props** — passing data and functions between parent and child components
- **useState** — managing local state
- **useEffect** — running side effects when state changes
- **localStorage** — persisting data in the browser
- **Controlled inputs** — binding form inputs to React state

---

## 🔮 Future Improvements

- [ ] Edit existing notes
- [ ] Mark notes as important/pinned
- [ ] Add categories or color tags
- [ ] Search and filter notes
- [ ] Drag and drop to reorder

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
