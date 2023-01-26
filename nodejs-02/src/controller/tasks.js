const tasks = [];
let id = 1;

//1. get tasks with query (allow query params for filtering)
const getAllTasks = (req, res) => {
  const { description, done } = req.query;
  let filteredTasks = tasks;
  if (description) {
    filteredTasks = filteredTasks.filter((task) =>
      task.description.includes(description)
    );
  }
  if (done) {
    filteredTasks = filteredTasks.filter((task) => {
      if (done === "true") {
        return task.done;
      }
      if (done === "false") {
        return !task.done;
      }
      return false;
    });
  }
  res.json(filteredTasks);
};

// 2. get task by id
const getTaskById = (req, res) => {
  const { id } = req.params;
  try {
    const task = tasks.find((task) => task.id === Number(id));
    res.json(task);
  } catch (error) {
    res.status(404).json("task not found");
  }
};

// 3. update task by id
const updateTaskById = (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    res.status(404).json({ error: "task not found" });
  }

  if (description) {
    task.description = description;
  }

  if (done != null) {
    task.done = !!done;
    //change the type to boolean
  }
  // Falsy value
  // negation, double negation
  // ! 'string' -> ! true -> false
  // ! '' -> ! false  -> true
  // !! 'string' -> true
  res.json(task);
};

// 4. create a new task
const addTask = (req, res) => {
  const { description } = req.body;
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
};

// 5. delete task by ID
const deleteTaskById = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex((task) => task.id === Number(id));
  // findIndex() if cannot find valid index, will return -1,so we need to something for -1:
  if (index === -1) {
    res.status(404).json({ error: "task not found" });
    return;
  }
  tasks.splice(index, 1); // splice() need to know the index,so we use findIndex earlier
  res.sendStatus(204); // if succeed, body will return 204:no content
};

module.exports = {
  getAllTasks,
  getTaskById,
  updateTaskById,
  addTask,
  deleteTaskById,
};
