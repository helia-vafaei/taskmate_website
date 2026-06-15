import React from 'react';
import { useState,useEffect } from 'react'; 
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import './App.css';


function App() {
  const [taskList, setTaskList] = useState(() => {
    const saved = localStorage.getItem('taskList');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  const [taskEdit,setTaskEdit]= useState({});

  return (
    <div >
      <Header/>
      <AddTask taskList={taskList} setTaskList={setTaskList} taskEdit={taskEdit} setTaskEdit={setTaskEdit}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList} taskEdit={taskEdit} setTaskEdit={setTaskEdit}/>
    </div>
  );
}

export default App;
