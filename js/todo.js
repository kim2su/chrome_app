const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const clearList = document.querySelector("#clear-list");
let toDos = [];

function saveTodos(){  
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

function deleteTodo(event){
    event.preventDefault();
    const li = event.target.parentElement; 
    li.remove(); 
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveTodos();  
    
    
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    const button = document.createElement("button");
    button.innerText = "Delete"; 
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    todoList.classList.remove("hidden");
}

function handleTodoSubmit(event){
    event.preventDefault(); 
    const newTodo = todoInput.value;  
    todoInput.value = "";    
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    } 
    toDos.push(newTodoObj); 
    paintTodo(newTodoObj);  
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit)


const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos; 
    parsedTodos.forEach(paintTodo);
}else{

}
