
const input = document.querySelector(".input-area input");
const addBtn = document.querySelector(".input-area button");
const taskList = document.querySelector(".tasks");


addBtn.addEventListener("click", addTask);


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});


function addTask() {
  let taskText = input.value.trim();

  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <button>✕</button>
  `;

  
  taskList.appendChild(li);

  input.value = "";

  // Delete button functionality
  li.querySelector("button").addEventListener("click", function() {
    li.remove();
  });
}


const deleteButtons = document.querySelectorAll(".tasks li button");

deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    button.parentElement.remove();
  });
});