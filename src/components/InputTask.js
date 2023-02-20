import './InputTask.css'

import TaskForm from './TaskForm'

const InputTask = (props) => {

    const saveTaskDataHandler = (EnteredTaskData) =>{
        const taskData = {

            ...EnteredTaskData,
            id:Math.random().toString()

        };
        props.onAddTask(taskData);
    };


    return (

        <div className='new-task'>

        <TaskForm onSaveTaskData={saveTaskDataHandler} />

        </div>
    );

    
};

export default InputTask;