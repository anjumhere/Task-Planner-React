import React from "react";

// Move static data outside component
const EVENT_COLORS = ["#4fa3e8", "#f5a623", "#b06de8", "#4cbb72", "#e86c4f", "#e8d04f", "#e84fa3", "#4fe8d0"];
const EVENT_ICONS = [
  { val: "🏃", label: "Exercise" }, { val: "☕", label: "Coffee" },
  { val: "💻", label: "Work" }, { val: "📚", label: "Study" },
  { val: "🎵", label: "Music" }, { val: "🧘", label: "Meditation" },
  { val: "📞", label: "Call" }, { val: "🍽️", label: "Meal" },
];

const InputLabel = ({ label, children }) => (
  <div className="flex flex-col gap-2">
    <p className="text-xs tracking-widest text-text-muted uppercase">{label}</p>
    {children}
  </div>
);

const Modal = ({ isOpen, setIsOpen, formData, handleChange, handleSubmit }) => {
  return (
    <div className="fixed inset-0 z-[1000] flex min-h-screen w-full items-center justify-center bg-black/90 backdrop-blur-xs text-white">
      <div className="w-96 rounded-2xl border border-border bg-card p-7 shadow-2xl">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <h1 className="text-xl font-bold tracking-widest">Create Event</h1>

          <InputLabel label="Event Name">
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Deep Work Station"
              className="w-full rounded-xl border border-border bg-inputs px-4 py-3 outline-none placeholder:text-gray-600"
            />
          </InputLabel>

          <div className="flex gap-4">
            <InputLabel label="Start Time">
              <input name="startTime" value={formData.startTime} onChange={handleChange} type="time" className="w-full rounded-xl border border-border bg-inputs px-4 py-3 outline-none" />
            </InputLabel>
            <InputLabel label="End Time">
              <input name="endTime" value={formData.endTime} onChange={handleChange} type="time" className="w-full rounded-xl border border-border bg-inputs px-4 py-3 outline-none" />
            </InputLabel>
          </div>

          <InputLabel label="Icon">
            <select name="icon" value={formData.icon} onChange={handleChange} className="w-full cursor-pointer rounded-xl border border-border bg-inputs p-3 outline-none">
              {EVENT_ICONS.map((i) => <option key={i.val} value={i.val}>{i.val} {i.label}</option>)}
            </select>
          </InputLabel>

          <InputLabel label="Color">
            <div className="flex w-full items-center justify-center gap-2">
              {EVENT_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  aria-label={`Select color ${color}`}
                  onClick={() => handleChange({ target: { name: "color", value: color } })}
                  className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${formData.color === color ? "ring-2 ring-white ring-offset-2" : ""}`}
                  style={{ background: color }}
                />
              ))}
            </div>
          </InputLabel>

          <div className="flex gap-4">
            <button type="button" onClick={() => setIsOpen(false)} className="flex-1 rounded-xl border border-border py-2 transition-transform hover:scale-105">Cancel</button>
            <button type="submit" className="flex-1 rounded-xl border border-border py-2 transition-transform hover:scale-105">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
