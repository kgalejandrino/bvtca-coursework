/*--- Elements ---*/
const taskInput = document.getElementById('task');
const taskLists = document.getElementById('task-lists');
const btnAdd = document.getElementById('btn-add');

/*--- Function --- */
const addTask = () => {
    // Create a new li element
    const task = document.createElement('li');
    // Add a class to the li element
    task.className = 'list-group-item';
    // Create a new i element (for icon)
    const icon = document.createElement('i');
    // Add a class to the i element
    icon.className = 'far fa-times-circle icon-close';

    // Create a text node using the input value from input (new task) 
    const inputValue = document.createTextNode(taskInput.value);
    // Append input task & icon to li
    task.appendChild(inputValue);
    task.appendChild(icon);

    // Append li(task) to ul
    taskLists.appendChild(task);
}


/*--- Event Handlers ---*/
// Event Clicked: Add task when button 'Add Task' is clicked 
btnAdd.addEventListener('click', addTask);

// Event Keyup: Add a task when enter key is pressed
document.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        addTask();
    }
});

// Event Clicked: Remove task
taskLists.addEventListener('click', function(e) {
    if(e.target.classList.contains('icon-close')) {
        e.target.parentNode.remove();
    }
})