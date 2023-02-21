
import './TaskForm.css';

import { useState } from 'react';
const TaskForm = (props) => { // we use props here for the bottom up data pass to InputTask class

    const[enteredTitle, setEnteredTitle]= useState('');
    const[enteredDays, setEnteredDays] = useState('');
    const[enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value);

    };

    const daysChangeHandler = (event) => {
        setEnteredDays(event.target.value);

    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    };

    const submitHandler = (event) =>{
        event.preventDefault(); // cancelling the refresh of page

        const taskData = {
            title: enteredTitle,
            daysLeft: enteredDays,
            date : new Date(enteredDate)
        };
        props.onSaveTaskData(taskData);
        setEnteredTitle('');
        setEnteredDays('');
        setEnteredDate('');

    };


    return <form onSubmit={submitHandler}>
        <div className='new-task__controls'>
            <div className='new_task__control'>
                <label> Title</label>
                <input value={enteredTitle} type='text' onChange={titleChangeHandler} />
            </div>
        </div>
        <div className='new-task__controls'>
            <div className='new_task__control'>
                <label>Days Left:</label>
                <input type='number' value={enteredDays} onChange={daysChangeHandler}/>
            </div>
        </div>
        <div className='new-task__controls'>
            <div className='new_task__control'>
                <label> Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className='new-task__actions'> 
            <button type='submit'>Add Task</button>
        </div>
    </form>
}

export default TaskForm;