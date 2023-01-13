import './styles/style.css';
import './styles/checkboxStyle.css';
import './styles/urgentCheckboxTask.css';
import './styles/normalCheckboxTask.css';
import './styles/dropdownBtn.css';
import initPage from './createPage';
import { component } from './component';

initPage();
component.refreshScreen(component.returnLib());
