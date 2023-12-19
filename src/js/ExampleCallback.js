import React, { useCallback, useState } from "react";

function ExampleCallback() {
    const [count, setCount] = useState(0);

    const increClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increClick}>증가</button>
        </div>
    );
}
export default ExampleCallback;