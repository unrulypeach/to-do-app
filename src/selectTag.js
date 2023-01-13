// onclick:
//   bgc = darker -> remove .unused
//   check if there is another one
//   set parent div class to = icons id
export default function selectTag(event) {
  //set all icons to unused (10/11)
  const unusedIcons = document.getElementsByClassName('unused');
  //set clicked one as in-use
  const setId = event.target.id;
  const iconToParent = event.target.parentNode.parentNode;
  const dropToParent = event.target.parentNode.parentNode.parentNode.parentNode;
  const parentId = document.getElementById('tag-container')

  event.target.classList.toggle('unused');

  if (iconToParent.id === 'tag-container'){
    // delete iconToParent.dataset.value;
    // iconToParent.dataset.value = setId;
    iconToParent.classList.toggle(setId);
  } else if (dropToParent.id === 'tag-container'){
    // delete dropToParent.dataset.value;
    dropToParent.classList.toggle(setId);
  }
};  