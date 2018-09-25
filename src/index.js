document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements

  const listDiv = document.getElementById("app-content");
  const appContainer = document.getElementById('main-content')
  const createListBtn = document.getElementById('create-list-form')
  let newListInput = document.getElementById('new-list-title')
  const inputValues = [];
  let taskCounter = 0
  let taskObj = {}

/////////// create List button action
  createListBtn.addEventListener('submit', function (event){
    event.preventDefault()
    let input = newListInput.value
    inputValues.push(input)

    if (!listDiv.hasChildNodes()) {
      let form = document.createElement('form');
      form.setAttribute("id", "create-task-form");
      form.innerHTML += `<label for="parent-list">Select List:</label>
      <select id="parent-list">
      <option value="My Dank List" selected>
      Cool list
      </option>
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
    <input id='form' type="submit" value="Create New Task">
  </form>
</div>`


  listDiv.append(form)
  let delteFromList = event.target.innerText
   let select=document.getElementById('parent-list');
  if (select.options.innerText=== delteFromList) {
    select.remove();

  }

  let taskList = document.createElement('div')
  taskList.innerHTML += `
  <div id="lists">
  <!-- begin list 1 -->
    <div id='${taskCounter}'>
      <h2>${input}
        <button data-title="${taskCounter}" class="delete-list">
          X
        </button>
      </h2>
    </div>`
    let x = document.getElementById("parent-list");
    let option = document.createElement("option");
    option.text = input;
    x.add(option);

   appContainer.append(taskList)
   newListInput.value = ''


let createTaskBtn = document.getElementById('create-task-form')
  createTaskBtn.addEventListener('submit', function(event){
    event.preventDefault()
    let selection = document.getElementById('parent-list').value
    let priority = document.getElementById('new-task-priority').value
    let description= document.getElementById("new-task-description").value

    document.getElementById('')






    let priority = ''
    let description = ''

  })

   let deleteBtn = document.getElementById(taskCounter)
    deleteBtn.onclick = function (event){
     event.target.className === 'delete-list' ? deleteBtn.remove() : console.log('f')
   }
}
  else {

    let taskList = document.createElement('div')
    taskCounter ++
    taskList.innerHTML += `<div id="lists">
<!-- begin list 1 -->
<div id='${taskCounter}'>
    <h2>${input}
      <button data-title="${taskCounter}" class="delete-list">
        X
      </button>
      </div>`
// end list 1

        appContainer.append(taskList)
        var x = document.getElementById("parent-list");
        var option = document.createElement("option");
        option.text = input;
        x.add(option);

        newListInput.value = ''
        document.getElementById('new-task-priority').value = ""
        document.getElementById("new-task-description").value = ""


    }
  })
})
