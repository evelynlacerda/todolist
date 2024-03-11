import { Task } from "./components/Task";
import { TaskProvider } from "./contexts/todoContexts";

function App() {
	return (
		<TaskProvider>
			<Task />
		</TaskProvider>
	);
}

export default App;
