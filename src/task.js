import {
  format, compareAsc, add, addDays,
} from 'date-fns';

function getTodaysDate() {
  return format(new Date(), 'yyyy-MM-dd');
}
function getTodaysDatePretty() {
  return format(new Date(), 'PP');
}
function taskFactory(title, description, dueDate, urgent, tags) {
  // edit description
  // edit title
  // edit dueDate
  // change completed status

  return {
    title,
    description,
    createDate: getTodaysDate(),
    dueDate,
    urgent,
    tags,
    completeted: false,
  };
}

function getInputValues() {
  const final = [];
  const list = document.getElementsByClassName('task-input');
  // eslint-disable-next-line no-restricted-syntax
  for (const item in list) {
    if (list[item].type !== 'checkbox') {
      final.push(list[item].value);
    } else {
      final.push(list[item].checked);
    }
  }
  const tagList = document.getElementById('tag-container');
  final.push(tagList.className);
  return removeUndefined(final);
}
function removeUndefined(data) {
  return data.filter((element) => element !== undefined);
}
function newTask(taskFactoryParams) {
  return Object.create(taskFactory.apply(null, taskFactoryParams));
}

export {
  getTodaysDate, getTodaysDatePretty, taskFactory, getInputValues, newTask,
};
