import './DaysLeft.css';
import React, { useState } from 'react';
import './TasksDate';
import TasksDate from './TasksDate';

function DaysLeft(props) {

  console.log(props.title);
  const [title] = useState(props.title);
  const [isDone, setIsDone] = useState(false);

  const clickHandler = () => {
    setIsDone(true);
  }
  const deleteHandler = () => {
    props.onDeleteTask(props.id);
  };
  
// TasksDate olarak ayrı bir component açmak gereksiz, sadece deneyip görmek için yaptım. Bence daha çok akıl karıştırıcı. ayrı ayrı kontrol gün ay

  return (
    <div className='days-left'>
      <TasksDate date={props.date}></TasksDate> 
      <div className={`days-left__description${isDone ? ' done' : ''}`}> 
        <h2>{title}</h2>
        <p>Importance out of 10:</p>
        <div className='days-left__days'>{props.daysleft}</div>
      </div>
      <button onClick={clickHandler}>Change to Done</button>
      <button onClick={deleteHandler} >Delete the Task</button>
    </div>
  );
}

export default DaysLeft;
