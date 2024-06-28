import React, { useState, useEffect } from "react";
import DatePicker from "./components/DatePicker";
import TaskTable from "./components/TaskTable";
import Summary from "./components/Summary";

function App() {
  const [week, setWeek] = useState(new Date().toISOString().substr(0, 10));
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    setTasks(savedTasks);
  }, [week]);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-purple-700">
        Summer Agreement
      </h1>
      <DatePicker week={week} setWeek={setWeek} />
      <TaskTable week={week} tasks={tasks} updateTasks={updateTasks} />
      <Summary tasks={tasks} />
    </div>
  );
}

export default App;
