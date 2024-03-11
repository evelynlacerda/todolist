import React from 'react'
import "./style.scss";

import { MdRadioButtonUnchecked } from "react-icons/md";
import { TbEditCircle } from "react-icons/tb";
import { TbTrashX } from "react-icons/tb";
import { GoCheckCircleFill } from "react-icons/go";
import { useTask } from "../../contexts/todoContexts";
import { AddTask } from "../AddTask";
import { Summary } from "../Summary";


export const Task: React.FC = () => {
  const {toggleStatus, tasks, removeTask} = useTask();
  
	return (
    <>
      <AddTask />
      <section>
        <Summary />
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task" data-status={task.status}>
              <div className="task-text">
                <button onClick={() => toggleStatus(task.id)}>
                  {task.status ? <GoCheckCircleFill /> : <MdRadioButtonUnchecked />}
                </button>
                <p>{task.name}</p>
              </div>
              <div className="task-button">
                <button><TbEditCircle /></button>
                <button onClick={() => removeTask(task.id)}><TbTrashX /></button>
              </div>
            </div>
          ))}					
				</div>
			</section>
		</>
	);
};
