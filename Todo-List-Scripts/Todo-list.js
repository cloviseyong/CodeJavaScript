
const todoList =['make dinner', 'wash dishes'];
let todoListHTML = '';


for (let i = 0; i < todoList.length; i++){  /* looping through */
  const todo = todoList[i];   /* variable to store the list */
  const html =`<p> ${todo}</p>`; /* html to put the list items */
  todoListHTML  += html;
}
console.log(todoListHTML);
document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;

function addTodo(){
 const inputElem = document.querySelector('.js-name-input');
 const name = inputElem.value;

 todoList.push(name);
 console.log(todoList);

 inputElem.value = '';

}
