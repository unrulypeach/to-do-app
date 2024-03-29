import { component } from './component';
import searchIconPic from './assets/searchIcon.svg';
import todayIconPic from './assets/today.png';
import upcomingIconPic from './assets/upcoming.png';
import urgentIconPic from './assets/urgent.png';
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

export default function navbar() {
  const div = document.createElement('div');
  div.classList.add('side-bar-container');

  const header = document.createElement('div');
  header.classList.add('sidebar-header');

  const userContainer = document.createElement('div');
  userContainer.classList.add('userId-container');

  const userName = document.createElement('p');
  userName.id = ('userName');
  userName.innerHTML = 'Hello Guest!';

  const userPic = document.createElement('div');
  userPic.id = ('userPic');

  const signInBtn = document.createElement('button');
  signInBtn.id = ('sign-in');
  signInBtn.innerText = 'Sign In';

  const signOutBtn = document.createElement('button');
  signOutBtn.id = ('sign-out');
  signOutBtn.innerText = 'Sign Out';
  signOutBtn.setAttribute('hidden', 'true');

  const searchLabel = document.createElement('label');
  searchLabel.classList.add('search-label');

  const searchIcon = document.createElement('span');
  const sIcon = new Image(25, 25);
  sIcon.src = searchIconPic;
  sIcon.id = 'search-icon';

  const searchBar = document.createElement('input');
  searchBar.type = 'text';
  searchBar.id = 'search-input';
  searchBar.addEventListener('input', (e) => {
    component.filterSearchItems(e.target.value);
  });

  const sortSect = document.createElement('ul');
  sortSect.classList.add('side-bar');
  sortSect.classList.add('sort');

  const today = document.createElement('li');
  today.classList.add('sort-opt');
  today.addEventListener('click', component.filterTodayItems);

  const todayHead = document.createElement('span');
  todayHead.classList.add('sort-title');
  todayHead.innerHTML = 'Today';

  const todayIcon = document.createElement('span');
  const tIcon = new Image(25, 25);
  tIcon.src = todayIconPic;
  tIcon.id = 'today-icon';

  const upcoming = document.createElement('li');
  upcoming.classList.add('sort-opt');
  upcoming.addEventListener('click', (e) => {
    component.refreshScreen(component.returnLib());
  });

  const upcomingHead = document.createElement('span');
  upcomingHead.classList.add('sort-title');
  upcomingHead.innerHTML = 'Upcoming';

  const upcomingIcon = document.createElement('span');
  const upIcon = new Image(25, 25);
  upIcon.src = upcomingIconPic;
  upIcon.id = 'upcoming-icon';

  const urgent = document.createElement('li');
  urgent.classList.add('sort-opt');
  urgent.addEventListener('click', component.filterUrgentItems);

  const urgentHead = document.createElement('span');
  urgentHead.classList.add('sort-title');
  urgentHead.innerHTML = 'Urgent';

  const urgentIcon = document.createElement('span');
  const uIcon = new Image(25, 25);
  uIcon.src = urgentIconPic;
  uIcon.id = 'urgent-icon';

  const typeSect = document.createElement('ul');
  typeSect.classList.add('side-bar');
  typeSect.classList.add('type');

  const personal = document.createElement('li');
  personal.classList.add('type-opt');
  personal.addEventListener('click', component.filterPersonalItems);

  const personalHead = document.createElement('span');
  personalHead.classList.add('sort-title');
  personalHead.innerHTML = 'Personal';

  const personalIcon = document.createElement('span');
  const pIcon = new Image(22, 22);
  pIcon.src = personalIconPic;
  pIcon.classList.add('icon-white');

  const work = document.createElement('li');
  work.classList.add('type-opt');
  work.addEventListener('click', component.filterWorkItems);

  const workHead = document.createElement('span');
  workHead.classList.add('sort-title');
  workHead.innerHTML = 'Work';

  const workIcon = document.createElement('span');
  const wIcon = new Image(22, 22);
  wIcon.src = workIconPic;
  wIcon.classList.add('icon-white');

  // dropdown
  const tagsDropdown = document.createElement('div');
  tagsDropdown.classList.add('dropdown', 'nav-drop');

  const tagsBtn = document.createElement('button');
  tagsBtn.classList.add('dropbtn', 'nav-drop');
  tagsBtn.innerHTML = '+';

  const tagsList = document.createElement('div');
  tagsList.classList.add('dropdown-content');

  // travel
  const tagTravel = document.createElement('a');
  tagTravel.href = '#';
  const travelIcon = new Image(20, 20);
  travelIcon.src = travelPic;
  travelIcon.classList.add('dropdown-icons');
  travelIcon.classList.add('unused');
  travelIcon.id = 'leftTravel';
  travelIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // dining
  const tagDine = document.createElement('a');
  tagDine.href = '#';
  const dineIcon = new Image(20, 20);
  dineIcon.src = dinePic;
  dineIcon.classList.add('dropdown-icons');
  dineIcon.classList.add('unused');
  dineIcon.id = 'leftDining';
  dineIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // cake
  const tagCake = document.createElement('a');
  tagCake.href = '#';
  const cakeIcon = new Image(20, 20);
  cakeIcon.src = cakePic;
  cakeIcon.classList.add('dropdown-icons');
  cakeIcon.classList.add('unused');
  cakeIcon.id = 'leftBirthdays';
  cakeIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // weights
  const tagWeight = document.createElement('a');
  tagWeight.href = '#';
  const weightIcon = new Image(20, 20);
  weightIcon.src = weightsPic;
  weightIcon.classList.add('dropdown-icons');
  weightIcon.classList.add('unused');
  weightIcon.id = 'leftExcercise';
  weightIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // meeting
  const tagMeet = document.createElement('a');
  tagMeet.href = '#';
  const meetIcon = new Image(20, 20);
  meetIcon.src = meetPic;
  meetIcon.classList.add('dropdown-icons');
  meetIcon.classList.add('unused');
  meetIcon.id = 'leftMeetings';
  meetIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // star
  const tagStar = document.createElement('a');
  tagStar.href = '#';
  const starIcon = new Image(20, 20);
  starIcon.src = starPic;
  starIcon.classList.add('dropdown-icons');
  starIcon.classList.add('unused');
  starIcon.id = 'leftFavorites';
  starIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // megaphone
  const tagMegafone = document.createElement('a');
  tagMegafone.href = '#';
  const megafoneIcon = new Image(22, 22);
  megafoneIcon.src = megaphonePic;
  megafoneIcon.classList.add('dropdown-icons');
  megafoneIcon.classList.add('unused');
  megafoneIcon.id = 'leftCampaigning';
  megafoneIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // skate
  const tagSkate = document.createElement('a');
  tagSkate.href = '#';
  const skateIcon = new Image(20, 20);
  skateIcon.src = skatePic;
  skateIcon.classList.add('dropdown-icons');
  skateIcon.classList.add('unused');
  skateIcon.id = 'leftIntramural';
  skateIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

  // beer
  const tagBeer = document.createElement('a');
  tagBeer.href = '#';
  const beerIcon = new Image(20, 20);
  beerIcon.src = beerPic;
  beerIcon.classList.add('dropdown-icons');
  beerIcon.classList.add('unused');
  beerIcon.id = 'leftDrinks';
  beerIcon.addEventListener('click', (e) => {
    component.createFilter(e.target.id, e.target.src);
  });

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

  userContainer.append(userName, userPic);
  header.append(userContainer, signInBtn, signOutBtn);
  sortSect.append(today, upcoming, urgent);
  typeSect.append(personal, work);
  div.append(header, searchLabel, sortSect, typeSect, tagsDropdown);
  return div;
}
