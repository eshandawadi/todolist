let task = [];
let id = 1;
let editStatus = false;
// const newTasks = tasks.map((task) => {
//   return {
//     id: task.id,
//     name: task.title,
//   };
// });
document.getElementById("buttonArea").innerHTML =
  "<button class='btn add' onClick='{addTask()}'>Add Task</button>";

const addButton = () => {
  document.getElementById("buttonArea").innerHTML =
    "<button class='btn add' onClick='{addTask()}'>Add Task</button>";
};

const editButton = () => {
  document.getElementById("buttonArea").innerHTML =
    "<button class='btn add' onClick='{update()}'>Update Task</button>";
};
const displayTasks = () => {
  document.getElementById("displayTask").innerHTML = task.map(
    (value) =>
      // `<div class="flex-area"><h1>${value.title}<h1><button onclick="editTask(${value.id})">Edit</button></div>
      // <div class="flex-area"><h1>${value.description}<h1><button onclick="editTask(${value.id})">Edit</button></div>`
      `<div class="flex-area">
      <div class="task-content">
        <div class="task-title">${value.title}</div>
        <div class="task-description">${value.description}</div>
      </div>
      <div class="button-area">
        <button class="btn edit" onClick="editTask(${value.id})">
          Edit
        </button>
        <button class="btn delete" onClick="deleteTask(${value.id})">
          Delete
        </button>
      </div>
    </div>`
  );
};

const addTask = () => {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;
  task.push({ id: id, title: title, description: description });
  id++;
  displayTasks();
};



const editTask = (id) => {
  let proper = task.filter((task) => task.id == id);
  editStatus = true;
  editButton();
  console.log(proper);
  document.getElementById("index").value = id;
  document.getElementById("title").value = proper[0].title;
  document.getElementById("desc").value = proper[0].description;
};

const deleteTask = (id) => {
  task = task.filter((task) => task.id !== id);
  displayTasks();
};
displayTasks();

const update = () => {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;
  let id = document.getElementById("index").value;
  console.log(title, description, id);
  task.map((t) => {
    if (t.id == id) {
      (t.title = title), (t.description = description);
    }
  });
  addButton();

  // task.push({ id: id, title: title, description: description });
  displayTasks();
};
