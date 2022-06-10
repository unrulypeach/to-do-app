export default function sidebar() {
  const div = document.createElement('div');
  div.classList.add('side-bar-container');

  const sortSect = document.createElement('ul');
  sortSect.classList.add('side-bar');
  sortSect.classList.add('sort');

  const today = document.createElement('li');
  today.classList.add('sort-opt');
  today.innerHTML = 'Today';

  const upcoming = document.createElement('li');
  upcoming.classList.add('sort-opt');
  upcoming.innerHTML = 'Upcoming';

  const urgent = document.createElement('li');
  urgent.classList.add('sort-opt');
  urgent.innerHTML = 'Urgent';

  const typeSect = document.createElement('ul');
  typeSect.classList.add('side-bar');
  typeSect.classList.add('type');

  const personal = document.createElement('li');
  personal.classList.add('type-opt');
  personal.innerHTML = 'Personal';

  const work = document.createElement('li');
  work.classList.add('type-opt');
  work.innerHTML = 'Work';

  sortSect.append(today, upcoming, urgent);
  typeSect.append(personal, work);
  div.append(sortSect, typeSect);
  document.body.appendChild(div);
}