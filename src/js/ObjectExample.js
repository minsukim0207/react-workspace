import React, { useState } from "react";

function ObjectExample() {
    const [person, setPerson] = useState({name:'KH', age:20});
    const updateAge = () => {
        setPerson({...person, age : person.age + 1});
        // ...person : 현재 person 객체 속성을 펼쳐서 새로운 객체로 만들어주는 역할
        // 객체 속성들은 그대로 복사가 되어 만들어짐
        // ...person, age, 복사된 객체에서 값이 변화하거나 추가해야할 내용이 있으면 , 뒤에 값과 속성을 추가함
    }
    return (
        <div>
            <p>Name : {person.name}</p>
            <p>Age : {person.age}</p>
            <button onClick={updateAge}>나이 올리기</button>
        </div>
    );
}
export default ObjectExample;