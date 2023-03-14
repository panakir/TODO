import './styles.scss'
import './index.html'

const messageTask = document.querySelector('.todo__input')
const buttonTask = document.querySelector('.todo__btn')
const taskList = document.querySelector('.todo__list')

let taskArray = []

const renderTaskList = () => {
  let templateTask = ''
  taskArray.forEach((task, index) => {
    templateTask += `<li class='todo__item ${task.important ? 'important' : ''}'>
    <input id='task-${index}' type='checkbox' ${task.checked ? 'checked' : ''}>
    <label class='todo__task' for='task-${index}'>${task.task}</label>
    <img class='todo__image todo__image_important' src='https://imgs.search.brave.com/kpAyjn8oEOxnMSWGrYRFMG5CVaIWG3XNXrHfQDykYVg/rs:fit:958:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNDQ4MzA2LnBu/Zw' data-important='task-${index}'>
    <img class='todo__image todo__image_important' src='https://imgs.search.brave.com/yYLQe6s-lpDNtkZqncwuX3FzqtuApP8E8Cr9t4FshEw/rs:fit:560:560:1/g:ce/aHR0cDovL3BpeHNl/Y3Rvci5jb20vY2Fj/aGUvZTZiN2Q2MGYv/YXY3NTBjMTU2ZWE1/NGQ3N2I5N2Q0LnBu/Zw' data-id='task-${index}' alt='Trash bin'>
    </li>`
  })
  taskList.innerHTML = templateTask
}

if (localStorage.getItem('taskList')) {
  taskArray = JSON.parse(localStorage.getItem('taskList'))
  renderTaskList()
}

buttonTask.addEventListener('click', () => {
  if (!messageTask.value) return

  const newTask = {
    task: messageTask.value,
    checked: false,
    important: false,
   }

  taskArray.push(newTask)

  messageTask.value = ''

  renderTaskList()
  localStorage.setItem('taskList', JSON.stringify(taskArray))
})


taskList.addEventListener('click', (event) => {
  if (event.target.hasAttribute('id')) {
    const clickedId = event.target.getAttribute('id')
    const labelFor = taskList.querySelector(`[for='${clickedId}']`)
    const clickedValue = labelFor.innerHTML
    
    taskArray.forEach(task => {
      if (clickedValue === task.task) {
        task.checked = !task.checked
        localStorage.setItem('taskList', JSON.stringify(taskArray))
      }
    })
  }

  if (event.target.hasAttribute('data-id')) {
    const clickedTaskId = event.target.getAttribute('data-id')
    const index = clickedTaskId.slice(5)

    taskArray.splice(index, 1)
    renderTaskList()
    localStorage.setItem('taskList', JSON.stringify(taskArray))
  }

  if (event.target.hasAttribute('data-important')) {
    console.log(event);
    const clickImportantTask = event.target.getAttribute('data-important')
    const indexImportantTask = clickImportantTask.slice(5)
    
    taskArray.forEach((task,index) => {
      if(indexImportantTask == index) {
        task.important = !task.important
        
        console.log(task.important);
        renderTaskList()
        localStorage.setItem('taskList', JSON.stringify(taskArray))

      }
    })
  } 
  
})