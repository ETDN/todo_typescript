import React, { useState } from "react";
import TaskForm from "./components/task_form";
import TaskFilter from "./components/task_filter";
import TaskList from "./components/task_list";
import "./App.scss";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";
import Beer from "./components/beer_stuff";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("dark mode");
  };

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = (filter: string) => {
    switch (filter) {
      case "completed":
        console.log("test completed");
        return tasks.filter((task) => task.completed);
      case "notCompleted":
        console.log("test not completed");
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(filter);

  //-------------------- API BREWDOG --------------------------

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        {/* condentional rendering !!!! */}
        {darkMode ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
      </button>
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskFilter onFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />
      <Beer />
    </div>
  );
};

export default App;
