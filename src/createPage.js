import navbar from './navbar';
import createbar from './createbar';
import { getTodaysDatePretty } from './task';


export default function initPage(){
  const main = document.createElement('div');
  main.classList.add('main-container');

  const midDiv = document.createElement('div');
  midDiv.classList.add('tasks-container');
  midDiv.id = 'tasks-container';

  const midTitle = document.createElement('h1');
  midTitle.id = 'tasks-container-title';
  midTitle.innerHTML = getTodaysDatePretty();
  
  midDiv.appendChild(midTitle);
  main.append(navbar(), midDiv, createbar());
  document.body.appendChild(main);
}