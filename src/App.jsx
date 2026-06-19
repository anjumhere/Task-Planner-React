import React, { useState } from "react";
// ... (imports)

const App = () => {
  const [newTasks, setNewTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const initialForm = {
    title: "",
    startTime: "10:30",
    endTime: "12:30",
    color: "#4fa3e8", // Default color to prevent empty states
    icon: "🏃",
  };
  
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return; // Basic validation

    // Add ID using timestamp for uniqueness
    const newTask = { ...formData, id: Date.now() };
    
    setNewTasks((prev) => [...prev, newTask]);
    setFormData(initialForm); // Reset form
    setIsOpen(false);
  };

  // ... (formatTime stays the same)

  return (
    <div className="min-h-screen w-full flex flex-col bg-[var(--color-bg)]">
      {/* ... (Header remains the same) */}

      <div className="flex flex-1 flex-col max-w-lg mx-auto w-full px-6 pb-10">
        <div className="flex gap-4 items-start">
          <TimeLine newTasks={newTasks} />

          <div className="flex flex-col gap-3 flex-1">
            <RenderTasks newTasks={newTasks} formatTime={formatTime} />

            <button
              onClick={() => {
                setFormData(initialForm); // Reset when opening
                setIsOpen(true);
              }}
              className="w-full py-3 rounded-2xl cursor-pointer text-xs tracking-widest uppercase transition-all duration-200 border border-dashed border-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-amber-300/10 hover:border-amber-300 hover:text-amber-300"
            >
              + Create Event
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit} // Fixed typo: handleSubmit
        />
      )}
    </div>
  );
};
