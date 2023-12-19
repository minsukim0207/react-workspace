import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals'
import Count from './js/Count';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImgChange from './js/ImgChange';
import ObjectExample from './js/ObjectExample';
import AnimalSound from './js/Animal';
import TimerCount from './js/TimerCount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Count />*/}
    <ToggleButton />
    <IndexExample />
    <ImgChange />
    <ObjectExample />
    <AnimalSound />
    <TimerCount />
  </React.StrictMode>
);

reportWebVitals();

// React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
// reportWebVitals : react 성능 측정 메서드