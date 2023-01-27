import selectTag from './selectTag';
import { getTodaysDate, getInputValues, newTask } from './task';
import { component } from './component';
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

function createbar() {
  const div = document.createElement('div');
  div.classList.add('create-bar-container');

  const closeBar = document.createElement('button');
  closeBar.classList.add('close-create-bar');
  closeBar.innerHTML = 'X';
  closeBar.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.classList.toggle('hide');
  });

  const createTask = document.createElement('div');
  createTask.classList.add('create-opt');

  const createTaskTitle = document.createElement('h1');
  createTaskTitle.classList.add('create-bar-subhead');
  createTaskTitle.innerHTML = 'Create A Task';

  const taskForm = document.createElement('form');
  taskForm.id = 'create-form';

  // title
  const taskTitle = document.createElement('input');
  taskTitle.classList.add('task-input');
  taskTitle.id = 'task-title';
  taskTitle.type = 'text';
  taskTitle.placeholder = 'Name';

  // description
  const taskDescript = document.createElement('textarea');
  taskDescript.classList.add('task-input');
  taskDescript.id = 'task-descript';
  taskDescript.placeholder = 'Description..';

  // date
  const taskDate = document.createElement('input');
  taskDate.classList.add('task-input');
  taskDate.type = 'date';
  taskDate.value = getTodaysDate();

  // urgent
  const taskUrgentLabel = document.createElement('label');
  taskUrgentLabel.classList.add('control-checkbox');
  taskUrgentLabel.classList.add('control');

  const tUrgentTitle = document.createElement('span');
  tUrgentTitle.innerHTML = 'Urgent?';

  const taskUrgent = document.createElement('input');
  taskUrgent.classList.add('task-input');
  taskUrgent.type = 'checkbox';

  const myCheck = document.createElement('div');
  myCheck.classList.add('control_indicator');

  // tags
  const tagsContainer = document.createElement('div');
  tagsContainer.classList.add('tags-container');

  // personal
  const personalTag = document.createElement('a');
  const pIcon = new Image(22, 22);
  pIcon.src = personalIconPic;
  pIcon.classList.add('icon-purple');
  pIcon.classList.add('unused');
  pIcon.id = 'personal';
  personalTag.addEventListener('click', (e) => {
    selectTag(e);
  });

  // work
  const workTag = document.createElement('a');
  const wIcon = new Image(22, 22);
  wIcon.src = workIconPic;
  wIcon.classList.add('icon-purple');
  wIcon.classList.add('unused');
  wIcon.id = 'work';
  workTag.addEventListener('click', (e) => {
    selectTag(e);
  });

  // dropdown
  const tagsDropdown = document.createElement('div');
  tagsDropdown.classList.add('dropdown');

  const tagsBtn = document.createElement('button');
  tagsBtn.classList.add('dropbtn');
  tagsBtn.innerHTML = 'other';

  const tagsList = document.createElement('div');
  tagsList.classList.add('dropdown-content');

  // travel
  const tagTravel = document.createElement('a');
  tagTravel.href = '#';
  const travelIcon = new Image(20, 20);
  travelIcon.src = travelPic;
  travelIcon.classList.add('dropdown-icons');
  travelIcon.classList.add('unused');
  travelIcon.id = 'travel';
  tagTravel.addEventListener('click', (e) => {
    selectTag(e);
  });

  // dining
  const tagDine = document.createElement('a');
  tagDine.href = '#';
  const dineIcon = new Image(20, 20);
  dineIcon.src = dinePic;
  dineIcon.classList.add('dropdown-icons');
  dineIcon.classList.add('unused');
  dineIcon.id = 'dining';
  tagDine.addEventListener('click', (e) => {
    selectTag(e);
  });

  // cake
  const tagCake = document.createElement('a');
  tagCake.href = '#';
  const cakeIcon = new Image(20, 20);
  cakeIcon.src = cakePic;
  cakeIcon.classList.add('dropdown-icons');
  cakeIcon.classList.add('unused');
  cakeIcon.id = 'birthdays';
  tagCake.addEventListener('click', (e) => {
    selectTag(e);
  });

  // weights
  const tagWeight = document.createElement('a');
  tagWeight.href = '#';
  const weightIcon = new Image(20, 20);
  weightIcon.src = weightsPic;
  weightIcon.classList.add('dropdown-icons');
  weightIcon.classList.add('unused');
  weightIcon.id = 'excercise';
  tagWeight.addEventListener('click', (e) => {
    selectTag(e);
  });

  // meeting
  const tagMeet = document.createElement('a');
  tagMeet.href = '#';
  const meetIcon = new Image(20, 20);
  meetIcon.src = meetPic;
  meetIcon.classList.add('dropdown-icons');
  meetIcon.classList.add('unused');
  meetIcon.id = 'meetings';
  tagMeet.addEventListener('click', (e) => {
    selectTag(e);
  });

  // star
  const tagStar = document.createElement('a');
  tagStar.href = '#';
  const starIcon = new Image(20, 20);
  starIcon.src = starPic;
  starIcon.classList.add('dropdown-icons');
  starIcon.classList.add('unused');
  starIcon.id = 'favorites';
  tagStar.addEventListener('click', (e) => {
    selectTag(e);
  });

  // megaphone
  const tagMegafone = document.createElement('a');
  tagMegafone.href = '#';
  const megafoneIcon = new Image(22, 22);
  megafoneIcon.src = megaphonePic;
  megafoneIcon.classList.add('dropdown-icons');
  megafoneIcon.classList.add('unused');
  megafoneIcon.id = 'campaigning';
  tagMegafone.addEventListener('click', (e) => {
    selectTag(e);
  });

  // skate
  const tagSkate = document.createElement('a');
  tagSkate.href = '#';
  const skateIcon = new Image(20, 20);
  skateIcon.src = skatePic;
  skateIcon.classList.add('dropdown-icons');
  skateIcon.classList.add('unused');
  skateIcon.id = 'intramural';
  tagSkate.addEventListener('click', (e) => {
    selectTag(e);
  });

  // beer
  const tagBeer = document.createElement('a');
  tagBeer.href = '#';
  const beerIcon = new Image(20, 20);
  beerIcon.src = beerPic;
  beerIcon.classList.add('dropdown-icons');
  beerIcon.classList.add('unused');
  beerIcon.id = 'drinks';
  tagBeer.addEventListener('click', (e) => {
    selectTag(e);
  });

  const taskBtn = document.createElement('button');
  taskBtn.classList.add('submit-button');
  taskBtn.id = 'taskSubmit-btn';
  taskBtn.type = 'button';
  taskBtn.innerHTML = 'create task';

  // appending
  const taskBtmRow = document.createElement('div');
  taskBtmRow.classList.add('form-lastrow');

  const actualTagContain = document.createElement('div');
  actualTagContain.id = 'tag-container';

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
    tagBeer,
  );

  tagsDropdown.append(
    tagsBtn,
    tagsList,
  );

  actualTagContain.append(
    personalTag,
    workTag,
    tagsDropdown,
  );

  tagsContainer.append(
    actualTagContain,
    taskBtn,
  );

  taskUrgentLabel.append(
    tUrgentTitle,
    taskUrgent,
    myCheck,
  );

  taskBtmRow.append(
    taskDate,
    taskUrgentLabel,
  );

  taskForm.append(
    taskTitle,
    taskDescript,
    taskBtmRow,
    tagsContainer,
  );

  createTask.append(
    createTaskTitle,
    closeBar,
    taskForm,

  );

  div.append(createTask);
  return div;
}

export { createbar };
