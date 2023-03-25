const form = document.querySelector('form');
const newTodoInput = document.querySelector('#newTodo');
const todoList = document.querySelector('#todoList');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${todo}</span><button class="deleteTodo" data-index="${index}">X</button>`;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const newTodo = newTodoInput.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    newTodoInput.value = '';
    renderTodos();
  }
}

function deleteTodo() {
  const index = parseInt(this.dataset.index);
  todos.splice(index, 1);
  renderTodos();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteTodo')) {
    deleteTodo.call(event.target);
  }
});
