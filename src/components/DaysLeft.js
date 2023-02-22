import './DaysLeft.css';
import React, { useState } from 'react';
import './TasksDate';
import TasksDate from './TasksDate';

function DaysLeft(props) {

  const [title] = useState(props.title);
  const [isDone, setIsDone] = useState(false);

  const clickHandler = () => {
    setIsDone(true);
  }

  return (
    <div className='days-left'>
      <TasksDate date={props.date}></TasksDate>
      <div className={`days-left__description${isDone ? ' done' : ''}`}>
        <h2>{title}</h2>
        <p>Importance out of 10:</p>
        <div className='days-left__days'>{props.daysleft}</div>
      </div>
      <button onClick={clickHandler}>Change to Done</button>
      <button>Delete the Task</button>
    </div>
  );
}

export default DaysLeft;
