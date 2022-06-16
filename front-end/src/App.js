import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import "./App.css";
import TodoList from "./TodoList";
import axios from "axios";
function App() {
	const [todos, setTodos] = useState([
	]);

	useEffect(() => {
		const getAndSetTodos = async () => {
			//new response
			const response = await axios.get("http://localhost:4000/todo");
			setTodos(response.data);
		};
		getAndSetTodos();
	}, []);
	return (
		<>
			<div className="todoList listBorder">
				<h1>Todo List</h1>
				<TodoList todos={todos} setTodos={setTodos} />
				<AddTodo setTodos={setTodos} />
			</div>
		</>
	);
}

export default App;
