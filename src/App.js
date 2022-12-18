import React from 'react';
import TaskList from './components/TaskList.js';
import { useState } from 'react';
import './App.css';

const App = () => {
  // everytime taskData is updated, the App component should re-render
  // Create a new piece of state named taskData
  // Create a new update function named setCompleteData
  // Set the initial value of taskData to TASKS
  // Passes the value of taskData to TaskList in the prop tasks
  const tasksData = [
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ];

  const initialCopy = tasksData.map((task) => {
    return{...task};});
  
  const [taskData, setCompleteData] = useState(initialCopy);


  // Create a function that is responsible for taking in the updated data one task and updating taskData in state.
  // This function takes in one parameter, which is the data for one updated task (updatedTask).
  // This function goes inside the App component, after taskData is defined and before the return statement.
  // This functionc creates an array called tasks, which contains objects of TASKS.
  // It updates taskData in state by invoking setCompleteData (line 42).
  const updateTaskStatus = (taskID, updatedTask) => {
    // we must create a new array, in order to update the Task status
    const newTaskList = [];
    for (const task of taskData) {
      if(task.id !== taskID) {
        newTaskList.push(task);
      } else {
        const newTask = {
          ...task,
          isComplete: updatedTask
        };
        newTaskList.push(newTask);
      }
    }
  setCompleteData(newTaskList);
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList 
        tasks={taskData} 
        updateTaskStatus={updateTaskStatus}/>}
        </div>
      </main>
    </div>
    );
};
export default App;
