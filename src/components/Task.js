
import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';


const Task = (props) => {

  const id = props.id;
  const title = props.title;
  const taskStatus = props.isComplete;
  const updateTaskStatus = props.updateTaskStatus;
  const deleteTask = props.deleteTask;

  
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  
  //this function changes the taskstatus to either complete or incomplete
  function toggleComplete(taskStatus) {
    if (taskStatus === false) {
      updateTaskStatus(id, true);
    }
      else {
      updateTaskStatus(id, false);
  }}

  return (
    <li className="tasks__item">
      <li>ID: {id}</li>
      <li>title: {title}</li>
      <button className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => toggleComplete(taskStatus)}>Complete task</button>
      <button className="tasks__item__remove button"
        onClick={() => deleteTask(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
