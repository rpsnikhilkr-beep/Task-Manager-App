function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskText;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.className = "delete";

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
