import React, { FC } from "react";
/* Purpose: This component allows the user to filter tasks based on their completion status.
Props:
onFilter: A function to handle task filtering.

Explanation:
It renders three buttons: "All", "Completed", and "Not Completed".
When a button is clicked, it calls the onFilter function with the corresponding filter type.
*/

interface TaskFilterProps {
  onFilter: (filterType: string) => void;
}

const TaskFilter: FC<TaskFilterProps> = ({ onFilter }) => {
  return (
    <div className="filter__buttons">
      <button onClick={() => onFilter("all")}>All</button>
      <button onClick={() => onFilter("completed")}>Completed</button>
      <button onClick={() => onFilter("notCompleted")}>Not Completed</button>
    </div>
  );
};

export default TaskFilter;
