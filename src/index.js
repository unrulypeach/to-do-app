import './style.css';
import navbar from './navbar';
import createbar from './createbar';
import createPg from './createPage';
import { getTodaysDate, taskFactory, getInputValues, newTask } from './task';
import { module } from './modules';
import { format, compareAsc } from 'date-fns';

var x = Object.create(taskFactory('poop', 29));


// console.log(format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SS"));
// console.log(format(new Date(), "PP"))

createPg();