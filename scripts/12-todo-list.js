const todolist = [{
  name : 'Todo 1',
  dueDate: '2024-12-17'
},
{
  name:'Todo 2',
  dueDate: '2024-12-17'
}];

renderTodoList();
function renderTodoList (){
  let todoListHtml ='';

  todolist.forEach((todoObject, index) =>{
    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;//generating html using JS
    todoListHtml+= html;
  })
  document.querySelector('.js-todo-list')
  .innerHTML=todoListHtml;

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todolist.splice(index, 1); 
        renderTodoList();
    })
  })
 /*we selected all the delete button of the page 
 - we loopes through the list using forEach
 - we added a click event listener and ran the code to remove todo item*/
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo();
})

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');//it is grabbing the value from the input box
  const name = inputElement.value;// here 'value' takes the input out that grabbed before as it represents the text of the text box
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todolist.push({
    //name : name,
    //dueDate: dueDate,
    name,
    dueDate
  });// here we're adding values to the array
  inputElement.value ='';// it resets the text of the text box
  renderTodoList();
}

//Main idea of JS
//1. Save the data 2. Generate the HTML 3. Make it interactive