import './DaysLeft.css';
import React , {useState} from 'react';
import './TasksDate';
import TasksDate from './TasksDate';
function DaysLeft(props) {

  
    const [title, setTitle] = useState(props.title);

    const clickHandler=() => {

        setTitle('Updated');
        console.log(title);

    }
    return (
        <div className='days-left'>
            <TasksDate date={props.date} ></TasksDate>
            <div className='days-left__description'>
                <h2>{props.title} </h2>
                <p> Days Left:</p>
                <div className='days-left__days'>{props.daysleft}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </div>
    );
}


export default DaysLeft;