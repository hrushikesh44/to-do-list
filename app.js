const taskInput = document.querySelector("#to-do");
const addButton = document.querySelector("#add-btn");
const deleteButton = document.querySelector(".delete-btn");
const todoList = document.querySelector(".task-list");

function addTodo() {
    const taskValue = taskInput.value ;
    if (taskValue == '') {
        alert ("Enter your task in Input Area");
    }else{
        console.log(taskValue);

        const list = document.createElement("li");
        list.className = "task-list";
        const taskList = document.createTextNode(taskValue);
        list.appendChild(taskList);
        document.getElementById("list-container").appendChild(list);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn"
        deleteBtn.innerText = "Delete";
        list.appendChild(deleteBtn);
        deleteBtn.onclick = remo
    }

}

addButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", function(){
    console.log("delete button is clicked");
    // document.getElementsByClassName
})


