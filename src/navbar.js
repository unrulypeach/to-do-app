import { module } from "./modules";
import searchIconPic from './searchIcon.svg';
export default function navbar() {
  const div = document.createElement('div');
  div.classList.add('side-bar-container');

  // const date = document.createElement('div');
  // date.classList.add('todays-date');
  // date.innerHTML = getTodaysDatePretty();
  const searchLabel = document.createElement('label');
  searchLabel.classList.add('search-label');

  const searchIcon = document.createElement('span');
  const sIcon = new Image(25, 25);
  sIcon.src = searchIconPic;
  sIcon.id = 'search-icon'

  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.id = 'search-input'

  const sortSect = document.createElement('ul');
  sortSect.classList.add('side-bar');
  sortSect.classList.add('sort');

  const today = document.createElement('li');
  today.classList.add('sort-opt');
  today.innerHTML = 'Today';
  today.addEventListener('click', module.filterTodayItems);

  const upcoming = document.createElement('li');
  upcoming.classList.add('sort-opt');
  upcoming.innerHTML = 'Upcoming';
  upcoming.addEventListener('click', e => {
    module.refreshScreen(module.library)
  });

  const urgent = document.createElement('li');
  urgent.classList.add('sort-opt');
  urgent.innerHTML = 'Urgent';
  urgent.addEventListener('click', module.filterUrgentItems);

  const typeSect = document.createElement('ul');
  typeSect.classList.add('side-bar');
  typeSect.classList.add('type');

  const personal = document.createElement('li');
  personal.classList.add('type-opt');
  personal.innerHTML = 'Personal';

  const work = document.createElement('li');
  work.classList.add('type-opt');
  work.innerHTML = 'Work';

  searchIcon.appendChild(sIcon);
  searchLabel.append(searchIcon, searchBar);
  sortSect.append(today, upcoming, urgent);
  typeSect.append(personal, work);
  div.append(searchLabel, sortSect, typeSect);
  return div;
}