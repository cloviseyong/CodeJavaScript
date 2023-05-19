const todoList =[];

function addTodo(){
 const inputElem = document.querySelector('.js-name-input');
 const name = inputElem.value;

 todoList.push(name);
 console.log(todoList);

 inputElem.value = '';

}
