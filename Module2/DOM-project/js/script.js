/*--- Elements ---*/
const taskInput = document.getElementById('task');
const filterInput = document.getElementById('filter');
const taskLists = document.getElementById('task-lists');
const btnAdd = document.getElementById('btn-add');
const btnClear = document.getElementById('btn-clear');

/*--- Function --- */
// Function: Add task input to the list
const addTask = () => {
    // If input is '' or if task is already added,
    // don't execute the function
    if(inputValidation()) return;

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

    saveTask();
    // Add task to localstorage
    clearInput();
    
}

// Function: Remove task from the list 
const removeTask = (e) => {
    if(e.target.classList.contains('icon-close')) {
        e.target.parentNode.remove();
        saveTask();
    }
}

// Function: Filter Task
const filterTask = () => {
    const inputValue = filterInput.value.toLowerCase();
    const li = document.querySelectorAll('li');

    li.forEach(item => {
        if(item.textContent.toLowerCase().includes(inputValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
}

// Function: Clear Task 
const clearTask = () => {
    localStorage.clear();

    while(taskLists.firstChild) {
        taskLists.firstChild.remove();
    }
}

// Function: Validates input
const inputValidation = () => {
    const li = document.querySelectorAll('li');

    const liArr = Array.from(li);
    const taskAdded = liArr.find(item => item.textContent === taskInput.value);

    if(taskInput.value === '') {
        clearInput();
        alert('Please add a task.');
        return true;
    } else if(taskAdded) {
        clearInput();
        alert('Task added already.')
        return true;
    }
    return false;
}

// Function: Clear input field
const clearInput = () => taskInput.value = ''; 

// Function: Save task to the local storage
const saveTask = () => {
    const allTask = [];

    const li = document.querySelectorAll('li');
    li.forEach(item => {
        allTask.push(item.innerHTML);
    })

    localStorage.setItem('task', JSON.stringify(allTask));
}

// Function: Fetched data from storage and display task list
const loadTaskFromStorage = () => {
    const storedValue = JSON.parse(localStorage.getItem('task'));

    if(storedValue) {
        storedValue.map(item => {
            // Create a new li element
            const task = document.createElement('li');
            // Add a class to the li element
            task.className = 'list-group-item';
    
            task.innerHTML = item;
            // Append li(task) to ul
            taskLists.appendChild(task);
        })
    }
}

loadTaskFromStorage();

/*--- Event Handlers ---*/
// Event Click: Add task to the list
btnAdd.addEventListener('click', addTask);

// Event Click: Remove task from the list
taskLists.addEventListener('click', (event) => removeTask(event));

// Event Keyup: Filter task on input change 
filterInput.addEventListener('keyup', filterTask);

// Event Click: Clear all task from the list
btnClear.addEventListener('click', clearTask);
