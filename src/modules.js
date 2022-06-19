import { compareAsc, format } from 'date-fns';
import { getTodaysDate } from './task';
import garbagePic from './garbage0.svg';
import pencilPic from './edit0.svg';

const module = (() => {
  let library = [
    {
      completed: false,
      createDate: "2022-06-18",
      description: "today, upcoming, urgent",
      dueDate: "2022-06-18",
      title: "task 1",
      urgent: true
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "today, upcoming",
      dueDate: "2022-06-18",
      title: "task 2",
      urgent: false
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "upcoming, urgent",
      dueDate: "2022-06-19",
      title: "task 3",
      urgent: true
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "upcoming",
      dueDate: "2022-06-19",
      title: "task 4",
      urgent: false
    }
  ];

  function addTask(obj){
    library.push(obj)
  }

  function createNewLibrary(libName) {
    
  }

  function returnLib(){
    console.log(library);
    return library
  } 

  function filterTodayItems(){
    const filtered = library.filter(i => i.dueDate == getTodaysDate());
    refreshScreen(filtered);
  }

  function filterUrgentItems(){
    const filtered = library.filter(i => i.urgent === true);
    refreshScreen(filtered);
  }

  function refreshScreen(arr){
    removeAllTasks();
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
    date.innerHTML = obj.dueDate.slice(5);

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

    //tags

    //edit button
    const editBtn = document.createElement('span');
    const editPic = new Image (20, 20);
    editPic.src = pencilPic;
    editPic.classList.add('icon-center');

    //delete button
    const delBtn = document.createElement('span');
    const delPic = new Image (20, 20);
    delPic.src = garbagePic;
    delPic.classList.add('icon-center');
    delBtn.addEventListener('click', e => {
      e.target.parentNode.parentNode.remove();
    })
    
    editBtn.appendChild(editPic)
    delBtn.appendChild(delPic);
    bContain.append(complete, bInput);
    titleDescript.append(title, descript);
    taskContainer.append(bContain, titleDescript, date, editBtn, delBtn);
    return taskContainer
  }

  return {
    addTask,
    returnLib,
    filterTodayItems,
    filterUrgentItems,
    refreshScreen,
    addTaskToDom
  }
})();

export {module};