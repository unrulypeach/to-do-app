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

  const taskBtn = document.createElement('button');
  taskBtn.classList.add('submit-button');
  taskBtn.type = 'button';
  taskBtn.innerHTML = 'create-task';
  taskBtn.addEventListener('click', e => {
    const task = newTask(getInputValues(e.target.parentElement.id));
    module.addTask(task);
    console.log(module.returnLib());
  });

  const createEvent = document.createElement('div');
  createEvent.classList.add('create-opt');

  const createEventTitle = document.createElement('h1');
  createEventTitle.classList.add('create-bar-subhead');
  createEventTitle.innerHTML = 'Create An Event';

  const eventForm = document.createElement('form');
  eventForm.classList.add('create-form');
  
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

  const eventBtn = document.createElement('button');
  eventBtn.classList.add('submit-button');
  eventBtn.type = 'button';
  eventBtn.innerHTML = 'Create event';


  taskForm.append(taskTitle, taskDescript, taskDate, taskBtn);
  eventForm.append(eventTitle, eventDescript, eventDate, eventBtn);
  createTask.append(createTaskTitle, taskForm);
  createEvent.append(createEventTitle, eventForm);
  div.append(createTask, createEvent);

  document.body.appendChild(div);
}