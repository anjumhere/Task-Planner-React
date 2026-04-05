import React, { useState } from "react";
import TimeLine from "./components/TimeLineComponent/TimeLine";
import Modal from "./components/ModalComponents/Modal";
import RenderTasks from "./components/TaskComponents/RenderTasks";

const App = () => {
  const [newTasks, setNewTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startTime: "10:30",
    endTime: "12:30",
    color: "",
    icon: "🏃",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setNewTasks((prev) => [...prev, formData]);
    setIsOpen(false);
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour < 12 ? "AM" : "PM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ background: "var(--color-bg)" }}
    >
      {/* header */}
      <div className="px-6 pt-8 pb-4 max-w-lg mx-auto w-full">
        <h1 className="text-white text-xl font-semibold tracking-widest">
          My Day
        </h1>
        <p
          className="text-xs tracking-widest mt-1 uppercase"
          style={{ color: "var(--color-text-muted)" }}
        >
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* centered content */}
      <div className="flex flex-1 flex-col max-w-lg mx-auto w-full px-6 pb-10">
        {/* timeline + tasks row */}
        <div className="flex gap-4 items-start">
          {/* timeline */}
          <TimeLine newTasks={newTasks} />

          {/* tasks */}
          <div className="flex flex-col gap-3 flex-1">
            <RenderTasks newTasks={newTasks} formatTime={formatTime} />

            {/* add button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full py-3 rounded-2xl  hover:bg-amber-300 cursor-pointer text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                color: "var(--color-text-muted)",
                border: "1px dashed var(--color-border)",
              }}
            >
              + Create Event
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          formData={formData}
          handleChange={handleChange}
          handlleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
