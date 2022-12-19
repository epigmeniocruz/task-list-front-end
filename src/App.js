import React from 'react';
import TaskList from './components/TaskList.js';
import { useState } from 'react';
import './App.css';

const App = () => {
  const initialTasks = [
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

  const initialCopy = initialTasks.map(task => {
    return {...task}; // spread operator
    }); // prevents us from mutating our initial data
  
  const [taskList, setTaskData] = useState(initialCopy); // creates our initial copy as a "state"

  const updateTaskStatus = (taskId, updatedStatus) => {
    // console log to check if this function gets called
    console.log('updateTask called');
    // we need to make a new array if we're updating the state, we can't mutate the original one
    const newTasksList = [];
    for(const task of taskList) {
      if(task.id !== taskId) {
        newTasksList.push(task);
      } else {
        const newTask = {
          ...task, 
          isComplete: updatedStatus
        };
        newTasksList.push(newTask);
      }
    }
    setTaskData(newTasksList);
  };

  const deleteTask = (taskId) => {
    const newTasksList=[];
    for (const task of taskList) {
      if (task.id !== taskId) {
        newTasksList.push(task);
      }
    }
    setTaskData(newTasksList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList 
          taskList={taskList} 
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}/>
        </div>
      </main>
    </div>
    );
};
export default App;


  // Create a function that is responsible for taking in the updated data one task and updating taskData in state.
  // This function takes in one parameter, which is the data for one updated task (updatedTask).
  // This function goes inside the App component, after taskData is defined and before the return statement.
  // This functionc creates an array called tasks, which contains objects of TASKS.
  // It updates taskData in state by invoking setCompleteData (line 42).
  // const updateTaskStatus = (taskID, updatedTask) => {
  //   // we must create a new array, in order to update the Task status
  //   console.log('updateTask status called');
  //   const newTaskList = [];
  //   for (const task of taskData) {
  //     if(task.id !== taskID) {
  //       newTaskList.push(task);
  //     } else {
  //         if (task.isComplete === false){
  //           setTaskData(true);
  //          } else{   
  //          setTaskData(false);}
  //         const newTask = {
  //           ...task,
  //           isComplete: updatedTask
  //         };
  //         newTaskList.push(newTask)}
  //     }
  //   setTaskData(newTaskList);
  // };