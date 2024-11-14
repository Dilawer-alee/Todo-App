// Get the input field and todo list container
const input = document.querySelector('#todo');
const ul = document.querySelector('.todo-list');
const todo = [];

// Render Todo List
function renderTodo() {
    ul.innerHTML = "";  // Clear the existing list
    for (let i = 0; i < todo.length; i++) {
        ul.innerHTML += `
            <li class="todo-item">
                ${todo[i]} 
                <button id="delete-btn" onclick="deleteTodo(${i})">Delete</button>
                <button id="edit-btn" onclick="editTodo(${i})">Edit</button>
            </li>`;
    }
}

// Add Todo
function addTodo() {
    if (input.value.trim() !== "") {
        todo.push(input.value);  // Add the new task to the array
        input.value = '';  // Clear input field after adding
        renderTodo();  // Re-render the list
    } else {
        alert("Please enter a valid task!");
    }
}

// Delete Todo
function deleteTodo(index) {
    todo.splice(index, 1);  // Remove the task at the specified index
    renderTodo();  // Re-render the list after deletion
}

// Edit Todo
function editTodo(index) {
    const editedValue = prompt("Enter new value", todo[index]);
    if (editedValue && editedValue.trim() !== "") {
        todo.splice(index, 1, editedValue);  // Update the task with the new value
        renderTodo();  // Re-render the list after editing
    } else {
        alert("Please enter a valid value!");
    }
}

// Delete All
function deleteAll() {
    if (confirm("Are you sure you want to delete all tasks?")) {
        todo.length = 0;  // Clear the todo array
        renderTodo();  // Re-render the empty list
    }
}
