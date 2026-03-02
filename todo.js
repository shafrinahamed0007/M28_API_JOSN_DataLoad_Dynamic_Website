const todoLoad = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todoContainer");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    // console.log(todo)

    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
         <div class = "todoCard">
         <h4>${todo.title}</h4>
         <p>Completed: ${todo.completed == true ? `<i class="fa-regular fa-square-check" style="color: rgb(116, 192, 252);"></i>` : `<i class="fa-solid fa-x" style="color: rgb(116, 192, 252);"></i>`}
         
        
         </p>

         </div>
        
        `;

    todoContainer.append(todoCard);
  });
};

todoLoad();
