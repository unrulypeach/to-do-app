import navbar from './navbar';
import { createbar } from './createbar';
import { getTodaysDatePretty } from './task';

export default function initPage() {
  const main = document.createElement('div');
  main.classList.add('main-container');

  const midDiv = document.createElement('div');
  midDiv.classList.add('mid-container');

  const midTitle = document.createElement('h1');
  midTitle.id = 'tasks-container-title';
  midTitle.innerHTML = getTodaysDatePretty();

  const openBar = document.createElement('button');
  openBar.classList.add('close-create-bar');
  openBar.innerHTML = '+';
  openBar.addEventListener('click', (e) => {
    e.target.parentNode.nextElementSibling.classList.toggle('hide');
  });

  const tasksContainer = document.createElement('div');
  tasksContainer.id = 'tasks-container';

  midDiv.append(openBar, midTitle, tasksContainer);
  main.append(navbar(), midDiv, createbar());
  document.body.appendChild(main);
}
