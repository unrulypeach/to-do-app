import {format, compareAsc, add, addDays} from 'date-fns';

function getTodaysDate() {
  return format(new Date(), "yyyy-MM-dd")
}
function getTodaysDatePretty(){
  return format(new Date(), "PP")
}
function taskFactory (title, description, dueDate, urgent, tags) {

  //edit description
  //edit title
  //edit dueDate
  //change completed status

  return {
    title,
    description,
    createDate: getTodaysDate(),
    dueDate,
    urgent,
    tags,
    completeted: false
  }
}
//cycle through form childNodes to receive inputs
function getInputValues(formId) {
  const inputsNodeList = document.getElementById(formId).childNodes;
  let taskInfo = [];

  for (let item in inputsNodeList) {
    const input = inputsNodeList[item];

    if (input.type != "button" && input.childElementCount === 0) {
      taskInfo.push(input.value);
    } else if (input.childElementCount > 0) {
      for (let i = 0; i < input.childElementCount; i++) {
        const it = input.childNodes[i];
        if (it.hasChildNodes()) {
          taskInfo.push(it.childNodes[1].checked);
        } else {
          taskInfo.push(it.value);
        }
      }
    }
  }
  const final = removeUndefined(taskInfo);
  console.log(taskInfo);
  return final;
}
function removeUndefined(data)  {
  return data.filter( element =>  element !== undefined)
}
function newTask(taskFactoryParams) {
  return Object.create(taskFactory.apply(null, taskFactoryParams));
}

export {getTodaysDate, getTodaysDatePretty, taskFactory, getInputValues, newTask}