import { module } from "./modules";
import searchIconPic from './searchIcon.svg';
import todayIconPic from './today.png';
import upcomingIconPic from './upcoming.png';
import urgentIconPic from './urgent.png';
import personalIconPic from './cottageFILL.svg';
import workIconPic from './workFILL.svg';

export default function navbar() {
  const div = document.createElement('div');
  div.classList.add('side-bar-container');

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
  today.addEventListener('click', module.filterTodayItems);

  const todayHead = document.createElement('span');
  todayHead.classList.add('sort-title');
  todayHead.innerHTML = 'Today';

  const todayIcon = document.createElement('span');
  const tIcon = new Image (25, 25);
  tIcon.src = todayIconPic;
  tIcon.id = 'today-icon';

  const upcoming = document.createElement('li');
  upcoming.classList.add('sort-opt');
  upcoming.addEventListener('click', e => {
    module.refreshScreen(module.returnLib());
  });

  const upcomingHead = document.createElement('span');
  upcomingHead.classList.add('sort-title');
  upcomingHead.innerHTML = 'Upcoming';

  const upcomingIcon = document.createElement('span');
  const upIcon = new Image (25, 25);
  upIcon.src = upcomingIconPic;
  upIcon.id = 'upcoming-icon';

  const urgent = document.createElement('li');
  urgent.classList.add('sort-opt');
  urgent.addEventListener('click', module.filterUrgentItems);

  const urgentHead = document.createElement('span');
  urgentHead.classList.add('sort-title');
  urgentHead.innerHTML = 'Urgent';

  const urgentIcon = document.createElement('span');
  const uIcon = new Image (25, 25);
  uIcon.src = urgentIconPic;
  uIcon.id = 'urgent-icon';

  const typeSect = document.createElement('ul');
  typeSect.classList.add('side-bar');
  typeSect.classList.add('type');

  const personal = document.createElement('li');
  personal.classList.add('type-opt');
  
  const personalHead = document.createElement('span');
  personalHead.classList.add('sort-title')
  personalHead.innerHTML = 'Personal';

  const personalIcon = document.createElement('span');
  const pIcon = new Image (22, 22);
  pIcon.src = personalIconPic;
  pIcon.classList.add('icon-white');

  const work = document.createElement('li');
  work.classList.add('type-opt');

  const workHead = document.createElement('span');
  workHead.classList.add('sort-title')
  workHead.innerHTML = 'Work';

  const workIcon = document.createElement('span');
  const wIcon = new Image (22, 22);
  wIcon.src = workIconPic;
  wIcon.classList.add('icon-white');  

  searchIcon.appendChild(sIcon);
  searchLabel.append(searchIcon, searchBar);

  todayIcon.appendChild(tIcon);
  today.append(todayIcon, todayHead);

  upcomingIcon.appendChild(upIcon);
  upcoming.append(upcomingIcon, upcomingHead);

  urgentIcon.appendChild(uIcon);
  urgent.append(urgentIcon, urgentHead);

  personalIcon.appendChild(pIcon);
  personal.append(personalIcon, personalHead);

  workIcon.appendChild(wIcon);
  work.append(workIcon, workHead);

  sortSect.append(today, upcoming, urgent);
  typeSect.append(personal, work);
  div.append(searchLabel, sortSect, typeSect);
  return div;
}