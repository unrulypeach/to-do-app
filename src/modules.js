const module = (() => {
  let library = [];

  function addTask(obj){
    library.push(obj)
  }

  function returnLib(){
    return library
  }

  function filterUrgentItems(){
    const filtered = library.filter(i => i.urgent === true);
    console.log(filtered);
    refreshScreen(filtered);
  }
  function refreshScreen(arr){
    //delete tasks in task container
    removeAllTasks();
    //cycle through arr and displayTask(arr[i])
    for (let item in arr) {
      addTaskToDom(arr[item])
    }
  }
  function removeAllTasks(){
    let container = document.getElementById('tasks-container').childNodes;
    let containerItems = container.length -1;

    for (let i=containerItems; i>=0; i--) {
      container[i].remove();
    }
    
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

    const timeContainer = document.createElement('div');

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

    //urgent: true
    //red outline around completed button
    const bContain = document.createElement('label');

    const bInput = document.createElement('div');
    

    //urgent == true ? add special class
    if (obj.urgent == true) {
      bContain.classList.add('u-contain');
      bInput.classList.add('u-input');
    } else {
      bContain.classList.add('b-contain');
      bInput.classList.add('b-input');
    }

    //icon for which library
    // const libLabel = document.createElement('span');
    // libLabel.classList.add('lib-icon');
    bContain.append(complete, bInput);
    titleDescript.append(title, descript);
    taskContainer.append(bContain, titleDescript, date);
    return taskContainer
  }

  return {
    library,
    addTask,
    returnLib,
    filterUrgentItems,
    refreshScreen,
    addTaskToDom
  }
})();

export {module};