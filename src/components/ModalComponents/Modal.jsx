import React, { useState } from "react";

const Modal = ({
  isOpen,
  setIsOpen,
  formData,
  handleChange,
  handlleSubmit,
}) => {
  const colors = [
    "#4fa3e8",
    "#f5a623",
    "#b06de8",
    "#4cbb72",
    "#e86c4f",
    "#e8d04f",
    "#e84fa3",
    "#4fe8d0",
  ];

  return (
    <div className="min-h-screen z-1000 w-full flex justify-center items-center fixed inset-0 bg-black/90  backdrop-blur-xs text-white">
      <div className="w-96 bg-card border border-border rounded-2xl flex flex-col gap-6 p-7  shadow-2xl">
        <form className="flex flex-col gap-6 " onSubmit={handlleSubmit}>
          {/* title */}
          <h1 className="text-xl font-bold tracking-widest">Create Event</h1>

          {/* event name */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest text-text-muted uppercase">
              Event Name
            </p>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Deep Work Station"
              className="w-full bg-inputs px-4 py-3 border border-border rounded-xl outline-none text-white placeholder-gray-600"
            />
          </div>

          {/* time */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-xs tracking-widest text-text-muted uppercase">
                Start Time
              </p>
              <input
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                type="time"
                className="text-white bg-inputs px-4 py-3 rounded-xl border border-border outline-none w-full"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-xs tracking-widest text-text-muted uppercase">
                End Time
              </p>
              <input
                name="endTime"
                value={formData.endTime}
                type="time"
                onChange={handleChange}
                className="text-white bg-inputs px-4 py-3 rounded-xl border border-border outline-none w-full "
              />
            </div>
          </div>

          {/* icon */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest text-text-muted uppercase">
              Icon
            </p>
            <select
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              className="bg-inputs outline-none text-white rounded-xl w-full p-3 border border-border cursor-pointer"
            >
              <option value="🏃">🏃 Exercise</option>
              <option value="☕">☕ Coffee</option>
              <option value="💻">💻 Work</option>
              <option value="📚">📚 Study</option>
              <option value="🎵">🎵 Music</option>
              <option value="🧘">🧘 Meditation</option>
              <option value="📞">📞 Call</option>
              <option value="🍽️">🍽️ Meal</option>
            </select>
          </div>
          <div className="flex  flex-col gap-2">
            <p className="text-xs tracking-widest text-text-muted uppercase">
              Color
            </p>
            <div className="flex gap-2 w-full justify-center items-center  ">
              {colors.map((elem, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    handleChange({ target: { name: "color", value: elem } })
                  }
                  className="h-7 w-7 rounded-full hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    background: elem,
                    outline:
                      formData.color === elem ? "2px solid white" : "none",
                    outlineOffset: "2px",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-2 px-10 border hover:scale-105 transition-transform cursor-pointer  border-border rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-1 px-13 border hover:scale-105 transition-transform cursor-pointer  border-border rounded-xl"
              onClick={handlleSubmit}
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
