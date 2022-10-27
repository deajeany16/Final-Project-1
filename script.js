// INDEX PAGE
let popup = document.querySelector('.popup')

function openPopUp() {
  popup.classList.add("showPopUp")
}

function closePopUp() {
  popup.classList.remove("showPopUp")
}

// TODOS PAGE
const inputTodo = document.querySelector(".inputTodo input")
const addTodo = document.querySelector(".inputTodo button")
const listTodo = document.querySelector(".todos")

function checkInput(event) {
  let todos = inputTodo.value;
  let check = todos.trim() != 0 ? addTodo.classList.add("active") : addTodo.classList.remove("active");
}

function newTodos(event) {
  let todos = inputTodo.value
  let getLocalStorage = localStorage.getItem("todo")
  let additemLocalStorage = getLocalStorage == null ? todosArr = [] : todosArr = JSON.parse(getLocalStorage);
  todosArr.push(todos)
  localStorage.setItem("todo", JSON.stringify(todosArr))
  showTodos()
}

function showTodos() {
  let getLocalStorage = localStorage.getItem("todo")
  let additemLocalStorage = getLocalStorage == null ? todosArr = [] : todosArr = JSON.parse(getLocalStorage);
  const pending = document.querySelector('.footer-todo .pending')
  pending.textContent = todosArr.length
  let newLiTag = ""
  todosArr.forEach((dataTodo, index) => {
    newLiTag += '<li> ' + dataTodo + ' <span><i onclick="clearTodos(' + index + ')" class="fa fa-trash" aria-hidden="true"></i></span></li>';
  });
  listTodo.innerHTML = newLiTag
  inputTodo.value = "";
}

function clearTodos(index) {
  let getLocalStorage = localStorage.getItem("todo")
  todosArr = JSON.parse(getLocalStorage)
  todosArr.splice(index, 1)
  localStorage.setItem("todo", JSON.stringify(todosArr))
  showTodos()
}

function clearAllTodos(event) {
  todosArr = []
  localStorage.setItem("todo", JSON.stringify(todosArr))
  showTodos()
}