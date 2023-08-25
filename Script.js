const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
// const desc = document.querySelector("#description")
const taskList = document.querySelector(".task-list")

form.addEventListener("submit", addTask)

function addTask(event) {
  event.preventDefault()
  const task = input.value.trim()
  if (task !== '') {
    const li = document.createElement("li")
    li.innerHTML = `
        <input type='checkbox' class="checkbox">
        <span>${task}</span>
        <button class='delete-btn'>X</button>
        `
    taskList.appendChild(li)
    input.value = ''
  }
}

taskList.addEventListener("click", function(event) {

  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.remove()
  }
  else if (event.target.tagName = "input") {
    const task = event.target.nextElementSibling;
    if (event.target.checked) {
      task.style.textDecoration = "line-through"
      task.style.color = "#05cd16"
      task.style.fontStyle = 'italic'
      task.style.fontWeight = '400'
    }
    else {
      task.style.textDecoration = "none"
      task.style.color = '#fff'
      task.style.fontStyle = 'normal'
      task.style.fontWeight = '500'
    }
  }
})