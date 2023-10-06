// TaskForm.js
import React, { useState, FC } from "react";

/* TaskForm.js:

Purpose: This component is responsible for adding new tasks.
Props:onAdd: A function to handle adding a new task.

Explanation:
It provides an input field where the user can type the title of the new task.
When the form is submitted, it calls the onAdd function with the current value of the input field.

*/

interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm: FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };
  return (
    <form className="task__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
