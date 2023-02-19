
import './App.css';
import DaysLeft from './components/DaysLeft';

function App() {

  const tasks =[
    { id:'t1', title:'Renew Insurance', daysleft:4,date: new Date(2021,2,21)},
    { id:'t2',title:'Clean the House', daysleft:20,date: new Date(2020,4,29)},
    { id:'t3',title:'Grocery Shopping', daysleft:29,date: new Date(2022,7,30)},
    { id:'t4',title:'Donate to Charity', daysleft:52,date: new Date(2022,5,5)},

  ];
  return (
    <div>
      
    <h1>LETS GET STARTED!</h1>
    <DaysLeft title = {tasks[0].title} daysleft={tasks[0].daysleft} date={tasks[0].date} ></DaysLeft>
    <DaysLeft title = {tasks[1].title} daysleft={tasks[1].daysleft} date={tasks[1].date} ></DaysLeft>
    <DaysLeft title = {tasks[2].title} daysleft={tasks[2].daysleft} date={tasks[2].date} ></DaysLeft>
    <DaysLeft title = {tasks[3].title} daysleft={tasks[3].daysleft} date={tasks[3].date} ></DaysLeft>

    </div>
  );
}

export default App;
