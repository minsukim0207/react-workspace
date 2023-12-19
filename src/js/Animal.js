import React, { useState, useEffect } from "react";

function AnimalSound() {
    const [animal, setAnimal] = useState('cat');
    useEffect(() => {
        // 연결될 때 바로 실행
        console.log('${animal} : mew')
    
        // 함수 연결이 정리될 때 실행
        return () => {
            console.log(`종료`);
        };
    }, [animal]);   // animal이 바뀔때마다 실행

    const handleSound = (newAnimal) => {
        setAnimal(newAnimal);
    }

    return(
        <div>
            <h1>동물 소리 앱</h1>
            <p>{animal} 소리는 </p>
            <button onClick={() => handleSound('cat')}>Cat</button>
            <button onClick={() => handleSound('dog')}>Dog</button>
            <button onClick={() => handleSound('bird')}>Bird</button>
        </div>
    )
}
export default AnimalSound;