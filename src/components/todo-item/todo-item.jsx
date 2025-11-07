import {useState, useEffect} from "react";
import './todo-item.scss';

const TodoItem = (props) => {
	let {id, text, isChecked, handleRestore, handleToggle, handleEdit, handleDelete, isArchived, needTruncate} = props

	const [showFull, setShowFull] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [editValue, setEditValue] = useState('');

	function truncate(str, maxLength = 40) {
		if (str.length <= maxLength) return str

		let truncated = str.slice(0, maxLength)
		const lastSpaceIndex = truncated.lastIndexOf(' ')

		if (lastSpaceIndex > 0) {
			truncated = truncated.slice(0, lastSpaceIndex)
		}

		return truncated + '...'
	}

	const displayText = showFull || !needTruncate ? text : truncate(text);

	useEffect(() => {
		if (showEdit) {
			const editInput = document.getElementById('edit-input');
			if (editInput) {
				editInput.focus();
			}
		}
	}, [showEdit]);

	return (
		<li
			className={`todo-list__item ${isChecked ? "checked" : ""} ${isArchived ? "archived" : ""}`}
		>
			<div
				title={showFull ? "Press to hide full text" : needTruncate ? "Press to see full text" : ""}
				style={needTruncate ? {cursor: "pointer"} : {}}
				onClick={(e) => {
					if (e.target.tagName !== "INPUT") {
						needTruncate && setShowFull(!showFull)
					}
				}}
				className="todo-list__task"
			>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={(e) => {
						e.stopPropagation();
						handleToggle(id)
					}}
					disabled={isArchived}
					className={isChecked ? "checked" : ""}
				/>

				<form className="todo-text" onSubmit={(e) => {
					e.preventDefault();
					if (editValue.trim()) {
						handleEdit(id, editValue)
						setShowEdit(false)
					}
				}}>
					{!showEdit ? displayText : (
						<>
							<input
								id="edit-input"
								type="text"
								value={editValue}
								onChange={(e) => {
									setEditValue(e.target.value);
								}}
								placeholder="Edit your input and press enter"
							/>
							<button
								type="button"
								className="todo-list__delete-btn edit-button"
								onClick={(e) => {
									e.stopPropagation();
									setShowEdit(false)
								}}
							>
								<img src="/assets/icons/x-icon.svg" alt="delete" />
							</button>
						</>

					)}
				</form>
			</div>

			{!showEdit && (
				<div className="btns">
					{!isArchived && (
						<button
							className="todo-list__delete-btn"
							onClick={() => {
								setEditValue(text);
								setShowEdit(true);
							}}
						>
							<img src="/assets/icons/edit.png" width="20" height="20" alt="edit" />
						</button>
					)}
					{isArchived && (
						<button
							className="todo-list__delete-btn"
							onClick={() => {
								handleRestore(id)
							}}
						 >
							<img src="/assets/icons/restore.png" width="20" height="20" alt="restore " />
						</button>
					)}
					<button
						className="todo-list__delete-btn"
						onClick={(e) => {
							e.stopPropagation();
							handleDelete(id)
						}}
					>
						<img src="/assets/icons/x-icon.svg" alt="delete" />
					</button>
				</div>
			)}
		</li>
	)
}

export default TodoItem;
