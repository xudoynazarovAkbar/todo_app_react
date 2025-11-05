import './header.scss';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const Header = (props) => {
	let {todos, setTodos, darkMode, setDarkMode} = props
	let [newTodoTitle, setNewTodoTitle] = useState("")

	function createTodo(e) {
		e.preventDefault()

		if (!newTodoTitle.trim()) return

		setTodos([...todos, {id: uuidv4(), text: newTodoTitle.trim(), isChecked: false, isArchived: false, needTruncate: newTodoTitle.trim().length > 40}])

		setNewTodoTitle("");
	}

	return <>
		<header className="todo-app__header">
			<div className="todo-app__top-bar">
				<h1>Todo</h1>
				<button className="top-bar__btn" onClick={() => setDarkMode(!darkMode) }>
					<img
						key={darkMode}
						src={darkMode ? "/assets/icons/sun.svg" : "/assets/icons/moon.svg"}
						alt="theme icon"
						className="theme-icon"
					/>
				</button>
			</div>
			<form className="todo-form" onSubmit={createTodo}>
				<input
					value={newTodoTitle}
					onChange={(e) => setNewTodoTitle(e.target.value)}
					type="text"
					name='text'
					placeholder="Create a new todo…"
					aria-label="Yangi vazifa kiriting"
				/>
				<button className="todo-form__add-btn">Add</button>
			</form>
		</header>
	</>;
};

export default Header;