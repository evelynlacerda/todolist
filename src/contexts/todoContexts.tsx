/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface TaskProps {
	name: string;
	status: boolean;
	id: number;
}

interface TodoContextType {
	tasks: TaskProps[];
	createTask: (name: string) => void;
	removeTask: (id: number) => void;
	toggleStatus: (id: number) => void;
}

type TaskProviderProps = {
	children: React.ReactNode;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTask = () => {
	const context = useContext(TodoContext);
	if (!context) {
		throw new Error("useTask must be used within a TaskProvider");
	}
	return context;
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
	const [tasks, setTasks] = useState<TaskProps[]>([]);

	const createTask = (name: TaskProps["name"]) => {
		if (name.trim() !== "") {
			const newTask: TaskProps = {
				id: Math.floor(Math.random() * 10000),
				name: name,
				status: false,
			};

			setTasks([...tasks, newTask]);
		}
	};

	const removeTask = (id: number) => {
		setTasks((prevState) => prevState.filter((item) => item.id !== id));
	};

	const toggleStatus = (id: number) => {
		setTasks((prevState) =>
			prevState.map((item) =>
				item.id === id ? { ...item, status: !item.status } : item
			)
		);
    };
    
    return (
        <TodoContext.Provider value={{ tasks, createTask, removeTask, toggleStatus }}>
            {children}
        </TodoContext.Provider>
    )
};
