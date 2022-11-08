import {
  updateLocalStorage, displayTasks, taskList, arrayUpdate,
} from './addRemoveEdit.js';

// function to make use of checkbox
const checkBox = (checkBoxID) => {
  const indexID = checkBoxID.getAttribute('id');
  const inputTask = document.querySelectorAll('.taska');
  if (checkBoxID.checked) {
    inputTask[indexID - 1].style.textDecoration = 'line-through';
    taskList[indexID - 1].completed = true;
  } else {
    inputTask[indexID - 1].style.textDecoration = 'none';
    taskList[indexID - 1].completed = false;
  }
  updateLocalStorage();
};

// To clear completed tasks
const clearButton = () => {
  const newList = taskList.filter((word) => !word.completed);
  let b = 1;
  newList.map((item) => {
    item.index = b;
    b += 1;
    return 0;
  });
  arrayUpdate(newList);
  updateLocalStorage();
  displayTasks();
};

window.checkBox = checkBox;
// eslint-disable-next-line
export { clearButton };