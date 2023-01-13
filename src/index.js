import './style.css';
import './checkboxStyle.css';
import './urgentCheckboxTask.css';
import './normalCheckboxTask.css';
import './dropdownBtn.css';
import initPage from './createPage';
import { component } from './component';

initPage();
component.refreshScreen(component.returnLib());
