import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
export default function DeleteTodo({ todo, setTodos }) {
	function handleDeleteTodo() {
		const _id = todo._id;
		axios.delete(`http://localhost:4000/todo/${_id}`).then((res) => {
			console.log(res.data);
		});
		setTodos((prevTodos) => {
			return prevTodos.filter((t) => t._id !== todo._id);
		});
	}
	return (
		<>
			<button onClick={handleDeleteTodo} className="btn-delete">
				<FontAwesomeIcon icon={faTrash} />
			</button>
		</>
	);
}
