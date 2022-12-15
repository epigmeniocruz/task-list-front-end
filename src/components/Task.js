import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = (props) => {
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  // function strikeThroughText(){
  //   let status = props.isComplete

  // }
  return (
    <li className="tasks__item">
      <li>ID: {props.id}</li>
      <li>title: {props.title}</li>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      ></button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
