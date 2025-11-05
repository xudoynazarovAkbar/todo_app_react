import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import {useTodoApp} from "./hooks/useTodoApp.js";

function App() {
	const { todos, setTodos, darkMode, setDarkMode, filter, setFilter } = useTodoApp()

	return (
		<section id="todo-list-app" className={darkMode ? "dark-mode" : ""}>

			<div className="container">

				<div className="todo-app">

					<Header todos={todos} setTodos={setTodos} setDarkMode={setDarkMode} darkMode={darkMode} />

					<Main todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />

				</div>

			</div>

		</section>
	)
}

export default App
