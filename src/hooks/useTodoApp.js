import { useState, useEffect } from "react";

export function useTodoApp() {
	const [todos, setTodos] = useState(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			try {
				return JSON.parse(storedTodos);
			} catch (err) {
				console.error("Failed to parse todos:", err);
				return [];
			}
		}
		return [];
	});

	const [darkMode, setDarkMode] = useState(() => {
		const storedDark = localStorage.getItem("darkMode");
		return storedDark ? JSON.parse(storedDark) : false;
	});

	const [filter, setFilter] = useState(() => {
		const storedFilter = localStorage.getItem("filter");
		return storedFilter || "All";
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
	}, [darkMode]);

	useEffect(() => {
		localStorage.setItem("filter", filter);
	}, [filter]);

	return {
		todos,
		setTodos,
		darkMode,
		setDarkMode,
		filter,
		setFilter,
	};
}
