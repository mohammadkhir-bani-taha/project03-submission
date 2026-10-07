const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

function updateTaskCount() {
    taskCount.textContent = totalTasks;
}

function addTask() {

    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = taskText;

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    totalTasks++;

    updateTaskCount();

    taskInput.value = "";

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function (event) {

        event.stopPropagation();

        li.remove();

        totalTasks--;

        updateTaskCount();
    });
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTask();
    }
});