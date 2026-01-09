let todoElemet=[{
    text:"LEARN HTML"
},{
    text:"LEARN CSS"
},{
    text:"LEARN JavaScript"
}];

let storedTodos = localStorage.getItem("suri");

if (storedTodos !== null) {
  todoElemet = JSON.parse(storedTodos);
}

//First step create a website background color its look very good 
let todoContainer = document.createElement("div");
todoContainer.classList.add("todoContainerStyle");
document.body.appendChild(todoContainer);

//Second step create a main heading 
let mainHeading =document.createElement("h1");
mainHeading.textContent="Todos";
mainHeading.classList.add("mainHeadingStyle");
todoContainer.appendChild(mainHeading);

//Third step Create a input element heading text
let createTaskElement=document.createElement("h1");
createTaskElement.textContent="Create Your Task";
createTaskElement.classList.add("createTaskElementStyle")
todoContainer.appendChild(createTaskElement);

//Fourth step Create a input element type text 
let inputElement=document.createElement("input");
inputElement.placeholder="Hey what do you want"
inputElement.type="text";
inputElement.id="userinput";
inputElement.classList.add("inputElementStyle")
todoContainer.appendChild(inputElement);


//fifth step Create A button 

let buttonElement=document.createElement("button");
buttonElement.textContent="ADD TASK";
buttonElement.onclick=function(){addTask()};
buttonElement.classList.add("btn","btn-primary","buttonElementStyle");
todoContainer.appendChild(buttonElement);

//sixth step create a your task heading 

let taskHeadingElement=document.createElement("h1");
taskHeadingElement.textContent="Your Tasks";
taskHeadingElement.classList.add("taskHeadingElementStyle");
todoContainer.appendChild(taskHeadingElement);

//Function user input taking 

function addTask(){
    let UserInputElement=document.getElementById("userinput").value;
    console.log(UserInputElement);
    let newTodo={
        text:UserInputElement
    }
    todoElemet.push(newTodo);
    todo(newTodo);
    localStorage.setItem("suri", JSON.stringify(todoElemet));
    document.getElementById("userinput").value = "";

}
console.log(todoElemet)
//Function add reuse
let uniqueid=1
function todo(todoItem,index){
//Seventh step create a container element because checkbox and label container side by side
let checkboxContainer=document.createElement("div");
checkboxContainer.classList.add("checkboxContainerStyle","d-flex","flex-row")
todoContainer.appendChild(checkboxContainer);

//eight step create inbox element 

let inboxElement=document.createElement("input");
inboxElement.type="checkbox";
inboxElement.id=uniqueid;
inboxElement.onclick=function(){
    if (inboxElement.checked===true){
        labelElement.classList.add("labelElementtextline");
    }
    else{
        labelElement.classList.remove("labelElementtextline");
    }
}
inboxElement.classList.add("inboxElementStyle");
checkboxContainer.appendChild(inboxElement);

//nineth step create label container
let labelContainer=document.createElement("div");
labelContainer.classList.add("labelContainerStyle","d-flex");
checkboxContainer.appendChild(labelContainer);
//let labelElement create 
let labelElement=document.createElement("label");
labelElement.textContent=todoItem.text;
labelElement.setAttribute("for",uniqueid);
labelElement.classList.add("labelElmentStyle");
labelContainer.appendChild(labelElement);

//create delete icon 
let deleteIcon=document.createElement("i");
deleteIcon.classList.add("fa","fa-trash","deleteIconStyle");
labelContainer.appendChild(deleteIcon);
deleteIcon.onclick = function () {
    todoElemet.splice(index, 1);
    localStorage.setItem("suri", JSON.stringify(todoElemet));
    checkboxContainer.remove();}
uniqueid=uniqueid+1;
}
for (let eachItem in todoElemet){
    todo(todoElemet[eachItem]);
}
for (let index in todoElement) {
  todo(todoElement[index], index);
}
