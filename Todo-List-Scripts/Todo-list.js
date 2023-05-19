

const todoList =['make dinner', 'wash dishes'];


function renderTodoList(){

  let todoListHTML = '';


  // Generating the HTML technique

for (let i = 0; i < todoList.length; i++){  
  const todo = todoList[i];   
  const html =`<p> ${todo}<button></button></p>`; 
  todoListHTML  += html;
}
console.log(todoListHTML);
document.querySelector('.js-todo-list')
.innerText = todoList;




}



function addTodo(){
 const inputElem = document.querySelector('.js-name-input');
 const name = inputElem.value;

 todoList.push(name);
 console.log(todoList);

 inputElem.value = '';
 
 renderTodoList();



}
