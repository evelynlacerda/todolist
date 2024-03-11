import React, { ChangeEvent, useState } from "react";
import Logo from "../../assets/Logo.png";
import { FiPlusCircle } from "react-icons/fi";
import { useTask } from "../../contexts/todoContexts";

export const AddTask: React.FC = () => {
	const {createTask} = useTask();

	const [taskName, setTaskName] = useState<string>("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTaskName(event.target.value);
	};

	const handleCreateTask = () => {
		createTask(taskName);
		setTaskName("")
	}

	return (
		<header>
			<img src={Logo} />
			<div className="create-task">
				<input
					type="text"
					placeholder="Adicione uma nova tarefa"
					onChange={(e) => handleChange(e)}
					value={taskName}
				/>
				<button onClick={handleCreateTask}>
					Criar <FiPlusCircle />
				</button>
			</div>
		</header>
	);
};
