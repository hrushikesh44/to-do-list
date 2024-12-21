let currentIndex = 3;

    function addTodo() {
      const inputEl = document.getElementById("inp");
      const todoText = inputEl.value.trim();

      if (todoText === '') {
        alert('Please enter a todo item.');
        return;
      }

      const parentEl = document.getElementById("todos");

      const newTodo = document.createElement('div');
      newTodo.className = "taskdiv";
      newTodo.setAttribute("id", 'todo-' + currentIndex);

      const newHeading = document.createElement('h4');
      newHeading.textContent = currentIndex + '. ' + todoText;

      const newButton = document.createElement('button');
      newButton.textContent = 'Delete';
      newButton.className = "delete-btn";
      newButton.setAttribute("onclick", "deleteTodo(" + currentIndex + ")");

      newTodo.appendChild(newHeading);
      newTodo.appendChild(newButton);

      parentEl.appendChild(newTodo);

      currentIndex++;

      inputEl.value = '';
    }

    function deleteTodo(index) {
      const element = document.getElementById("todo-" + index);
      if (element) {
        element.parentNode.removeChild(element);
      }
    }