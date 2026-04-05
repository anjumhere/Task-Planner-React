import React, { useState } from "react";
import {
  RiSunFill,
  RiRunFill,
  RiShowersFill,
  RiCupFill,
  RiMailFill,
  RiMoonFill,
} from "@remixicon/react";
import TimeLine from "./components/TimeLineComponent/TimeLine";
import Tasks from "./components/TaskComponents/Tasks";
import Modal from "./components/ModalComponents/Modal";
import RenderTasks from "./components/TaskComponents/RenderTasks";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    startTime: "10:30",
    endTime: "12:30",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlleSubmit = (e) => {
    e.preventDefault(console.log(formData));
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen w-full  flex flex-col ">
      <div className="  w-full flex items-center justify-center gap-7 bg-bg text-black p-10">
        {/* Container for the entire vertical timeline */}
        <TimeLine />
        {/* Main Content Area */}
        <RenderTasks formData={formData} />{" "}
        {isOpen && (
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            formData={formData}
            handleChange={handleChange}
            handlleSubmit={handlleSubmit}
          />
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          className="bg-card px-10 py-3 w-fit  "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add Event
        </button>
      </div>
    </div>
  );
};

export default App;
