import React, { FC } from "react";
import TaskItem from "./task_item";

/*Purpose: This component is responsible for rendering the list of tasks.
Props:
tasks: An array of tasks to be displayed.
onDelete: A function to handle task deletion.
onToggle: A function to handle toggling the completion status of a task.

Explanation:
It uses the map function to loop through the tasks array and renders a TaskItem component for each task.
*/

interface TaskListProps {
  tasks: Array<{
    id: number;
    title: string;
    completed: boolean;
  }>;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task__list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
