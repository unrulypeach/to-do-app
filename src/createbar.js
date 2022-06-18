import {format, add} from 'date-fns';
import { getTodaysDate, getInputValues, newTask } from './task';
import { module } from './modules';


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
  
  const taskTitle = document.createElement('input');
  taskTitle.classList.add('task-input');
  taskTitle.id = 'task-title';
  taskTitle.type = 'text';
  taskTitle.placeholder = 'Name';

  const taskDescript = document.createElement('input');
  taskDescript.classList.add('task-input');
  taskDescript.id = 'task-descript';
  taskDescript.type = 'text';
  taskDescript.placeholder = 'Description..';
  
  const taskDate = document.createElement('input');
  taskDate.classList.add('task-input')
  taskDate.type = 'date';
  taskDate.value = getTodaysDate();

  const taskUrgentLabel = document.createElement('label');
  taskUrgentLabel.classList.add('control-checkbox');
  taskUrgentLabel.classList.add('control')

  const tUrgentTitle = document.createElement('span');
  tUrgentTitle.innerHTML = 'Urgent?'

  const taskUrgent = document.createElement('input');
  taskUrgent.type = 'checkbox';

  const myCheck = document.createElement('div');
  myCheck.classList.add('control_indicator');

  const taskBtn = document.createElement('button');
  taskBtn.classList.add('submit-button');
  taskBtn.type = 'button';
  taskBtn.innerHTML = 'create-task';
  taskBtn.addEventListener('click', e => {
    const task = newTask(getInputValues(e.target.parentElement.id));
    module.addTask(task);
    module.addTaskToDom(task);
    module.returnLib();
  });

  const createEvent = document.createElement('div');
  createEvent.classList.add('create-opt');

  const createEventTitle = document.createElement('h1');
  createEventTitle.classList.add('create-bar-subhead');
  createEventTitle.innerHTML = 'Create An Event';

  const eventForm = document.createElement('form');
  eventForm.id = 'event-form';
  
  const eventTitle = document.createElement('input');
  eventTitle.classList.add('event-input');
  eventTitle.id = 'event-title';
  eventTitle.type = 'text';
  eventTitle.placeholder = 'Name..';

  const eventDescript = document.createElement('input');
  eventDescript.classList.add('event-input');
  eventDescript.id = 'event-descript';
  eventDescript.type = 'text';
  eventDescript.placeholder = 'Description..';
  

  const eventDate = document.createElement('input');
  eventDate.classList.add('event-input')
  eventDate.type = 'date';
  eventDate.value = format(new Date(), "yyyy-MM-dd");

  const eventUrgentLabel = document.createElement('label');
  eventUrgentLabel.classList.add('control-checkbox');
  eventUrgentLabel.classList.add('control');

  const eUrgentTitle = document.createElement('span');
  eUrgentTitle.innerHTML = 'Urgent?'

  const eventUrgent = document.createElement('input');
  eventUrgent.type = 'checkbox';

  const myChecks = document.createElement('div');
  myChecks.classList.add('control_indicator');

  const eventBtn = document.createElement('button');
  eventBtn.classList.add('submit-button');
  eventBtn.type = 'button';
  eventBtn.innerHTML = 'create-event';
  eventBtn.addEventListener('click', e => {
    const event = newTask(getInputValues(e.target.parentElement.id));
    module.addTask(event);
    module.addTaskToDom(event);
  });

  const taskBtmRow = document.createElement('div');
  taskBtmRow.classList.add('form-lastrow');
  const eventBtmRow = document.createElement('div');
  eventBtmRow.classList.add('form-lastrow');

  taskUrgentLabel.append(tUrgentTitle, taskUrgent, myCheck);
  taskBtmRow.append(taskDate, taskUrgentLabel)
  taskForm.append(taskTitle, taskDescript, taskBtmRow, taskBtn);

  eventUrgentLabel.append(eUrgentTitle, eventUrgent, myChecks);
  eventBtmRow.append(eventDate, eventUrgentLabel);
  eventForm.append(eventTitle, eventDescript, eventBtmRow, eventBtn);
  
  createTask.append(createTaskTitle, taskForm);
  createEvent.append(createEventTitle, eventForm);
  div.append(createTask, createEvent);

  return div;
}