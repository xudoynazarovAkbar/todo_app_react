import TodoItem from "../todo-item/todo-item.jsx";
import './todo-list.scss';

const TodoList = (props) => {
	const { todos, setTodos, filter } = props

	const handleToggle = (id) => {
		setTodos(prev =>
			prev.map(todo =>
				todo.id === id && !todo.isArchived
					? { ...todo, isChecked: !todo.isChecked }
					: todo
			)
		);
	};

	const handleRestore = (id) => {
		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id && todo.isArchived
					? {...todo, isArchived: false}
					: todo
			)
		)
	}

	const handleEdit = (id, newText) => {
		const truncate_length = 40;

		setTodos(prevTodos =>
			prevTodos.map(todo =>
				todo.id === id
					? {
						...todo,
						text: newText,
						needTruncate: newText.length > truncate_length
					}
					: todo
			)
		);
	};

	const handleDelete = (id) => {
		setTodos(prev =>
			prev
				.map(todo => {
					if (todo.id !== id) return todo
					if (todo.isArchived) return false
					return { ...todo, isArchived: true }
				})
				.filter(Boolean)
		)
	}


	const filteredTodos = todos.filter(todo => {
		if (filter === "All") return !todo.isArchived
		if (filter === "Active") return !todo.isChecked && !todo.isArchived
		if (filter === "Completed") return todo.isChecked && !todo.isArchived
		if (filter === "Archive") return todo.isArchived
	})

	return (
		filteredTodos.length > 0 ? (
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						isChecked={todo.isChecked}
						handleRestore={handleRestore}
						handleToggle={handleToggle}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						isArchived={todo.isArchived}
						needTruncate={todo.needTruncate}
					/>
				))}
			</ul>
		) : (
			<div className="placeholder">Empty</div>
		)
	)
}

export default TodoList;
