const form = document.getElementById('form')
const input = document.getElementById('input')   
const todoUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value 

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText 

        todoEl.addEventListener('click', () => 
        todoEl.classList.toggle('completed'));

        // contextmenu is right click
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove();

        });

        todoUL.appendChild(todoEl)
        
        //clear the form
        input.value = ''

        //function to update local storage
        updateLS()
    
    }
}

//setting up saving todos in local storage example: 
// localStorage.setItem('name', JSON.stringify(obj)
// JSON.parse(localStorage.getItem(obj))

function updateLS() {
    todosEL = document.querySelectorAll('li')
}
