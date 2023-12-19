import React, { useState, useEffect, useCallback } from "react";

function ExCallBack() {
    const [count, setCount] = useState(0);
    const inClick = useCallback (() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={inClick}>증가하기</button>
        </div>
    );
}

function TabCount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `${count}`;
    });

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [count, setCount] = useState(0);

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo('');
        setCount(count + 1);
    };

    const removeTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos.splice(index,1);
        setTodos(updateTodos);

        // 할 일 삭제할 경우 count 감소
        setCount(count - 1);
    };

    useEffect(() => {
        document.title = `할일 개수 : ${count}`;
    }, [count]);

    return (
        <div>
            <h2>Todo List</h2>
            <div>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                <button onClick={addTodo}>추가하기</button>
            </div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>삭제하기</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PracticeTwo;