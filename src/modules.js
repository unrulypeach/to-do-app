const module = ((name) => {
  name:name;

  let library = [];

  function addTask(obj){
    library.push(obj)
  }

  function returnLib(){
    return library
  }

  function addTaskToDom(task){
    const parent = document.getElementById('tasks-container');
    parent.appendChild(displayTask(task));
  }

  function displayTask(obj) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const titleDescript = document.createElement('div');
    titleDescript.classList.add('task-center-container');

    // title: "pee"
    const title = document.createElement('h1');
    title.classList.add('task-title');
    title.innerHTML = obj.title;

    // description: "go piss girl"
    const descript = document.createElement('p');
    descript.classList.add('task-descript');
    descript.innerHTML = obj.description;

    // completeted: false
    const complete = document.createElement('input');
    complete.classList.add('task-progress');
    complete.type = 'checkbox';
    // dueDate: "2022-06-14"
    const date = document.createElement('p');
    date.classList.add('task-date');
    date.innerHTML = obj.dueDate;

    //icon for which library
    // const libLabel = document.createElement('span');
    // libLabel.classList.add('lib-icon');

    titleDescript.append(title, descript);
    taskContainer.append(complete, titleDescript, date);
    return taskContainer
  }

  return {
    addTask,
    returnLib,
    addTaskToDom,
  }
})();

export {module};