import { getTodaysDate } from './task';
import garbagePic from './assets/garbage0.svg';
import personalIconPic from './assets/cottageFILL.svg';
import workIconPic from './assets/workFILL.svg';
import travelPic from './assets/luggageFILL.svg';
import dinePic from './assets/dineFILL.svg';
import cakePic from './assets/cakeFILL.svg';
import weightsPic from './assets/weightsFILL.svg';
import meetPic from './assets/meetingsFILL.svg';
import starPic from './assets/starFILL.svg';
import megaphonePic from './assets/megaphoneFILL.svg';
import skatePic from './assets/skateFILL.svg';
import beerPic from './assets/beerFILL.svg';
import { removeTaskFromDb, toggleTaskInDb, isUserSignedIn } from '.';

const component = (() => {
  const library = [
    {
      completed: true,
      createDate: '2022-06-18',
      description: 'today, upcoming, urgent',
      dueDate: '2022-06-18',
      tags: 'personal work',
      title: 'DEMO task 1',
      urgent: true,
    },
    {
      completed: false,
      createDate: '2022-06-18',
      description: 'today, upcoming',
      dueDate: '2022-06-18',
      tags: 'personal',
      title: 'DEMO task 2',
      urgent: false,
    },
    {
      completed: false,
      createDate: '2022-06-18',
      description: 'upcoming, urgent',
      dueDate: '2022-06-19',
      tags: 'work',
      title: 'DEMO task 3',
      urgent: true,
    },
    {
      completed: false,
      createDate: '2022-06-18',
      description: 'upcoming',
      dueDate: '2022-06-19',
      tags: 'work personal travel',
      title: 'DEMO task 4',
      urgent: false,
    },
  ];

  function addTask(obj) {
    library.push(obj);
  }

  function returnLib() {
    return library;
  }

  // remove tasks on DOM
  function removeAllTasks() {
    const container = document.getElementById('tasks-container').childNodes;
    const containerItems = container.length - 1;

    for (let i = containerItems; i >= 0; i -= 1) {
      container[i].remove();
    }
  }

  function deleteTask(title, descript) {
    // find obj in librar, return ind
    const ind = library.findIndex((elem) => elem.title === title && elem.description === descript);
    // remove library.ind
    library.splice(ind, 1);
  }

  // function deleteLibrary() {}

  function displayTask(obj, uid) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.id = uid;
    if (obj.completed === true) {
      taskContainer.classList.add('task-complete');
    }

    const titleDescript = document.createElement('div');
    titleDescript.classList.add('task-center-container');

    // title
    const title = document.createElement('h1');
    title.classList.add('task-title');
    title.contentEditable = 'true';
    title.innerHTML = obj.title;

    // description
    const descript = document.createElement('p');
    descript.classList.add('task-descript');
    descript.contentEditable = 'true';
    descript.innerHTML = obj.description;

    // completeted: bool
    const complete = document.createElement('input');
    complete.classList.add('task-progress');
    complete.type = 'checkbox';
    if (obj.completed === true) {
      complete.checked = true;
    }
    complete.addEventListener('change', (e) => {
      if (isUserSignedIn()) {
        toggleTaskInDb(e.target.parentNode.parentNode.id, 'completed');
        if (e.target.checked === true) {
          e.target.parentElement.parentElement.classList.add('task-complete');
        } else {
          e.target.parentElement.parentElement.classList.remove('task-complete');
        }
      } else {
        const ind = library.findIndex((elem) => elem.title === obj.title
        && elem.description === obj.description
        && elem.createDate === obj.createDate
        && elem.dueDate === obj.dueDate);
        if (e.target.checked === true) {
          // set complete = true in library
          library[ind].completed = true;
          // set a classname in parent div
          e.target.parentElement.parentElement.classList.add('task-complete');
        } else {
          library[ind].completed = false;
          e.target.parentElement.parentElement.classList.remove('task-complete');
        }
      }
    });

    // dueDate: "2022-06-14"
    const date = document.createElement('p');
    date.classList.add('task-date');
    date.contentEditable = 'true';
    date.innerHTML = obj.dueDate.slice(5);

    // urgent: true
    // red outline around completed button
    const bContain = document.createElement('label');
    const bInput = document.createElement('div');

    // urgent == true ? add special class
    if (obj.urgent === true) {
      bContain.classList.add('u-contain');
      bInput.classList.add('u-input');
    } else {
      bContain.classList.add('b-contain');
      bInput.classList.add('b-input');
    }

    // tags
    const tagSpan = document.createElement('span');
    tagSpan.classList.add('task-tag-span');

    if (obj.tags.includes('personal')) {
      const anIcon = new Image(18, 18);
      anIcon.src = personalIconPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('work')) {
      const anIcon = new Image(18, 18);
      anIcon.src = workIconPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('travel')) {
      const anIcon = new Image(18, 18);
      anIcon.src = travelPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('dining')) {
      const anIcon = new Image(18, 18);
      anIcon.src = dinePic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('birthdays')) {
      const anIcon = new Image(18, 18);
      anIcon.src = cakePic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('excercise')) {
      const anIcon = new Image(18, 18);
      anIcon.src = weightsPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('meetings')) {
      const anIcon = new Image(18, 18);
      anIcon.src = meetPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('favorites')) {
      const anIcon = new Image(18, 18);
      anIcon.src = starPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('campaigning')) {
      const anIcon = new Image(18, 18);
      anIcon.src = megaphonePic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('intramural')) {
      const anIcon = new Image(18, 18);
      anIcon.src = skatePic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }
    if (obj.tags.includes('drinks')) {
      const anIcon = new Image(18, 18);
      anIcon.src = beerPic;
      anIcon.classList.add('task-tags');
      tagSpan.appendChild(anIcon);
    }

    // edit button
    // const editBtn = document.createElement('span');
    // const editPic = new Image (20, 20);
    // editPic.src = pencilPic;
    // editPic.classList.add('icon-center');

    function getTaskTitleFromDeleteBtn(ev) {
      return ev.target.parentNode.parentNode.childNodes[1].childNodes[0].innerText;
    }

    function getTaskDescriptFromDeleteBtn(ev) {
      return ev.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
    }

    // delete button
    const delBtn = document.createElement('span');
    delBtn.classList.add('del-span');
    const delPic = new Image(20, 20);
    delPic.src = garbagePic;
    delPic.classList.add('icon-center');
    delBtn.addEventListener('click', (e) => {
      // visual removal (but can change to refreshScreen after item removed from lib)
      e.target.parentNode.parentNode.remove();

      // remove from db
      if (isUserSignedIn()) {
        removeTaskFromDb(e.target.parentNode.parentNode.id);
      } else {
        // remove from library
        deleteTask(getTaskTitleFromDeleteBtn(e), getTaskDescriptFromDeleteBtn(e));
      }
    });

    // editBtn.appendChild(editPic);
    delBtn.appendChild(delPic);
    bContain.append(complete, bInput);
    titleDescript.append(title, descript);
    taskContainer.append(
      bContain,
      titleDescript,
      tagSpan,
      date,
      delBtn,
    );
    return taskContainer;
  }

  function addTaskToDom(task, uid) {
    const parent = document.getElementById('tasks-container');
    (uid === undefined)
      ? parent.appendChild(displayTask(task))
      : parent.appendChild(displayTask(task, uid));
  }

  function refreshScreen(arr) {
    removeAllTasks();

    arr.forEach((elem) => {
      addTaskToDom(elem);
    });
  }

  function filterSearchItems(item) {
    const currLib = returnLib();
    const filtered = [];
    if (item !== '') {
      for (let i = 0; i < currLib.length; i += 1) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const thing in currLib[i]) {
          const currTask = currLib[i][thing];
          if (typeof currTask !== 'boolean') {
            if (currTask.includes(item)) {
              filtered.push(currLib[i]);
            }
          }
        }
      }
      refreshScreen(filtered);
    } else {
      refreshScreen(currLib);
    }
  }

  function filterTodayItems() {
    const filtered = library.filter((i) => i.dueDate === getTodaysDate());
    refreshScreen(filtered);
  }

  function filterUrgentItems() {
    const filtered = library.filter((i) => i.urgent === true);
    refreshScreen(filtered);
  }

  function filterPersonalItems() {
    const filtered = library.filter((i) => i.tags.includes('personal'));
    refreshScreen(filtered);
  }

  function filterWorkItems() {
    const filtered = library.filter((i) => i.tags.includes('work'));
    refreshScreen(filtered);
  }

  function createFilter(tagName, tagSrc) {
    const editedTagName = tagName.slice(4);

    const newDiv = document.createElement('li');
    newDiv.classList.add('type-opt');
    newDiv.id = `nav${editedTagName}`;

    const iconSpan = document.createElement('span');

    const iconPic = new Image(20, 20);
    iconPic.src = tagSrc;
    iconPic.classList.add('icon-white');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('sort-title');
    titleSpan.innerHTML = editedTagName;

    newDiv.addEventListener('click', () => {
      const filtered = library.filter((i) => i.tags.includes(editedTagName.toLowerCase()));
      refreshScreen(filtered);
    });

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-task-tag');
    delBtn.innerHTML = '-';
    delBtn.addEventListener('click', (e) => {
      refreshScreen(returnLib());
      e.target.parentNode.remove();
      e.stopPropagation();
    });

    iconSpan.append(iconPic);
    newDiv.append(iconSpan, titleSpan, delBtn);
    document.body.childNodes[1].childNodes[0].childNodes[3].appendChild(newDiv);
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
    removeAllTasks,
    refreshScreen,
    addTaskToDom,
  };
})();

export { component };
