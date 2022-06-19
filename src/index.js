import './style.css';
import './checkboxStyle.css';
import './urgentCheckboxTask.css';
import './normalCheckboxTask.css';
import './dropdownBtn.css';
import navbar from './navbar';
import createbar from './createbar';
import initPage from './createPage';
import { getTodaysDate, taskFactory, getInputValues, newTask } from './task';
// import { module } from './modules';
import { format, compareAsc } from 'date-fns';
import { module } from './modules';

var x = Object.create(taskFactory('poop', 29));


// console.log(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SS"));
// console.log(format(new Date(), "PP"))
initPage();
module.refreshScreen(module.returnLib());