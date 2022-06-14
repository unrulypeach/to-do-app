import {format, compareAsc, add, addDays} from 'date-fns';

function getTodaysDate() {
  return format(new Date(), "yyyy-MM-dd")
}
function getTodaysDatePretty(){
  return format(new Date(), "PP")
}
// function getTomDate() {
//   const today = format(new Date(), 'yyyy-MM-dd');
//   console.log(today);
//   const tmr =  addDays(new Date(2022, 6, 13), 1);
//   console.log(format(tmr, 'yyyy-MM-dd'));
//   return format(tmr, 'yyyy-MM-dd');
// }

function taskFactory (title, description, date) {

  return {
    title,
    description,
    createDate: getTodaysDate(),
    dueDate: date,
    completeted: false
  }
}

//cycle through form childNodes to receive inputs
function getInputValues(formId) {
  const inputsNodeList = document.getElementById(formId).childNodes;
  let taskInfo = [];

  for (let item in inputsNodeList) {
    const input = inputsNodeList[item];

    if (input.type != "button") {
      taskInfo.push(input.value);
    }
  }
  const final = removeUndefined(taskInfo);
  return final;
}
function removeUndefined(data)  {
  return data.filter( element =>  element !== undefined)
}
function newTask(taskFactoryParams) {
  return Object.create(taskFactory.apply(null, taskFactoryParams));
}
function displayTask(taskObj) {

}
export {getTodaysDate, getTodaysDatePretty, taskFactory, getInputValues, newTask}