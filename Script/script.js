let hrs = document.getElementById("date");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(function () {
  let a = new Date()
  let datee = a.getDate()
  let month = a.getMonth()
  let yrs = a.getFullYear()
  let hrs = a.getHours()
  let mins = a.getMinutes()
  let secs = a.getSeconds()
  date.innerHTML = `<td>${datee}/${month + 1}/${yrs}</td>
    <td>${days[a.getDay()]}</td>
    <td>${hrs % 12}:${mins}:${secs} - ${hrs > 12 ? "<span>PM</span>" : "<span>AM</span>"}</td>`
}, 1000);


// Adding local storage items to table
const getLocalStorageData = () => {
  if (localStorage.getItem("todo") == null) {
    return []
  } else {
    return JSON.parse(localStorage.getItem("todo"))
  }
};
let TodoList = getLocalStorageData();




//show todo

function showtodo() {
  let todos = ""
  for (index = 0; index < TodoList.length; index++) {
    let taskname = TodoList[index].taskname
    let priority = TodoList[index].priority
    let schedule = TodoList[index].schedule
    
    todos +=
      `<tr>
            <th scope="row">${index + 1}</th>
            <td>${taskname}</td>
            <td>${priority}</td>
            <td>${schedule}</td>
            <td><button type="button" class="btn my-2 mx-2 btn-danger" onclick= removeTodo(${index})>Delete</button>
            </td>
       </tr>`
  }
  if (TodoList.length == 0) {
    todo.innerHTML = "Nothing to Show"
  } else {
    todo.innerHTML = todos
  }
}
showtodo()


//Adding Todo's to the local storage
addtask.addEventListener("click", (e) => {
  e.preventDefault()
  let todo = {
    taskname: taskname.value,
    priority: priority.value,
    schedule: schedule.value,
    
  }
  TodoList.push(todo)
  localStorage.setItem("todo", JSON.stringify(TodoList))
  showtodo()
  taskname.value = ""
  priority.value = ""
  schedule.value = ""
  

})


//deleting note
const removeTodo = (id) => {
  TodoList.splice(id, 1)
  localStorage.setItem("todo", JSON.stringify(TodoList))
  showtodo();
};








//delete all todos
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault()
  TodoList = []
  localStorage.setItem("todo", JSON.stringify([]))
  showtodo()
  addbtn.style.display = "inline-block"
  addtask.style.display = "none"
})