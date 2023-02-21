import './InputTask.css'

import TaskForm from './TaskForm'

const InputTask = (props) => {
 // props ı App js e TaskForm dan gelen datayı aktarmak için kullanıyoruz, burada InpuTask middle man aslında, ama middle man i atlayamıyoruz.
    const saveTaskDataHandler = (EnteredTaskData) =>{
        const taskData = {

            ...EnteredTaskData,
            id:Math.random().toString()

            // bottom-up
            //we get the entered values from form to ınput task to pass it to App eventually.
            // burada mantıken alt klastan üst klasa bir data geçirmesi yapmaya çalışıyoruz
            // 

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