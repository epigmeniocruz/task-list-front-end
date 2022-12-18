import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
   // const isComplete is a read-only prop in Task
  // const onUpdateTask = props.onUpdateTask

  const id = props.id;
  const title = props.title;
  const [isComplete, setTaskStatus] = useState(props.isComplete);

  // this function is for updating the state variable, task status of either complete or incomplete
  function completeTask(isComplete){
    if (isComplete === false){
     setTaskStatus(true);
    } else{   
    setTaskStatus(false);}}
// When we click the task button in a Task component, it should update the task's data utilizing the onUpdateTask function.
  // const onTaskButtonClick = (isComplete) => {
  //   const updatedTask = {
  //     id: props.id,
  //     title: props.title,
  //     isComplete: completeTask(isComplete)
  //   };
  //   props.updateTaskStatus(updatedTask);
  // };
// this function sets isComplete as either true or false, it is called when the onTaskButtonClick is set.
  // function completeTask(isComplete){

  //     setCompleteData(isComplete === true);
  //   } else{
  //     setCompleteData(isComplete === false);
  //   }
  // }
  
  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';
  
  return (
    <li className="tasks__item">
      <li>ID: {id}</li>
      <li>title: {title}</li>
      <button className={`tasks__item__toggle ${buttonClass}`}
        onClick={()=>{completeTask}}>Complete task</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // updateTaskStatus: PropTypes.func.isRequired
};

export default Task;
