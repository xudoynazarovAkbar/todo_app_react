# Todo App

A **React Todo List application** with features for creating, editing, deleting, archiving, filtering, and dark mode. The app persists todos, the active filter, and dark mode using **localStorage**.

---

## 📝 Features & How It Works

### Add Todo

* Enter a title in the input field at the top and press **Add** or hit Enter to create a new todo.

### Edit Todo

* Click the **edit icon** on a todo to enable editing.
* Modify the text and press **Enter** to save changes.
* There is no separate tick button; pressing Enter completes the edit.

### Delete / Archive Todo

* Click the **delete icon** to archive a todo.
* Archived todos are hidden from normal views but can be restored in the **Archive** filter.
* Clicking the restore icon in the Archive filter will un-archive the todo.

### Toggle Completion

* Click the checkbox next to a todo to mark it as completed or uncompleted.
* Completed todos are visually indicated and can be cleared using the **Clear Completed** button.

### Filter Todos

* Use the footer buttons to switch between `All`, `Active`, `Completed`, and `Archive` views.
* Filters dynamically update the list without affecting other states.

### Dark Mode

* Toggle the sun/moon icon in the header to switch between light and dark themes.
* The choice is saved in **localStorage** and persists across reloads.

### Text Truncation

* Long todo text is truncated to 40 characters by default.
* Clicking on the text toggles the full view if truncated.

---

The app is fully reactive, responsive, and allows you to manage todos efficiently with minimal clicks.

---

## 📌 Cloning This Project

You can clone this project from GitHub using the following command:

```bash
git clone https://github.com/xudoynazarovAkbar/todo_app_react.git
```
