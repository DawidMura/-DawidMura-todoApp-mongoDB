import React, { useState } from "react";
import DeleteTodo from "./DeleteTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
	faPenToSquare,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todos, setTodos }) => {
	const [isEditing, setIsEditing] = useState(null);
	const [currentTodo, setCurrentTodo] = useState("");
	function handleToggleTodo(id, done) {
		axios.put(`http://localhost:4000/todo/${id}`, {
			done: !done,
		}).then((res) => {
			console.log("id", id);
		});
		const updatedTodos = todos.map((t) =>
			t._id === id
				? {
					...t,
					done: !t.done,
				}
				: t
		);
		setTodos(updatedTodos);
	}
	function editTodo(id) {
		// const _id = currentTodo._id;
		// axios.put need a url and content which is update !!!!
		axios.put(`http://localhost:4000/todo/${id}`, {
			name: currentTodo,
			isUpdated: true,
			// isDone: handleToggleTodo(currentTodo)
		}).then((res) => {
			console.log("id", id);
		});

		const updatedTodos = [...todos].map((todo) => {
			console.log(id);
			if (todo._id === id) {
				console.log("before", todo.name);
				todo.name = currentTodo;
				console.log("after", todo.name);
			}
			return todo;
		});

		setTodos(updatedTodos);
		setIsEditing(null);
	}

	// function handleEditFormSubmit(e) {
	// 	e.preventDefault();
	// 	editTodo(currentTodo.id);
	// }

	if (!todos.length) {
		return <p>No todos left!</p>;
	}
	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return (
						<div
							onDoubleClick={() => handleToggleTodo(todo._id, todo.done)}
							style={{
								textDecoration: todo.done ? "line-through royalBlue" : "",
							}}
							key={todo._id}
						>
							{isEditing ? (
								<>
									<input
										type="text"
										onChange={(e) => setCurrentTodo(e.target.value)}
										value={currentTodo.name}
										placeholder={todo.name}
										style={{ color: "black", textAlign: "center" }}
									/>
									<button
										onClick={() => editTodo(todo._id)}
										className="btn-confirm"
									>
										<FontAwesomeIcon icon={faCircleCheck} />
									</button>
									<button onClick={() => setIsEditing(null)}>cancel</button>
								</>
							) : (
								<div>
									{todo.name}
									<DeleteTodo todo={todo} setTodos={setTodos} />
									<button
										className="btn-edit"
										onClick={() => setIsEditing(todo._id)}
									>
										<FontAwesomeIcon icon={faPenToSquare} />
									</button>
								</div>
							)}
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
