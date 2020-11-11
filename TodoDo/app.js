const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.add');
const todoList = document.querySelector('.todo-list');



function addTodo(event) {
    event.preventDefault();

    // CREATE A DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // add todo 
    saveLocalStorage(todoInput.value);



    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = '';
}
function deleteCheck(e) {
    event.preventDefault();

    const item = e.target;

    if (item.classList[1] === 'fa-trash') {
        const todo = item.parentElement.parentElement;
        todo.classList.add('fall');
        removeTodo(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();

        });
    }
    if (item.classList[1] === 'fa-check') {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle('done');
    }

}



function saveLocalStorage(todo) {
    //check 
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

};



function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        event.preventDefault();
        // CREATE A DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;

        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // add todo 

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }
    )
};
function removeTodo(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));



};



todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos)
