import {format, add} from 'date-fns';
import { getTodaysDate, getInputValues, newTask } from './task';
import { module } from './modules';
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

export default function createbar () {
  const div = document.createElement('div');
  div.classList.add('create-bar-container');

  const createTask = document.createElement('div');
  createTask.classList.add('create-opt');

  const createTaskTitle = document.createElement('h1');
  createTaskTitle.classList.add('create-bar-subhead');
  createTaskTitle.innerHTML = 'Create A Task';
  
  const taskForm = document.createElement('form');
  taskForm.id = 'create-form';;
  
  //title
  const taskTitle = document.createElement('input');
  taskTitle.classList.add('task-input');
  taskTitle.id = 'task-title';
  taskTitle.type = 'text';
  taskTitle.placeholder = 'Name';

  //description
  const taskDescript = document.createElement('textarea');
  taskDescript.classList.add('task-input');
  taskDescript.id = 'task-descript';
  taskDescript.placeholder = 'Description..';
  
  //date
  const taskDate = document.createElement('input');
  taskDate.classList.add('task-input')
  taskDate.type = 'date';
  taskDate.value = getTodaysDate();

  //urgent
  const taskUrgentLabel = document.createElement('label');
  taskUrgentLabel.classList.add('control-checkbox');
  taskUrgentLabel.classList.add('control')

  const tUrgentTitle = document.createElement('span');
  tUrgentTitle.innerHTML = 'Urgent?'

  const taskUrgent = document.createElement('input');
  taskUrgent.type = 'checkbox';

  const myCheck = document.createElement('div');
  myCheck.classList.add('control_indicator');

  //tags
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('tags-container');

  const personalTag = document.createElement('a');
  const pIcon = new Image (22, 22);
  pIcon.src = personalIconPic;
  pIcon.classList.add('icon-purple');

  const workTag = document.createElement('a');
  const wIcon = new Image (22, 22);
  wIcon.src = workIconPic;
  wIcon.classList.add('icon-purple'); 

  const tagsDropdown = document.createElement('div');
  tagsDropdown.classList.add('dropdown');

  const tagsBtn = document.createElement('button');
  tagsBtn.classList.add('dropbtn');
  tagsBtn.innerHTML = 'other';

  const tagsList = document.createElement('div');
  tagsList.classList.add('dropdown-content');

  //travel
  const tagTravel = document.createElement('a');
  tagTravel.classList.add('unused');
  const travelIcon = new Image (20, 20);
  travelIcon.src = travelPic;
  travelIcon.classList.add('dropdown-icons');

  //dining
  const tagDine = document.createElement('a');
  tagDine.classList.add('unused');
  const dineIcon = new Image (20, 20);
  dineIcon.src = dinePic;
  dineIcon.classList.add('dropdown-icons');
  
  //cake
  const tagCake = document.createElement('a');
  tagCake.classList.add('unused');
  const cakeIcon = new Image (20, 20);
  cakeIcon.src = cakePic;
  cakeIcon.classList.add('dropdown-icons');

  //weights
  const tagWeight = document.createElement('a');
  tagWeight.classList.add('unused');
  const weightIcon = new Image (20, 20);
  weightIcon.src = weightsPic;
  weightIcon.classList.add('dropdown-icons');

  //meeting
  const tagMeet = document.createElement('a');
  tagMeet.classList.add('unused');
  const meetIcon = new Image (20, 20);
  meetIcon.src = meetPic;
  meetIcon.classList.add('dropdown-icons');

  //star
  const tagStar = document.createElement('a');
  tagStar.classList.add('unused');
  const starIcon = new Image (20, 20);
  starIcon.src = starPic;
  starIcon.classList.add('dropdown-icons');

  //megaphone
  const tagMegafone = document.createElement('a');
  tagMegafone.classList.add('unused');
  const megafoneIcon = new Image (22, 22);
  megafoneIcon.src = megaphonePic;
  megafoneIcon.classList.add('dropdown-icons');

  //skate
  const tagSkate = document.createElement('a');
  tagSkate.classList.add('unused');
  const skateIcon = new Image (20, 20);
  skateIcon.src = skatePic;
  skateIcon.classList.add('dropdown-icons');

  //beer
  const tagBeer = document.createElement('a');
  tagBeer.classList.add('unused');
  const beerIcon = new Image (20, 20);
  beerIcon.src = beerPic;
  beerIcon.classList.add('dropdown-icons');

  const taskBtn = document.createElement('button');
  taskBtn.classList.add('submit-button');
  taskBtn.type = 'button';
  taskBtn.innerHTML = 'create task';
  taskBtn.addEventListener('click', e => {
    const task = newTask(getInputValues(e.target.parentElement.id));
    module.addTask(task);
    module.addTaskToDom(task);
    module.returnLib();
  });

  //appending

  const taskBtmRow = document.createElement('div');
  taskBtmRow.classList.add('form-lastrow');

  personalTag.appendChild(pIcon);
  workTag.appendChild(wIcon);
  tagTravel.appendChild(travelIcon);
  tagDine.appendChild(dineIcon);
  tagCake.appendChild(cakeIcon);
  tagWeight.appendChild(weightIcon);
  tagMeet.appendChild(meetIcon);
  tagStar.appendChild(starIcon);
  tagMegafone.appendChild(megafoneIcon);
  tagSkate.appendChild(skateIcon);
  tagBeer.appendChild(beerIcon);

  tagsList.append(
    tagTravel,
    tagDine,
    tagCake,
    tagWeight,
    tagMeet,
    tagStar,
    tagMegafone,
    tagSkate,
    tagBeer
  );

  tagsDropdown.append(tagsBtn, tagsList);

  tagsContainer.append(personalTag, workTag, tagsDropdown, taskBtn);

  taskUrgentLabel.append(tUrgentTitle, taskUrgent, myCheck);
  taskBtmRow.append(taskDate, taskUrgentLabel)

  taskForm.append(taskTitle, taskDescript, taskBtmRow, tagsContainer);
  
  createTask.append(createTaskTitle, taskForm);
  div.append(createTask);

  return div;
}