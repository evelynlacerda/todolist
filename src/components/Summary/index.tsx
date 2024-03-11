import React from "react";
import { useTask } from "../../contexts/todoContexts";

export const Summary: React.FC = () => {
    const {tasks} = useTask();

    const tasksCompleted = tasks.filter((task) => task.status === true).length;

	return (
		<div className="task-num">
			<p>
				Tarefas criadas <span>{tasks.length}</span>
			</p>
			<p>
				Concluídas{" "}
				<span>
					{tasksCompleted} de {tasks.length}
				</span>
			</p>
		</div>
	);
};
