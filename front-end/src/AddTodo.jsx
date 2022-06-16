import React from "react";
import { useRef } from "react";
const AddTodo = ({ setTodos }) => {
	const inputRef = useRef();
	//Add Todo function
	// const handleAddTodo = (e) => {
	// 	e.preventDefault();
	// 	const text = e.target.elements.addTodo.value;
	// 	const todo = {
	// 		id: Math.random(),
	// 		text,
	// 		done: false,
	// 	};
	// 	setTodos((prevTodos) => {
	// 		return prevTodos.concat(todo);
	// 	});
	// 	inputRef.current.value = "";
	// };
	return (
		<form
			// onSubmit={handleAddTodo}
			action="http://localhost:4000/todo"
			method="post"
		>
			<input
				name="name"
				placeholder="add todo"
				ref={inputRef}
				className="input-todo"
			/>
			<button className="btn-send" type="submit">
				Add
			</button>
		</form>
	);
};

export default AddTodo;
