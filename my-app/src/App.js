import React, {useState} from 'react';
// useState : 상태를 관리하기 위해 사용되는 함수
//사용법 : 배열형식으로 사용을 하며, 첫번째 배열은 현재 상태값, 두번째 배열은 상태 업데이트 하는 값
// const [count, setCount] = useState(0);

function Counter () {
  //자바스크립트 코드 작성하는 공간
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  }
  return ( //html 태그 코드는 return 안에 작성해줌
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increament}>증가시키는 버튼</button>
    </div>
    // 바닐라 자바스크립트에서는 onclick
    // 리액트 자바스크립트에서는  onClick
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

// var : 재할당 재선언 가능
// let : 재할당만 가능
// const : 재선언 재할당 둘다 불가

// export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
// 기본적으로 내보낼 항목을 지정하는 역할을 함
// 다른 Js 에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함