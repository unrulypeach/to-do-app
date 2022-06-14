import {format, compareAsc} from 'date-fns';

export function event (title, date) {

  return {
    title,
    date,
    recurring: false
  }
}