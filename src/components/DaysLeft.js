import './DaysLeft.css';

import './TasksDate';
import TasksDate from './TasksDate';
function DaysLeft(props) {

    let title=props.title;

    const clickHandler=() => {
        console.log('Tıklandı !! ');
        title='Updated!';
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