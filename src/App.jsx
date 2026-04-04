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

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full  flex flex-col ">
      <div className="  w-full flex items-center justify-center gap-7 bg-bg text-black p-10">
        {/* Container for the entire vertical timeline */}
        <TimeLine />
        {/* Main Content Area */}
        <Tasks />
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
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
