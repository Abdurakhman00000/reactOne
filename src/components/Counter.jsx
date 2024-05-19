import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const setMinus = () => {
        setCount(count - 1)
    }

    const setPlus = () => {
        setCount(count + 1)
    }

    const setDelete = () => {
        setCount(0)
    }



    return (
        <div>
            <div className="container">
            <div className="counter">
                <div className="count">
                    <div>{count}</div>
                    <button onClick={setMinus}>-</button>
                    <button onClick={setPlus}>+</button>
                    <button onClick={setDelete}>Del</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Counter;