import { useState } from 'react';
import './App.css';
import DaysLeft from './components/DaysLeft';
import InputTask  from './components/InputTask';

function App() {
  const deneme_tasks = [
    { id: 't1', title: 'Renew Insurance', daysleft: 4, date: new Date(2021, 2, 21) },
    { id: 't2', title: 'Clean the House', daysleft: 2, date: new Date(2020, 4, 29) },
    { id: 't3', title: 'Grocery Shopping', daysleft: 9, date: new Date(2022, 7, 30) },
    { id: 't4', title: 'Donate to Charity', daysleft: 7, date: new Date(2022, 5, 5) },
  ];

  const [tasks, setTasks] = useState(deneme_tasks);

  let abc =3;

  const addTaskHandler = (task) => {
    abc=7;
    setTasks((prevTasks) => [task, ...prevTasks]);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const renderedTodo = tasks.map((task) => (
    <DaysLeft
      key={task.id} // element ekleyince, inspect de refresh ( flash ) engellemek için.
      id={task.id}
      title={task.title}
      daysleft={task.daysleft}
      date={task.date}
      onDeleteTask={deleteTaskHandler} //önemli!, ilk başta ben returnda göndermeye çalışıyodum.
    />
  ));

  console.log(abc);
  return (
    <div>
      <InputTask onAddTask={addTaskHandler} />
      <div className='totaltasks'>{renderedTodo} </div>
      
    </div>
  );
}


export default App;
