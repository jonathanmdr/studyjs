var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onClick', 'deleteTodo('+ pos +')');
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    if (todoText == '') {
        alert('Informe um todo para adicionar!');
        return;
    }

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    savetoStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    savetoStorage();
}

function savetoStorage() {    
    localStorage.setItem('list_todos', JSON.stringify(todos));
}