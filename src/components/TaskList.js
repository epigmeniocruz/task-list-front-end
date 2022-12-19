import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';
// curly brackets destructures the parameter
const TaskList = ({taskList, updateTaskStatus, deleteTask }) => {
  
  const updateTaskStatusProp = updateTaskStatus;
  const deleteTaskProp = deleteTask;
  
  const getTaskListJSX = (tasks) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          updateTaskStatus={updateTaskStatusProp}
          deleteTask={deleteTaskProp}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(taskList)}</ul>;
};
// Update proptypes to require the new prop named onUpdateTask whose value is a reference to the function in App.

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
    ), 
    updateTaskStatus: PropTypes.func.isRequired, // this is entirely seperate 
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;
