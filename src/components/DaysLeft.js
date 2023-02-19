import './DaysLeft.css';

function DaysLeft(props) {

    return (
        <div className='days-left'>
            <div>
            {props.date.toISOString()} 
            </div>
            <div className='days-left__description'>
                <h2>{props.title} </h2>
                <div className='days-left__days'>{props.daysleft}</div>
            </div>
        </div>
    );
}


export default DaysLeft;