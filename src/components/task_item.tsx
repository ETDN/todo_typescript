import React, { FC } from "react";

/* Purpose: This component is responsible for displaying an individual task item.
Props:
task: The individual task object with properties like id, title, and completed.
onDelete: A function to handle task deletion.
onToggle: A function to handle toggling the completion status of a task.

Explanation:
It displays the title of the task and has two buttons: one for marking the task as complete or incomplete, and another for deleting the task.
The onDelete and onToggle functions are called when the corresponding buttons are clicked.
*/

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task__item">
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? "Incomplete" : "Done"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
