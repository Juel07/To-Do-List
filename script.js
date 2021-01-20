//select the elements
const toDoInput = document.querySelector('#toDoInput')
const addBtn = document.querySelector('#add-btn')
const taskList = document.querySelector('.taskList')

// disable ADD button if input field is empty
const disableBtn = () => {
    const task = toDoInput.value
    if (task) {
        addBtn.disabled = false;
    }
    else {
        addBtn.disabled = true;
        alert("Please enter a task");
    }
}

// add a new task, taking input from user
const addTask = () => {

    // create a <div> for each task item
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    // create a custom checkbox using <button>
    const checkButton = document.createElement('button')
    checkButton.classList.add('check-btn')
    checkButton.innerText = '\u2714'
    taskDiv.appendChild(checkButton)

    // create a <li> that will display task
    const newTask = document.createElement('li')
    newTask.innerText = toDoInput.value
    taskDiv.appendChild(newTask)

    // create a <button> for deleting task
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    deleteButton.classList.add('delete-btn')
    taskDiv.appendChild(deleteButton)

    // finally, append the taskDiv to the <ul>
    // check for empty input field
    const task = toDoInput.value
    if (task) {
        taskList.appendChild(taskDiv)
    } else {
        disableBtn()
        // return
    }
    
    // clear input field once task is added
    toDoInput.value = ""
}

// delete or check a task
const deleteOrCompleteTask = (event) => {
    let item = event.target

    if (item.classList[0] === 'delete-btn') {
        item.parentElement.remove()
    }

    if (item.classList[0] === 'check-btn') {
        item.parentElement.classList.toggle('completed')
    }
}

// use the Enter key to add task
// key code for Enter key is 13
const EnterTask = (event) => {

    if (event.keyCode == 13) {
        const task = toDoInput.value
        if (task) {
            addTask(task)
        } else {
            return
        }
    }
}

// event listeners
taskList.addEventListener('click', deleteOrCompleteTask)
addBtn.addEventListener('click', addTask)
document.addEventListener('keyup', EnterTask)