import { compareAsc, format } from 'date-fns';
import { getTodaysDate } from './task';
import garbagePic from './garbage0.svg';
import pencilPic from './edit0.svg';
import personalIconPic from './cottageFILL.svg';
import workIconPic from './workFILL.svg';
import travelPic from './luggageFILL.svg';
import dinePic from './dineFILL.svg';
import cakePic from './cakeFILL.svg';
import weightsPic from './weightsFILL.svg';
import meetPic from './meetingsFILL.svg';
import starPic from './starFILL.svg';
import megaphonePic from './megaphoneFILL.svg';
import skatePic from './skateFILL.svg';
import beerPic from './beerFILL.svg';

const module = (() => {
  let library = [
    {
      completed: false,
      createDate: "2022-06-18",
      description: "today, upcoming, urgent",
      dueDate: "2022-06-18",
      tags: "personal work",
      title: "task 1",
      urgent: true
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "today, upcoming",
      dueDate: "2022-06-18",
      tags: "personal",
      title: "task 2",
      urgent: false
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "upcoming, urgent",
      dueDate: "2022-06-19",
      tags: "work",
      title: "task 3",
      urgent: true
    },
    {
      completed: false,
      createDate: "2022-06-18",
      description: "upcoming",
      dueDate: "2022-06-19",
      tags: "work personal travel",
      title: "task 4",
      urgent: false
    }
  ];

  function addTask(obj){
    console.log(obj);
    library.push(obj)
  }

  function returnLib(){
    console.log(library);
    return library
  } 

  function filterSearchItems(item) {
    const filtered = [];

    for (let task in library) {
      const curr = Object.entries(library[task]);

      for (let item in curr) {
        const prop = curr[item][1];

        if (typeof prop != "boolean") {

          if (prop.includes(item)) {

            filtered.push(library[task]);
          }
        }
      }
    }
    console.log(filtered);
    refreshScreen(filtered);
  }

  function filterTodayItems(){
    const filtered = library.filter(i => i.dueDate == getTodaysDate());
    refreshScreen(filtered);
  }

  function filterUrgentItems(){
    const filtered = library.filter(i => i.urgent === true);
    refreshScreen(filtered);
  }

  function filterPersonalItems(){
    const filtered = library.filter(i => i.tags.includes('personal'));
    refreshScreen(filtered);
  }

  function filterWorkItems(){
    const filtered = library.filter(i => i.tags.includes('work'));
    refreshScreen(filtered);
  }

  function createFilter(tagName, tagSrc){
    const editedTagName = tagName.slice(4);
    
    const newDiv = document.createElement('li');
    newDiv.classList.add('type-opt');
    newDiv.id = `nav${editedTagName}`

    const iconSpan = document.createElement('span');

    const iconPic = new Image (20, 20);
    iconPic.src = tagSrc;
    iconPic.classList.add('icon-white');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('sort-title');
    titleSpan.innerHTML = editedTagName;

    newDiv.addEventListener('click', e => {
      const filtered = library.filter(i => i.tags.includes(editedTagName.toLowerCase()));
      console.log(filtered);
      refreshScreen(filtered);
    })

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-task-tag');
    delBtn.addEventListener('click', e => {
      console.log(e.target);
      refreshScreen(returnLib()); //this is not working, page is not refreshing with full library
      e.target.parentNode.remove();
      e.stopPropagation
    })


    iconSpan.append(iconPic);
    newDiv.append(iconSpan, titleSpan, delBtn);
    document.body.childNodes[1].childNodes[0].childNodes[2].appendChild(newDiv);
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
    const tagSpan = document.createElement('span');
    if (obj.tags.includes('personal')) {
      const anIcon = new Image (18, 18);
      anIcon.src = personalIconPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('work')) {
      const anIcon = new Image (18, 18);
      anIcon.src = workIconPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('travel')){
      const anIcon = new Image (18, 18);
      anIcon.src = travelPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('dining')){
      const anIcon = new Image (18, 18);
      anIcon.src = dinePic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('birthdays')){
      const anIcon = new Image (18, 18);
      anIcon.src = cakePic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('excercise')){
      const anIcon = new Image (18, 18);
      anIcon.src = weightsPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('meetings')){
      const anIcon = new Image (18, 18);
      anIcon.src = meetPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('favorites')){
      const anIcon = new Image (18, 18);
      anIcon.src = starPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('campaigning')){
      const anIcon = new Image (18, 18);
      anIcon.src = megaphonePic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('intramural')){
      const anIcon = new Image (18, 18);
      anIcon.src = skatePic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('drinks')){
      const anIcon = new Image (18, 18);
      anIcon.src = beerPic;
      anIcon.classList.add('icon-purple');
      tagSpan.appendChild(anIcon);
    }

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
    taskContainer.append(
      bContain,
      titleDescript,
      tagSpan,
      date,
      editBtn,
      delBtn
    );
    return taskContainer
  }

  return {
    addTask,
    returnLib,
    filterSearchItems,
    filterTodayItems,
    filterUrgentItems,
    filterPersonalItems,
    filterWorkItems,
    createFilter,
    refreshScreen,
    addTaskToDom
  }
})();

export {module};