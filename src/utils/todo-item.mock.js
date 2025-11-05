import { v4 as uuidv4 } from 'uuid';

export let todos = [
	{
		id: uuidv4(),
		text: "Jog around the park 3x",
		isChecked: true,
		isArchived: false,
		needTruncate: false
	},
	{
		id: uuidv4(),
		text: "Finish the React project and write detailed documentation for all components",
		isChecked: false,
		isArchived: false,
		needTruncate: true
	},
	{
		id: uuidv4(),
		text: "Learn React",
		isChecked: true,
		isArchived: false,
		needTruncate: false
	},
	{
		id: uuidv4(),
		text: "Learn Redux",
		isChecked: false,
		isArchived: false,
		needTruncate: false
	}
]
