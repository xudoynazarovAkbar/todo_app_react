import './main.scss';
import TodoList from "../todo-list/todo-list.jsx";
import TodoFooter from "../todo-footer/todo-footer.jsx";

const Main = (props) => {
	const { todos, setTodos, filter, setFilter } = props
	return (
		<div className="todo-app__body">

			<TodoList todos={todos} setTodos={setTodos} filter={filter} />
			<TodoFooter todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />

		</div>
	);
};

export default Main;
