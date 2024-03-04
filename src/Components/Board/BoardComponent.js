import React from 'react';
import SquareComponent from '../Square/SquareComponent';

const BoardComponent = () => {

    const squareComps = [];

    SquareComponent.forEach((value, i) => {
        squareComps.push(
            <SquareComponent value={value} key={i} onClick={() => onClick(i)} />
        )
    })
    return squareComps;
};

return (
    <div className='board'>
        <div>
            <div>{squareComps().slice(0, 3)}</div>
            <div>{squareComps().slice(3, 6)}</div>
            <div>{squareComps().slice(6, 9)}</div>
        </div>
    </div>
)


export default BoardComponent
