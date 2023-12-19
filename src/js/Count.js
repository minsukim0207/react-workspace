import React, {useState} from 'react';

function AddCount() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>숫자 : {count}</h1>
            <button onClick={increment}>클릭하기</button>
        </div>
    )
}

function Count() {
    return (
        <div>
            <AddCount />
        </div>
    )
}

export default Count;