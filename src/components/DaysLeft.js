import './DaysLeft.css';

function DaysLeft() {

    const daysDate = new Date(2021,2,28);
    const taskTitle = 'Renew Insurance';
    const daysLeft = 4;

    return (
        <div className='days-left'>
            <div>
            {daysDate.toISOString()} 
            </div>
            <div className='days-left__description'>
                <h2>{taskTitle} </h2>
                <div className='days-left__price'>{daysLeft}</div>
            </div>
        </div>
    );
}


export default DaysLeft;