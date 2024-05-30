document.getElementById('add-todo').addEventListener('click', function(){
    let todoText = document.getElementById('new-todo').value;
    if (todoText.trim() !== '') {
        addTodo(todoText);
        document.getElementById('new-todo').value = '';
    }
})

function addTodo (todoText) {
    let li = document.createElement('li');
    li.textContent = todoText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    document.getElementById('todo-list').appendChild(li);
}