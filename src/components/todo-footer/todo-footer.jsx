import './todo-footer.scss';

const filterNames = ["All", "Active", "Completed", "Archive"];

const TodoFooter = (props) => {
	const { todos, setTodos, filter, setFilter } = props
	const itemsLeft = todos.filter(todo => !todo.isChecked && !todo.isArchived).length

	function handleClearCompleted() {
		setTodos(prev =>
			prev.map(todo => {
				return todo.isChecked ? {...todo, isArchived: true} : todo
			})
		)
	}

	return (
		<>
			<footer className="todo-app__footer tablet-above">
				<span className="todo-footer__count">{itemsLeft} items left</span>

				<ul className="todo-footer__controls tablet-above">
					{filterNames.map(type => (
						<li key={type}>
							<button
								className={`filter-btn ${filter === type ? "filter-btn--active" : ""}`}
								onClick={() => setFilter(type)}
							>
								{type}
							</button>
						</li>
					))}
				</ul>

				<button className="todo-footer__clear-completed" onClick={handleClearCompleted}>
					Clear Completed
				</button>


			</footer>
			<footer className="todo-app__footer phone">
				<ul className="todo-footer__controls">
					{filterNames.map(type => (
						<li key={type}>
							<button
								className={`filter-btn ${filter === type ? "filter-btn--active" : ""}`}
								onClick={() => setFilter(type)}
							>
								{type}
							</button>
						</li>
					))}
				</ul>
			</footer>
		</>
	);
};

export default TodoFooter;
