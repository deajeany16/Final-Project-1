// INDEX PAGE
let popup = document.querySelector('.popup')
let formbook = document.querySelector('.booking-form')
let databook = document.querySelector('.data-booking')

//show & close pricelist
function openPopUp() {
  popup.classList.add("showPopUp")
}

function closePopUp() {
  popup.classList.remove("showPopUp")
}

//show & close form booking
function bookingForm() {
 popup.classList.remove("showPopUp")
 formbook.classList.add("showForm")
}

function closeForm() {
  formbook.classList.remove("showForm")
}

// save form data to local storage
const namaInput = document.getElementById("nama")
const telpInput = document.getElementById("telp")
const alamatInput = document.getElementById("alamat")
const carsInput = document.getElementById("cars")
const harisewaInput = document.getElementById("harisewa")
const tanggalsewaInput = document.getElementById("tanggalsewa")

function bookCars(event) {
 let nama = namaInput.value.trim()
 let telp = telpInput.value.trim()
 let alamat = alamatInput.value.trim()
 let cars = carsInput.value.trim()
 let harisewa = harisewaInput.value.trim()
 let tanggalsewa = tanggalsewaInput.value.trim()
     
  let getbooked = JSON.parse(localStorage.getItem("booksArr"))

  const booksArr = {
    name : nama,
    phone : telp,
    address : alamat,
    car : cars,
    days : harisewa,
    dates : tanggalsewa
  };

  if(getbooked){
    nama = booksArr.name
    telp = booksArr.phone
    alamat = booksArr.address
    cars= booksArr.car
    harisewa = booksArr.days
    tanggalsewa = booksArr.dates
  };

  localStorage.setItem("booksArr", JSON.stringify(booksArr))
  let checkSave = booksArr != null ? alert("Data Pemesanan Tersimpan") : alert("Mohon Lengkapi Form Pemesanan") ;
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
  let todosArr = getLocalStorage == null ? [] : JSON.parse(getLocalStorage);
  todosArr.push(todos)
  localStorage.setItem("todo", JSON.stringify(todosArr))
  showTodos()
}

function showTodos() {
  let getLocalStorage = localStorage.getItem("todo")
  let todosArr = getLocalStorage == null ? [] : JSON.parse(getLocalStorage);
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