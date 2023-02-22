import './TaskForm.css';

import { useState } from 'react';

const TaskForm = (props) => { 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredImportance, setEnteredImportance] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const importanceChangeHandler = (event) => {
        setEnteredImportance(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim().length !== 0 && enteredImportance.trim().length !==0 && enteredDate.trim().length!==0) {
            console.log('input value is NOT empty');
           

            const taskData = {
                title: enteredTitle,
                importance: enteredImportance,
                date: new Date(enteredDate)
            };

            props.onSaveTaskData(taskData);  //enteredtaskdata, InputTask ın
            setEnteredTitle('');
            setEnteredImportance('');
            setEnteredDate('');
        }
        else{
            alert('Please enter a valid input');

        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-task__controls'>
                <div className='new_task__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
            </div>
            <div className='new-task__controls'>
                <div className='new_task__control'>
                    <label>Importance (out of 10)</label>
                    <input type='number' min='0' max='10' step='1' value={enteredImportance} onChange={importanceChangeHandler} />
                </div>
            </div>
            <div className='new-task__controls'>
                <div className='new_task__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-task__actions'>
                <button type='submit'>Add Task</button>
            </div>
        </form>
    );
}

export default TaskForm;
