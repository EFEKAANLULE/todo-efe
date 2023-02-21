import { useState } from 'react';
import './App.css';
import DaysLeft from './components/DaysLeft';
import InputTask  from './components/InputTask';


function App() {
  const deneme_tasks =[
    { id:'t1', title:'Renew Insurance', daysleft:4,date: new Date(2021,2,21)},
    { id:'t2',title:'Clean the House', daysleft:20,date: new Date(2020,4,29)},
    { id:'t3',title:'Grocery Shopping', daysleft:29,date: new Date(2022,7,30)},
    { id:'t4',title:'Donate to Charity', daysleft:52,date: new Date(2022,5,5)},
   ]; 

  const[tasks,setTasks]=useState(deneme_tasks);

  const addTaskHandler=task =>{
    setTasks(prevTasks=>{
      return [task,...prevTasks];
    })
  }
    const renderedTodo = tasks.map((tasks) => {
        return <DaysLeft title={tasks.title} daysleft={tasks.daysleft} date={tasks.date}/>
    });


  return (
    <div>
      
    <InputTask onAddTask={addTaskHandler}></InputTask>
    {renderedTodo}
    
    </div>
  );
}

export default App;
