const addbtn = document.getElementById("addBtn");
const taskinput = document.getElementById("taskInput");
const tasklist = document.getElementById("taskList");
addbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const results = document.querySelector('#results');
    if (taskinput.value.trim() === '') {
        results.innerHTML = `Alert : please enter a task`;
    }
    else {
        results.innerHTML = '';
        const list = document.createElement("li");
        list.innerHTML = taskinput.value;
        const complete = document.createElement("button");
        complete.innerHTML = "completed";
        complete.addEventListener("click", function (a) {
            a.preventDefault();
            list.style.textDecoration = "line-through";
            list.style.color = "gray";
        });
        const remove = document.createElement("button");
        remove.innerHTML = "remove";
        remove.addEventListener("click", function (b) {
            b.preventDefault();
            list.remove();
        });
        list.appendChild(complete);
        list.appendChild(remove);
        tasklist.appendChild(list);
        taskinput.value = '';
    }

});
