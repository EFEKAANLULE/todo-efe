import './InputTask.css'

import TaskForm from './TaskForm'

const InputTask = (props) => {
 // props ı App js e TaskForm dan gelen datayı aktarmak için kullanıyoruz, burada InpuTask middle man aslında, ama middle man i atlayamıyoruz.
 const saveTaskDataHandler = (enteredTaskData) => {
        const newTask = {
        id: Math.random().toString(),
        title: enteredTaskData.title,
        daysleft: enteredTaskData.importance,
        date: enteredTaskData.date
        };
        props.onAddTask(newTask);
    };
  
            // bottom-up
            //we get the entered values from form to ınput task to pass it to App eventually.
            // burada mantıken alt klastan üst klasa bir data geçirmesi yapmaya çalışıyoruz


    return (

        <div className='new-task'>

        <TaskForm onSaveTaskData={saveTaskDataHandler} />

        </div>
    );

    
};

export default InputTask;